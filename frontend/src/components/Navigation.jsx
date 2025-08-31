import React, { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";
import "./Navigation.css";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);


  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      className="shadow p-3"
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: scrolled ? "var(--navbar-bg)" : "var(--background)",
        transition: "all 0.3s ease-in-out",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <Container style={{ maxWidth: "1200px" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "education-experience", label: "Education & Experience" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                className={
                  activeLink === item.id ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink(item.id)}
              >
                {item.label} 
              </Nav.Link>
            ))}

            {/* Theme toggle button */}
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label="Toggle theme"
                style={{
                  background: "#219e91",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  padding: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {isDarkTheme ? (
                  <i className="fas fa-sun" style={{ fontSize: "18px" }}></i>
                ) : (
                  <i className="fas fa-moon" style={{ fontSize: "18px" }}></i>
                )}
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;