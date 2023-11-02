import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PencilFill, TrashFill } from "react-bootstrap-icons";

export const CardListItem = ({ front, back }) => {
  return (
    <Card className="m-2">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Text className="m-2 w-50">{front}</Card.Text>
          <Card.Text className="m-2 w-50">{back}</Card.Text>
        </div>
        <div className="d-flex float-right">
          <Button variant="secondary" className="m-2">
            <PencilFill /> Edit
          </Button>
          <Button variant="danger" className="m-2">
            <TrashFill />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardListItem;
