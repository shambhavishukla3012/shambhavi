import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const handleViewResume = () => {
    window.open("src/Resume.pdf", "_blank");
  };

  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--section-bg)",
        padding: "30px 0px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Container style={{ maxWidth: "1200px" }}>
        <div className="section-title">
          <h2
            style={{
              fontSize: "44px",
              fontWeight: "700",
              color: "var(--dark-green)",
              textAlign: "center",
              marginBottom: "50px",
            }}>
            About Me
          </h2>
        </div>
        <Row className="align-items-center">
          <Col lg={5} className="text-center mb-4 mb-lg-0">
            <img
              src="/images/me.JPG"
              alt="Workspace"
              className="img-fluid"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "6px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                maxHeight: "300px",
              }}
            />
          </Col>
          <Col lg={7}>
            <h3 className="fw-bold mb-4 ms-2">
              Software Developer & Web Enthusiast
            </h3>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.4",
                color: "var(--blue)",
                marginBottom: "20px",
                textAlign: "justify",
                padding: "10px",
              }}>
              I'm a passionate full stack developer with a focus on building
              modern, responsive, and user-centric web applications. I hold a
              Computer Science degree from Indiana University Bloomington (May
              2024) and currently contribute my skills to Project990, a
              nonprofit organization creating digital solutions for social good.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.4",
                color: "var(--blue)",
                textAlign: "justify",
                marginBottom: "20px",
                padding: "10px",
              }}>
              Previously, I worked closely with early-stage startups through an
              entrepreneurship cell, helping them build and scale their tech
              foundations. I’ve also led workshops to empower women by
              developing their entrepreneurial, social, and interpersonal
              skills—an initiative close to my heart.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.4",
                color: "var(--blue)",
                marginBottom: "25px",
                textAlign: "justify",
                padding: "10px",
              }}>
              Outside of tech, I stay grounded through community service and
              creative expression. I regularly volunteer for environmental
              causes and hold a master’s distinction in Bharatanatyam, a
              classical Indian dance form that fuels my creativity and
              discipline. Tech, impact, and art shape who I am—and I’m always
              eager to take on challenges that sit at the intersection of all
              three.
            </p>
            <div className="d-flex mt-4">
              <Button
                variant="primary"
                // href="src\Resume\Resume.pdf"
                onClick={handleViewResume}
                // target="_blank"
                // download="Resume.pdf"
                className="me-3"
                style={{
                  backgroundColor: "var(--light-green)",
                  border: "none",
                  borderRadius: "6px",
                  padding: "8px 25px",
                  fontWeight: "500",
                  transition: "background-color 0.3s",
                }}>
                <FontAwesomeIcon icon={faDownload} className="me-2" /> View
                Resume
              </Button>
              <Button
                variant="outline-primary"
                href="#contact"
                style={{
                  backgroundColor: "white",
                  color: "#333",
                  borderColor: "#ccc",
                  borderRadius: "6px",
                  padding: "12px 25px",
                  fontWeight: "500",
                  transition: "background-color 0.3s",
                }}>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Contact
                Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
