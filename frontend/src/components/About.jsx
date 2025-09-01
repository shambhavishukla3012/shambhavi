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
              marginBottom: "20px",
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
                marginBottom: "5px",
                textAlign: "justify",
                padding: "10px",
              }}>
      I’m a software engineer with a Master’s in Computer Science, and I enjoy designing systems that are reliable, scalable, and efficient. I’ve worked on projects across nonprofits, enterprise contact centers, large financial institutions, and startups, where I built cloud-native applications, designed microservices, and mentored teams through collaborative practices.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.4",
                color: "var(--blue)",
                textAlign: "justify",
                marginBottom: "5px",
                padding: "10px",
              }}>
         My recent work has focused on streamlining APIs, improving performance for large user bases, and leading migrations that simplify infrastructure while reducing costs. These experiences taught me the value of building systems that last while keeping people at the center. For me, engineering is not just about writing code. It is about curiosity, collaboration, and creating solutions with lasting impact. I believe the best results come from environments where ideas are nurtured, perspectives are valued, and progress is built together.</p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.4",
                color: "var(--blue)",
                marginBottom: "15px",
                textAlign: "justify",
                padding: "10px",
              }}>
       Outside of work, I enjoy mentoring, exploring creative projects, and staying engaged with my community. I also hold a master’s distinction in Bharatanatyam, a classical Indian dance form. Both dance and engineering have shaped my discipline and creativity, giving me balance and a fresh perspective that I bring into everything I do.
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
