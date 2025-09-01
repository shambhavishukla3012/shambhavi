import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './About.css'
const About = () => {
  const handleViewResume = () => {
    window.open("src/Resume.pdf", "_blank");
  };

  return (
    <section id="about">
      <Container style={{ maxWidth: "1200px" }}>
        {/* Title */}
        <div className="section-title text-center mb-5">
          <h2>About Me</h2>
        </div>

        <Row className="align-items-center">
          {/* Profile Image */}
          <Col lg={5} className="text-center mb-3 mb-lg-0">
            <img
              src="/images/me.JPG"
              alt="Profile"
              className="img-fluid profile-img"
            />
          </Col>

          {/* Bio */}
          <Col lg={7}>
            <h3>Software Developer & Web Enthusiast</h3>

            <p>
         I’m a software engineer with a Master’s in Computer Science, passionate about building systems that are reliable, scalable, and efficient. I have worked with nonprofits, startups, financial institutions, and enterprise contact centers, where I built cloud-native applications, designed microservices, and mentored teams. </p>

            <p>
  Recently, I have focused on streamlining APIs, improving performance for large user bases, and leading infrastructure migrations that simplify systems and reduce costs. These experiences strengthened my belief that engineering is about more than code. For me, it is about curiosity, collaboration, and creating solutions that last.</p>
       
            <p>
   Beyond my technical work, I find joy in mentoring and creative projects. I also hold a master’s distinction in Bharatanatyam, a classical Indian dance. Both dance and engineering have taught me the importance of discipline and creativity, providing a fresh perspective I bring to every project.         </p>

            <div className="hero-buttons d-flex flex-wrap gap-3 mt-4">
              <Button className="learn-more" onClick={handleViewResume}>
                <FontAwesomeIcon icon={faDownload} className=" me-2" /> View
                Resume
              </Button>

              <Button className="get-btn" href="#contact">
                <FontAwesomeIcon icon={faEnvelope} className=" me-2" /> Contact Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;