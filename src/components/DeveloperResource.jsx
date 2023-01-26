import React from "react";
import Card from "react-bootstrap/Card";

function DeveloperResource(props) {
  return (
    <a href={props.url} target={"_blank"} style={{ color: "black" }}>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={props.image} height="150px" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}

export default DeveloperResource;
