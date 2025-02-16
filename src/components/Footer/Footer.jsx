import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { CgMailOpen } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer({ darkMode }) {
  return (
    <Container
      className={`mw-100 mt-5 ${darkMode ? "bg-dark text-light" : "bg-body-secondary text-dark"}`}
    >
      <Row>
        <div style={{ fontSize: 40 }} className="fw-bold text-center">
          CONTACT
        </div>
      </Row>

      <Row
        className="justify-content-center align-items-center"
        style={{ fontSize: 20 }}
      >
        Phone Number: 0403-770-879
      </Row>

      <Row class>
        <Col md={12} className="home-about-social">
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/vandai-dong"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:vandaidong@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <CgMailOpen />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dai-dong-343954159/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Footer;
