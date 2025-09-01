import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

dotenv.config();

if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASS || !process.env.ADMIN_EMAIL) {
  throw new Error('Missing env: GMAIL_USER, GMAIL_APP_PASS, ADMIN_EMAIL');
}

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://shambhavishukla.vercel.app',
];

const corsOptions = {
  origin: (origin, cb) => {
    if (!origin) return cb(null, true);              
    return allowedOrigins.includes(origin)
      ? cb(null, true)
      : cb(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/send-email', rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again later.',
}));

const ALLOWED_MIME = new Set([
  'application/pdf',
  'application/msword', 
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/csv', 
  'image/jpeg',
  'image/png',
  'image/gif',
  'video/mp4',
]);

const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 }, 
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED_MIME.has(file.mimetype)) {
      return cb(new Error('Unsupported file type. Allowed: PDF, DOC, DOCX, XLS, XLSX, CSV, JPG, JPEG, PNG, GIF, MP4'));
    }
    cb(null, true);
  }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS,
  },
});

app.get('/', (_req, res) => res.status(200).send('OK'));


app.post('/send-email', upload.single('attachment'), async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const attachment = req.file;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).send('All required fields must be filled.');
    }

 
    const attachments = attachment ? [{
      filename: attachment.originalname,
      content: attachment.buffer,       
      contentType: attachment.mimetype,
    }] : [];


    const adminSubject = `New Contact Form: ${firstName} ${lastName}`;
    const adminText =
`Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Message:
${message}`;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: adminSubject,
      text: adminText,
      attachments,
      replyTo: email, 
    });

    await transporter.sendMail({
      from: `"Shambhavi Shukla" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Thanks for contacting me!',
      text:
`Hi ${firstName},

Thanks for reaching out! I’ve received your message and will get back to you shortly.

Best regards,
Shambhavi Shukla`,
      replyTo: process.env.ADMIN_EMAIL,
    });

    res.status(200).send('Emails sent successfully');
  } catch (error) {
    console.error('Error sending email:', error?.response || error?.message || error);
    const msg = String(error?.message || '');
    if (msg.includes('Unsupported file type')) {
      return res.status(400).send('Unsupported file type. Allowed: PDF, DOC, DOCX, XLS, XLSX, CSV, JPG, JPEG, PNG, GIF, MP4');
    }
    if (msg.includes('File too large')) {
      return res.status(400).send('File too large. Max 10 MB.');
    }

    res.status(500).send('Failed to send email');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
