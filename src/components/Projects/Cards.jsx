import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

function Cards(props) {
  return (
    <Card className={`h-100 shadow-lg card-hover ${props.darkMode ? "bg-dark" : ""} bg-gradient`}>
      <Card.Img
        variant="top"
        src={props.imgPath}
        style={{
          width: "100%",
          height: "300px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title className={props.darkMode ? "text-white" : "text:dark"}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} className={props.darkMode ? "text-white" : "text:dark"}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}

Cards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string,
  darkMode: PropTypes.string,
};

export default Cards;
