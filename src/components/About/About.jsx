import { Container, Row, Col } from "react-bootstrap";
import smile from "../../assets/img/About/smile.png";
import portrait from "../../assets/img/About/dai_pic.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

function About() {
  return (
    <Container fluid>
      <Row className="pt-4">
        <div style={{ fontSize: 60 }} className="fw-bold text-center">
          About Me
          <img
            src={smile}
            alt="Smiling face"
            style={{ width: "5%" }}
            className="moving-image"
          />
        </div>
      </Row>

      <Row className="pt-5">
        <Col md={9}>
          <div className="px-5" style={{ fontSize: 20 }}>
            I’m a passionate and driven developer with a strong background in
            software engineering and data science. I earned my master’s degree
            from the <span className="fw-bold">University of Wollongong</span>,
            specialising in{" "}
            <span style={{ color: "#b078c7" }} className="fw-bold fst-italic">
              Machine Learning and Big Data
            </span>
            , and{" "}
            <span style={{ color: "#b078c7" }} className="fw-bold fst-italic">
              Software Engineering
            </span>
            . Before that, I completed my undergraduate degree at{" "}
            <span className="fw-bold">Miami University</span>, where I majored
            in{" "}
            <span style={{ color: "#b078c7" }} className="fw-bold fst-italic">
              Data Science and Statistics
            </span>
            , with minors in{" "}
            <span className="fst-italic">Information Systems</span> and{" "}
            <span className="fst-italic">Actuarial Science</span>.
          </div>
          <div className="pt-4 px-5" style={{ fontSize: 20 }}>
            I’ve had the opportunity to work in diverse roles, from
            <span style={{ color: "#b078c7" }} className="fw-bold fst-italic">
              {" "}
              Graduate Data Scientist
            </span>{" "}
            and{" "}
            <span style={{ color: "#b078c7" }} className="fw-bold fst-italic">
              Research Assistant
            </span>{" "}
            to{" "}
            <span style={{ color: "#b078c7" }} className="fw-bold fst-italic">
              Software Engineer Intern
            </span>
            , each experience fueling my love for technology and coding. What
            excites me most about this field is the constant learning. It’s a
            journey that challenges me to evolve every single day.
          </div>
        </Col>

        <Col
          md={3}
          className="d-flex justify-content-center align-items-center pt-3"
        >
          <img
            src={portrait}
            alt="Dai"
            style={{ width: "50%" }}
            className="rounded-circle img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
