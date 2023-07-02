import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineLink } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import "./Project.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-content">{props.description}</Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        <Button variant="primary" href={props.pdfLink} target="_blank">
          <AiOutlineLink /> &nbsp;
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
