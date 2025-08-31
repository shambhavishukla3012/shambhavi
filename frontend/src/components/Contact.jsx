import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const API_BASE = import.meta.env.VITE_API_BASE?.replace(/\/+$/, "") || "";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+1", // Default country code
    message: "",
    attachment: null,
  });

  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneError, setPhoneError] = useState(""); // For phone validation errors

  // Ref for the file input
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0],
    });
  };

  const validatePhoneNumber = () => {
    if (formData.phone) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phone)) {
        setPhoneError("Phone number must be 10 digits.");
        return false;
      }
    }
    setPhoneError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false || !validatePhoneNumber()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", `${formData.countryCode} ${formData.phone}`);
    formDataToSend.append("message", formData.message);
    if (formData.attachment) {
      formDataToSend.append("attachment", formData.attachment);
    }

    try {
      const response = await fetch(`${API_BASE}/send-email`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          countryCode: "+1",
          message: "",
          attachment: null,
        });

        // Clear the file input field
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setValidated(false);
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Get in touch or just to say hi</p>
        </div>

        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            {submitted && (
              <Alert
                variant="success"
                onClose={() => setSubmitted(false)}
                dismissible>
                Thank you for reaching out! I'll connect back shortly.
              </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your first name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Last Name*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your last name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <div className="d-flex">
                      <Form.Select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="me-2"
                        style={{ width: "30%" }}>
                        <option value="+1">+1 (USA)</option>
                        <option value="+91">+91 (India)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+61">+61 (Australia)</option>
                        <option value="+81">+81 (Japan)</option>
                      </Form.Select>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number (optional)"
                      />
                    </div>
                    {phoneError && (
                      <div className="text-danger mt-1">{phoneError}</div>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Message*</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="How can I help you?"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your message.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Attachment</Form.Label>
                <Form.Control
                  type="file"
                  ref={fileInputRef} // Attach the ref to the file input
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.csv,.xls,.xlsx,.jpg,.jpeg,.png,.gif,.mp4"
                />
                <Form.Text className="text-muted">
                  You can attach documents, images, or videos (max 10MB).
                </Form.Text>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                size="lg"
                className="w-100"
                disabled={isLoading}
                style={{
                  backgroundColor: "var(--dark-green)",
                  borderColor: "var(--dark-green)",
                }}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </Form>
          </Col>

          <Col lg={6}>
            <div
              className="contact-info p-4 rounded shadow h-100"
              style={{ backgroundColor: "white", color: "#333" }}>
              <h3 className="mb-4">Contact Information</h3>

              <div className="d-flex mb-4">
                <div className="contact-icon me-3">
                  <i
                    className="fas fa-map-marker-alt"
                    style={{
                      fontSize: "24px",
                      color: "var(--dark-green)",
                    }}></i>
                </div>
                <div className="contact-details">
                  <h5 className="mb-1">Indianapolis</h5>
                  <p>Indiana, USA</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="contact-icon me-3">
                  <i
                    className="fas fa-envelope"
                    style={{
                      fontSize: "24px",
                      color: "var(--dark-green)",
                    }}></i>
                </div>
                <div className="contact-details">
                  <h5 className="mb-1">Email</h5>
                  <p>shambhavishukla844@gmail.com</p>
                </div>
              </div>

              <div
                className="map-container mt-4 rounded overflow-hidden"
                style={{ height: "300px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96490.39245503732!2d-86.25198901778213!3d39.7684031353314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b506f74e11f5b%3A0xd6aaeb52e6c8f7e5!2sIndianapolis%2C%20IN%2C%20USA!5e0!3m2!1sen!2sus!4v1713042396023!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"></iframe>
              </div>

              <div className="social-links mt-4 text-center">
                <h5 className="mb-3">Connect With Me</h5>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://github.com/shambhavishukla3012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon mx-2"
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                      lineHeight: "40px",
                      borderRadius: "50%",
                      backgroundColor: "var(--dark-green)",
                      color: "white",
                      textAlign: "center",
                      transition: "all 0.3s",
                      textDecoration: "none",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "var(--light-green)";
                      e.target.style.transform = "translateY(-3px)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "var(--dark-green)";
                      e.target.style.transform = "translateY(0)";
                    }}>
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/shambhavishukla844"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon mx-2"
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                      lineHeight: "40px",
                      borderRadius: "50%",
                      backgroundColor: "var(--dark-green)",
                      color: "white",
                      textAlign: "center",
                      transition: "all 0.3s",
                      textDecoration: "none",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "var(--light-green)";
                      e.target.style.transform = "translateY(-3px)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "var(--dark-green)";
                      e.target.style.transform = "translateY(0)";
                    }}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
