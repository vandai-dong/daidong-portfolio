import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import Cards from "./Cards";
import genai from "../../assets/img/Projects/genai.png";
import lane_detection from "../../assets/img/Projects/lane-detection.jpg";
import customer_churn from "../../assets/img/Projects/customer-churn.jpg";
import ds_application from "../../assets/img/Projects/ds-job-applicant.jpg";

function Projects({ darkMode }) {
  return (
    <Container fluid className="project-section">
      <Container>
        <div style={{ fontSize: 60 }} className="fw-bold text-center">
          My Projects
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="pt-3">
            <Cards
              imgPath={genai}
              title="Secure Synthetic Energy Data with Generative AI"
              description="The project aims to generate time-series energy data using a Generative Adversarial Network (GAN) while implementing privacy protection filters to address privacy and legal concerns, supporting the goal of achieving net zero emissions by 2050."
              ghLink=""
              darkMode={darkMode}
            />
          </Col>

          <Col md={4} className="pt-3">
            <Cards
              imgPath={lane_detection}
              title="Lane Detection Cross-Platform Mobile Application"
              description="This project creates a cost-effective lane detection app for educational use, enabling users to test algorithms like YOLOP, YOLOPv2, and U-Net. Images are processed on a server for efficient evaluation, with trained models like PSPNet and U-Net excelling in lane and drivable region detection."
              ghLink="https://github.com/KNrodrigo/LaneD-Models-App/tree/fix_readmes"
              darkMode={darkMode}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="pt-3">
            <Cards
              imgPath={customer_churn}
              title="Customer Churn Prediction"
              description="A prediction project to determine if customers will churn or retain their service, while also identifying factors influencing their decision to cancel the service."
              ghLink="https://github.com/vandai-dong/Customer_Churn"
              darkMode={darkMode}
            />
          </Col>

          <Col md={4} className="pt-3">
            <Cards
              imgPath={ds_application}
              title="The Analysis of Job Change of Data Scientists"
              description="A prediction project to determine if candidates will stay or leave after completing a training course. The goal is to optimize courses, reduce costs, and identify factors influencing turnover."
              ghLink="https://github.com/vandai-dong/Job-Change-of-Data-Scientists"
              darkMode={darkMode}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

Projects.propTypes = {
  darkMode: PropTypes.string,
};

export default Projects;
