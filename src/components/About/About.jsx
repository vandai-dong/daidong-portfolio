import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  <Container>
    <Row>
      <h1>
        About Me
        <span>
          <img src="../../assets/smile.png" alt="" />
        </span>
      </h1>
    </Row>

    <Row>
      <Col>
        I’m a passionate and driven developer with a strong background in
        software engineering and data science. I earned my master’s degree from
        the University of Wollongong, specializing in Machine Learning, Big
        Data, and Software Engineering. Before that, I completed my
        undergraduate degree at Miami University, where I majored in Data
        Science and Statistics, with minors in Information Systems and Actuarial
        Science. I’ve had the opportunity to work in diverse roles, from
        Graduate Data Scientist and Research Assistant to Software Engineer
        Intern, each experience fueling my love for technology and coding. What
        excites me most about this field is the constant learning. It’s a
        journey that challenges me to evolve every single day. I just finished
        the last semester of my Master of Computer Science degree at the{" "}
        <a href="https://www.uow.edu.au/" target="_blank">
          University of Wollongong
        </a>
        , with specializations in{" "}
        <i>
          <b>Machine Learning and Big Data</b>
        </i>
        , and{" "}
        <i>
          <b>Software Engineering</b>
        </i>
        . During the summer of 2023-2024, I had the opportunity to intern at{" "}
        <a href="https://www.csiro.au/en/" target="_blank">
          CSIRO
        </a>{" "}
        as a research intern on a project using GenAI to create synthetic energy
        data. For my undergraduate degree, I was a student at{" "}
        <a href="https://miamioh.edu/" target="_blank">
          Miami University
        </a>{" "}
        majoring in{" "}
        <b>
          <i>Data Science and Statistics</i>
        </b>{" "}
        and minoring in{" "}
        <b>
          <i>Information Systems</i>
        </b>{" "}
        and{" "}
        <b>
          <i>Actuarial Science</i>
        </b>{" "}
        from August 2017 to May 2021. After graduating, I had an opportunity to
        work as a Junior Data Scientist at{" "}
        <a href="https://onemount.com/" target="_blank">
          One Mount Group
        </a>{" "}
        in Vietnam.
      </Col>
    </Row>
  </Container>;
}

export default About;
