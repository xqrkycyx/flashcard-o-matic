import React, { useState, useEffect } from "react";
// import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TrashFill, EyeFill, BookHalf } from "react-bootstrap-icons";

export const DeckListItem = ({ id, name, description, count }) => {
  return (
    <Card className="m-2">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{name}</Card.Title>
          <small>{count} cards</small>
        </div>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between">
          <div>
            <Button variant="secondary" className="m-2">
              <EyeFill /> View
            </Button>
            <Button variant="primary" className="m-2">
              <BookHalf /> Study
            </Button>
          </div>
          <div>
            <Button variant="danger" className="m-2">
              <TrashFill />
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DeckListItem;
