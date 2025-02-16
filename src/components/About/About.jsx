import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import smile from "../../assets/img/About/smile.png";
import portrait from "../../assets/img/About/dai-pic.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

function About({ darkMode }) {
  // Scrollbar styles based on darkMode
  const scrollbarStyles = {
    "::webkit-scrollbar": {
      width: "12px",
      height: "12px",
    },
    "::webkit-scrollbar-track": {
      backgroundColor: darkMode ? "#333" : "#f1f1f1",
      borderRadius: "10px",
    },
    "::webkit-scrollbar-thumb": {
      backgroundColor: "#888",
      borderRadius: "10px",
      border: `3px solid ${darkMode ? "#333" : "#f1f1f1"}`,
    },
    "::webkit-scrollbar-thumb:hover": {
      backgroundColor: darkMode ? "#555" : "#333",
    },
  };

  // Inject scroll bar styles into the document body
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        ::-webkit-scrollbar {
          width: ${scrollbarStyles["::webkit-scrollbar"].width};
          height: ${scrollbarStyles["::webkit-scrollbar"].height};
        }
        ::-webkit-scrollbar-track {
          background-color: ${scrollbarStyles["::webkit-scrollbar-track"].backgroundColor};
          border-radius: ${scrollbarStyles["::webkit-scrollbar-track"].borderRadius};
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${scrollbarStyles["::webkit-scrollbar-thumb"].backgroundColor};
          border-radius: ${scrollbarStyles["::webkit-scrollbar-thumb"].borderRadius};
          border: ${scrollbarStyles["::webkit-scrollbar-thumb"].border};
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${scrollbarStyles["::webkit-scrollbar-thumb:hover"].backgroundColor};
        }
      `;
    document.head.appendChild(style);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, [darkMode]);

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

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default About;
