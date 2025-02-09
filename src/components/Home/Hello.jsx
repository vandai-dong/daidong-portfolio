import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

function Hello() {
    return (<Container fluid className="home-section" id="home">
        <Row>
          <Col xs={8} style={{ paddingTop: "80px" }}>
            <div style={{ fontSize: 60}} className="fw-bold">Hello! </div>
            <div style={{ fontSize: 60}} className="fw-bold">
              I am
              <strong className="name"> Dai Dong</strong>
            </div>
            <div className="type-writing">
              <Typewriter
                options={{
                  strings: [
                    "Aspiring Software Developer",
                    "Aspring AI Engineer",
                    "Technology Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </Col>

          <Col>
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </Col>
        </Row>
      </Container>);
}

export default Hello;