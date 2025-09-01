import React, { useState } from "react";
import { Carousel, Button, Badge } from "react-bootstrap";
import { ChevronLeft, ChevronRight, Github } from "react-bootstrap-icons";

const Projects = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const projects = [
    {
      id: 1,
      title: "Route Optimizer",
      description:
        "A Flask-based web application that helps users plan and visualize efficient travel routes with interactive mapping capabilities.",
      image: "/images/ro.jpeg",
      technologies: ["Python", "Flask", "APIs", "PostgreSQL"],
      githubLink: "https://github.com/shambhavishukla3012/route-opitmizer",
    },
    {
      id: 2,
      title: "Wellness Tracking System",
      description:
        "Wellness app with personalized plans integrating search, Google Auth 2FA, and chat feature. Scalable with Docker.",
      image: "/images/wts.jpeg",
      technologies: ["PostgreSQL", "React", "Django", "Docker"],
      githubLink:
        "https://github.com/shambhavishukla3012/WellnessTrackingSystem/tree/main/base",
    },
    {
      id: 3,
      title: "Netflix Database Application",
      description:
        "Data-driven app to explore Netflix entries. Boosted performance by 30% with optimized PostgreSQL CRUD APIs.",
      image: "/images/flixiq.jpeg",
      technologies: ["PostgreSQL", "Bootstrap", "Flask"],
      githubLink: "https://github.com/shambhavishukla3012/FlixIQ",
    },
    {
      id: 4,
      title: "H&M Fashion Recommendation",
      description:
        "Conducted EDA on 31M records, uncovering key product trends, and optimizing product recommendations. Optimized data processing with Parquet, reducing disk space by 50% and boosting data loading speed for efficient analysis.",
      image: "/images/hfr.jpeg",
      technologies: [
        "Python",
        "Data Mining",
        "Data Visualization",
        "Data Analysis",
        "Parquet",
      ],
      githubLink:
        "https://github.com/shambhavishukla3012/personalized-fashion-recommendation",
      // demoLink: "#",
    },
    {
      id: 5,
      title: "CarbonScope",
      description:
        "Configured AWS infrastructure for real-time carbon emissions tracking across 50+ US airports. Automated OpenSky API data ingestion via Lambda and EventBridge, storing in S3.",
      image: "/images/cs.png",
      technologies: ["AWS Lambda", "S3", "EC2", "EventBridge"],
      githubLink: "#",
      // demoLink: "#",
    },
  ];
  return (
  

    <div className="container mt-2 pt-3 pb-3">
         <div className="section-title text-center mb-0">
          <h2>PROJECTS</h2>
        </div>
          <div className="mx-auto" style={{ maxWidth: 900 }}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={3000}
        indicators={false}
        controls={false} 
        fade
        className="w-100">
        {projects.map((project) => (
          <Carousel.Item key={project.id}>
            <div className="project-slide d-flex flex-column flex-md-row align-items-stretch">
              {/* Left side - Text */}
              <div className="project-text p-4 d-flex flex-column justify-content-center align-items-center align-items-md-end text-center text-md-end animate__animated animate__fadeInLeft">
                <h2
                  className="fw-bold text-dark mb-3 "
                  style={{ fontSize: "34px" }}>
                  {project.title}
                </h2>

                <p className="project-description">{project.description}</p>

                <div className="mb-3  ">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      bg="dark"
                      key={i}
                      className="me-2 mb-2"
                      style={{ fontSize: "0.8rem" }}>
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  href={project.githubLink}
                  target="_blank"
                  size="sm"
                  className="github-btn d-flex align-items-center gap-2 px23 py-2">
                  <Github size={18} /> View on GitHub
                </Button>
              </div>

              <div className="project-image d-flex justify-content-center align-items-center p-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid w-100 rounded shadow "
                  style={{ height: "400px" }}
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
      <div className="text-center mt-4">
        <div className="d-flex justify-content-center align-items-center gap-4">
     <Button
  onClick={() =>
    setIndex(index === 0 ? projects.length - 1 : index - 1)
  }
  size="lg"
  className="learn-more"
>
  <ChevronLeft size={15} /> Prev
</Button>

<Button
  onClick={() => setIndex((index + 1) % projects.length)}
  size="lg"
  className="get-btn"
>
  Next <ChevronRight size={15} />
</Button>
        </div>
      </div>
    </div>

  );
};


export default Projects;
