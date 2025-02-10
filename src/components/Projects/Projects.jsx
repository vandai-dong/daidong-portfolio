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
              description="This project creates a cost-effective lane detection app for educational use, enabling users to test algorithms like YOLOP, YOLOPv2, and U-Net. Images are processed on a server for efficient evaluation, with trained models like PSPNet and U-Net excelling in lane and drivable region detection."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
