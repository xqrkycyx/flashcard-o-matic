import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

export const CardListItem = ({ front, back, id, handleDeleteCard }) => {
  const { url } = useRouteMatch();

  return (
    <Card className="m-2">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Text className="m-2 w-50">{front}</Card.Text>
          <Card.Text className="m-2 w-50">{back}</Card.Text>
        </div>
        <div className="d-flex float-right">
          <Link to={`${url}/cards/${id}/edit`}>
            <Button variant="secondary" className="m-2">
              <PencilFill /> Edit
            </Button>
          </Link>
          <Button
            onClick={() => handleDeleteCard(id)}
            variant="danger"
            className="m-2"
          >
            <TrashFill />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardListItem;
