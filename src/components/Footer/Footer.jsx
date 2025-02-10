import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMailOpen } from "react-icons/cg";

function Footer() {
  const date = new Date();

  return (
    <Container>
      <Row>
        <div style={{ fontSize: 40 }} className="fw-bold text-center">
          CONTACT
        </div>
      </Row>

      <Row className="justify-content-center align-items-center">
        Phone Number: 0403-770-879
      </Row>
      <Row>
        <a
          href="https://github.com/soumyajit4419"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/soumyajit4419/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.linkedin.com/in/soumyajit4419/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <CgMailOpen />
        </a>
      </Row>
    </Container>
  );
}

export default Footer;
