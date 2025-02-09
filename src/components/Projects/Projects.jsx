import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import genai from "../../assets/Projects/genai.png";
import lane_detection from "../../assets/Projects/lane_detection.jpg";

function Projects() {
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
            />
          </Col>

          <Col md={4} className="pt-3">
            <Cards
              imgPath={lane_detection}
              title="Lane Detection Cross-Platform Mobile Application"
              description="This project develops a budget-friendly lane detection mobile app for educational use, allowing users to experiment with algorithms like YOLOP, YOLOPv2, and U-Net. The app processes captured images on a server to provide detection results, helping learners evaluate algorithms efficiently. Trained models, including PSPNet and U-Net, have achieved strong performance on lane mark and drivable region detection tasks."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
