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
              hasGH={false}
              hasVid={true}
              hasAnnotation={true}
              ghLink=""
              vidLink="https://www.youtube.com/watch?v=PCrA7Ri6R_w"
              annotationLink="https://pawsey.org.au/wp-content/uploads/2024/03/Dai-Dong.jpg"
              darkMode={darkMode}
            />
          </Col>

          <Col md={4} className="pt-3">
            <Cards
              imgPath={lane_detection}
              title="Lane Detection Cross-Platform Mobile Application"
              description="This project creates a cost-effective lane detection app for educational use, enabling users to test algorithms like YOLOP, YOLOPv2, and U-Net. Images are processed on a server for efficient evaluation, with trained models like PSPNet and U-Net excelling in lane and drivable region detection."
              hasGH={true}
              hasVid={true}
              hasAnnotation={true}
              ghLink="https://github.com/KNrodrigo/LaneD-Models-App/tree/fix_readmes"
              vidLink="https://drive.google.com/file/d/1JA0HjFn5RswlOreA3ZWIvjo3gbhFU1T3/view?usp=sharing"
              annotationLink="https://drive.google.com/file/d/1rPj7k8j1vEqfhx2ZYR4Dlw0AYDbbcz90/view?usp=sharing"
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
              hasGH={true}
              hasVid={false}
              hasAnnotation={false}
              ghLink="https://github.com/vandai-dong/Customer_Churn"
              vidLink=""
              annotationLink=""
              darkMode={darkMode}
            />
          </Col>

          <Col md={4} className="pt-3">
            <Cards
              imgPath={ds_application}
              title="The Analysis of Job Change of Data Scientists"
              description="A prediction project to determine if candidates will stay or leave after completing a training course. The goal is to optimize courses, reduce costs, and identify factors influencing turnover."
              hasGH={true}
              hasVid={false}
              hasAnnotation={false}
              ghLink="https://github.com/vandai-dong/Job-Change-of-Data-Scientists"
              vidLink=""
              annotationLink=""
              darkMode={darkMode}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

Projects.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Projects;
