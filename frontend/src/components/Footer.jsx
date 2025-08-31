
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-black py-4">
      <Container>
        <Row className="align-items-center">
          {/* <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h4 className="mb-0">name</h4>
            <p className="mb-0">Software Developer</p>
          </Col> */}
          <Col md={12} className="text-center text-md-end">
            <p className="mb-0">&copy; {currentYear} Shambhavi Arvind Shukla</p>
            {/* <h4 className="mb-0">SS</h4> */}
            {/* <p className="mb-0">Software Developer</p> */}

          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
