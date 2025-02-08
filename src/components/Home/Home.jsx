import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Row>
          <Col xs={8}>
            <h1>Hello! </h1>
            <h1>
              I am
              <strong className="name"> Dai Dong</strong>
            </h1>
            <div className="type-writing">
              <Typewriter
                options={{
                  strings: [
                    "Aspiring Software Developer",
                    "Aspring AI Engineer",
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
      </Container>
    </section>
  );
}

export default Home;
