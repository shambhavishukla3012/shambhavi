import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const EducationExperience = () => {
  const [activeKey, setActiveKey] = useState("experience");

const experiences = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "University of Arizona",
    years: "Jun 2025 - Present",
    description:
      "Re-architected a multilingual backend by migrating 30+ APIs to Spring Boot/SQLite with Docker, reducing costs and improving performance for 10K+ users.",
  },
  {
    id: 2,
    title: "Lead Software Engineer",
    company: "Project 990",
    years: "Mar 2025 - Jun 2025",
    description:
      "Led an 8-member team to build a multi-tenant AWS platform with analytics dashboards, streamlining deployments and boosting nonprofit fundraising efficiency.",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Pointel",
    years: "Dec 2024 - Mar 2025",
    description:
      "Developed Spring Boot microservices integrating Genesys Cloud APIs, improving call flows and agent productivity across enterprise contact centers.",
  },
  {
    id: 4,
    title: "Software Consultant",
    company: "Hoosier Community Network",
    years: "May 2024 - Nov 2024",
    description:
      "Built a full-stack project management app with Tableau integration and automated AWS cost optimization, enhancing efficiency and reducing expenses.",
  },
  {
    id: 5,
    title: "Associate Research Instructor",
    company: "Indiana University Bloomington",
    years: "Aug 2023 - Nov 2024",
    description:
      "Directed Agile full-stack projects and delivered 30+ technical sessions, improving sprint velocity and deployment success for hundreds of students.",
  },
  {
    id: 6,
    title: "Software Engineer",
    company: "Tech Mahindra",
    years: "Aug 2021 - Jul 2022",
    description:
      "Engineered 140+ ETL pipelines and automated data ingestion across CRM and banking systems, cutting processing time and enhancing data accuracy.",
  },
  {
    id: 7,
    title: "Junior Software Engineer",
    company: "Verzeo",
    years: "Nov 2020 - Aug 2021, Aug 2017 - Apr 2018",
    description:
      "Contributed to backend development and system debugging, strengthening application reliability and preparing production-ready deployments.",
  },
];

  const education = [
    {
      id: 1,
      title: "Master of Science in Computer Science",
      school: "Indiana University Bloomington",
      years: "Aug 2022 - May 2024",
      description:
        "Specialized in Algorithms, Advanced Database Concepts, Data Mining, Visualization, and Cloud Computing. Graduated with a GPA of 3.8/4.0.",
    },
    {
      id: 2,
      title: "Bachelor of Engineering in Computer Engineering",
      school: "University of Mumbai",
      years: "Jul 2016 - Oct 2020",
      description:
        "Focused on Object-Oriented Programming, Big Data Analysis, Machine Learning, Operating Systems, and Distributed Computing. Graduated with a GPA of 8.23/10.0.",
    },
  ];

  return (
    <section
      id="education-experience"
      style={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
      }}>
      <Container style={{ maxWidth: "1200px" }}>
        <div className="section-title mt-5">
          <h2
            style={{
              fontSize: "44px",
              fontWeight: "700",
              color: "var(--dark-green)",
              textAlign: "center",
              marginBottom: "10px",
            }}>
            Education & Experience
          </h2>
        </div>

        <Tab.Container
          id="education-experience-tabs"
          activeKey={activeKey}
          onSelect={(k) => setActiveKey(k)}>
          <Row className="justify-content-center mb-5">
            <Col md={8} lg={6}>
              <Nav
                className="nav-tabs-custom d-flex"
                style={{
                  border: "none",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}>
                <Nav.Item style={{ flex: 1 }}>
                  <Nav.Link
                    eventKey="education"
                    className="text-center py-3 px-4"
                    style={{
                      backgroundColor:
                        activeKey === "education" ? "#F0F0F0" : "white",
                      color: "#333333",
                      fontWeight: "500",
                      border: "1px solid #ddd",
                      borderRadius:
                        activeKey === "education" ? "6px 6px 0 0" : "0",
                      margin: "0",
                    }}>
                    Education
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ flex: 1 }}>
                  <Nav.Link
                    eventKey="experience"
                    className="text-center py-3 px-4"
                    style={{
                      backgroundColor:
                        activeKey === "experience" ? "#F0F0F0" : "white",
                      color: "#333333",
                      fontWeight: "500",
                      border: "1px solid #ddd",
                      borderRadius:
                        activeKey === "experience" ? "6px 6px 0 0" : "0",
                      margin: "0",
                    }}>
                    Experience
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

          <Tab.Content>
            <Tab.Pane eventKey="education">
              <div
                className="timeline-container"
                style={{ position: "relative" }}>
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    left: "21px",
                    top: "0",
                    bottom: "0",
                    width: "2px",
                    backgroundColor: "#e0e0e0",
                    zIndex: "0",
                  }}></div>

                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="timeline-item mb-4 position-relative"
                    style={{
                      paddingLeft: "45px",
                      paddingBottom: "2px",
                    }}>
                    {/* Bullet point */}
                    <div
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "2px",
                        zIndex: "1",
                      }}>
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "var(--blue)",
                          fontSize: "14px",
                        }}
                      />
                    </div>

                    <div
                      className="card p-4"
                      style={{
                        border: "none",
                        borderRadius: "6px",
                        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                      }}>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                          color: "var(--blue)",
                          marginBottom: "5px",
                        }}>
                        {edu.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "var--secondary-text)",
                          marginBottom: "5px",
                        }}>
                        <span style={{ fontWeight: "500" }}>{edu.school}</span>{" "}
                        · {edu.years}
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "var(--blue)",
                          lineHeight: "1.6",
                          marginBottom: "0",
                        }}>
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="experience">
              <div
                className="timeline-container"
                style={{ position: "relative" }}>
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    left: "21px",
                    top: "0",
                    bottom: "0",
                    width: "2px",
                    backgroundColor: "#e0e0e0",
                    zIndex: "0",
                  }}></div>

                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="timeline-item mb-4 position-relative"
                    style={{
                      paddingLeft: "25px",
                      paddingBottom: "5px",
                    }}>
                    {/* Bullet point */}
                    <div
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "5px",
                        zIndex: "1",
                      }}>
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "var(--blue)",
                          fontSize: "14px",
                        }}
                      />
                    </div>

                    <div
                      className="card p-4"
                      style={{
                        border: "none",
                        borderRadius: "6px",
                        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                      }}>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                          color: "var(--blue)",
                          marginBottom: "5px",
                        }}>
                        {exp.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "var(--secondary-text)",
                          marginBottom: "5px",
                        }}>
                        <span style={{ fontWeight: "500" }}>{exp.company}</span>{" "}
                        · {exp.years}
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "var(--blue)",
                          lineHeight: "1.4",
                          marginBottom: "0",
                        }}>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default EducationExperience;
