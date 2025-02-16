import { Card, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

function Cards(props) {
  return (
    <Card
      className={`h-100 shadow-lg card-hover ${props.darkMode ? "bg-dark" : ""} bg-gradient`}
    >
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
        <Card.Title className={props.darkMode ? "text-white" : "text:dark"}>
          {props.title}
        </Card.Title>

        <Card.Text
          style={{ textAlign: "justify" }}
          className={props.darkMode ? "text-white" : "text:dark"}
        >
          {props.description}
        </Card.Text>

        {props.hasGH && (
          <Button
            href={props.ghLink}
            target="_blank"
            className="custom-btn mx-2"
          >
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}

        {props.hasVid && (
          <Button
            href={props.vidLink}
            target="_blank"
            className={`custom-btn ${props.hasGH ? "mx-2" : ""}`}
          >
            <MdOutlineOndemandVideo /> &nbsp; Demo
          </Button>
        )}

        {props.hasAnnotation && (
          <Button
            href={props.annotationLink}
            target="_blank"
            className={`custom-btn ${props.hasGH || props.hasVid ? "mx-2" : ""}`}
          >
            <IoDocumentText /> &nbsp; Document
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

Cards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasGH: PropTypes.bool.isRequired,
  hasAnnotation: PropTypes.bool.isRequired,
  hasVid: PropTypes.bool.isRequired,
  ghLink: PropTypes.string,
  vidLink: PropTypes.string,
  annotationLink: PropTypes.string,
  darkMode: PropTypes.bool.isRequired,
};

export default Cards;
