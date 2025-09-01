import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faTerminal,
  faSync,
  faBolt,
  faLeaf,
  faFlask,
  faTools,
  faChartBar,
  faChartPie,
  faEnvelope,
  faMobileAlt,
  faServer ,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faJs,
  faJava,
  faCss3,
  faHtml5,
  faBootstrap,
  faReact,
  faNode,
  faDocker,
  faAws,
  faGitAlt,
  faGithub,
  faJira,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const sectionRef = useRef(null);

  const technologies = [
    { name: "C", icon: faCode },
    { name: "C++", icon: faCode },
    { name: "Python", icon: faPython },
    { name: "JavaScript", icon: faJs },
    { name: "Java", icon: faJava },
    { name: "Bash", icon: faTerminal },
    { name: "SQL", icon: faDatabase },
    { name: "PL/SQL", icon: faDatabase },
    { name: "TailwindCSS", icon: faCss3 },
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "ReactJS", icon: faReact },
    { name: "Next.js", icon: faReact },    
    { name: "Redux", icon: faSync },
    { name: "Vite", icon: faBolt },
    { name: "jQuery", icon: faCode },
    { name: "NodeJS", icon: faNode },
    { name: "ExpressJS", icon: faNode },
    { name: "App Development", icon: faMobileAlt },
    { name: "Django", icon: faServer  },
    { name: "Flask", icon: faFlask },
    { name: "Spring Boot", icon: faLeaf },
    { name: "Oracle 19c", icon: faDatabase },
    { name: "PostgreSQL", icon: faDatabase },
    { name: "MySQL", icon: faDatabase },
    { name: "MongoDB", icon: faDatabase },
    { name: "Informatica PowerCenter", icon: faTools },
    { name: "SAS Visual Analytics", icon: faChartBar },
    { name: "Power BI", icon: faChartPie },
    { name: "Docker", icon: faDocker },
    { name: "AWS", icon: faAws },
    { name: "Git", icon: faGitAlt },
    { name: "GitHub", icon: faGithub },
    { name: "JIRA", icon: faJira },
    { name: "Postman", icon: faEnvelope },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const skillItems = entry.target.querySelectorAll(".skill-item");

          if (entry.isIntersecting) {
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-5">
      <Container>
        <div className="section-title text-center mb-5">
          <h2>Skills</h2>
        </div>

        <Row>
          {technologies.map((tech, index) => (
            <Col
              key={index}
              xs={12} // full width on mobile
              sm={6} // 2 per row on small screens
              md={3} // 3 per row on medium
              lg={2} // 4 per row on large
              className="d-flex justify-content-center mb-4">
              <div className="skill-item text-center">
                <div className="skill-icon mb-2">
                  <FontAwesomeIcon icon={tech.icon} size="1x" />
                </div>
                <div className="skill-name fw-semibold">{tech.name}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
