import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import PropTypes from "prop-types";

function Cards(props) {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={props.imgPath}
        style={{
          width: "100%",
          height: "300px",
          //    borderRadius: "20%",
          //    objectFit: "cover",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.githubLink} target="_blank">
          <BsGithub /> &nbsp;
        </Button>
      </Card.Body>
    </Card>
  );
}

Cards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
};

export default Cards;
