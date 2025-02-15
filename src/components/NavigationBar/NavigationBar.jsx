import PropTypes from "prop-types";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

function NavigationBar({ darkMode, setDarkMode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Navbar
      expand="lg"
      className={`${darkMode ? "bg-dark" : "bg-body-secondary"}`}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className={darkMode ? "text-light" : "text:dark"}
        >
          Dai Dong
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          data-bs-theme={darkMode ? "dark" : "light"}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              href="/"
              className={darkMode ? "text-light" : "text-dark"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={darkMode ? "text-light" : "text-dark"}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/project"
              className={darkMode ? "text-light" : "text-dark"}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="/resume"
              className={darkMode ? "text-light" : "text-dark"}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="/footer"
              className={darkMode ? "text-light" : "text-dark"}
            >
              Contact
            </Nav.Link>

            <Button
              variant={darkMode ? "dark" : "body-secondary"}
              onClick={() => setDarkMode(!darkMode)}
              style={{
                backgroundColor: isHovered
                  ? darkMode
                    ? "#585858"
                    : "#D3D3D3"
                  : "initial",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {darkMode ? (
                <img
                  width="30"
                  height="30"
                  // src="https://img.icons8.com/emoji/48/crescent-moon-emoji.png"
                  src="https://img.icons8.com/plasticine/100/bright-moon.png"
                  alt="crescent-moon"
                />
              ) : (
                <img
                  width="30"
                  height="30"
                  // src="https://img.icons8.com/ios/50/sun--v1.png"
                  src="https://img.icons8.com/plasticine/100/sun--v1.png"
                  alt="sun"
                />
              )}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Add PropTypes validation
NavigationBar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default NavigationBar;
