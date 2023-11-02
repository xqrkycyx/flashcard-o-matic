import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TrashFill, EyeFill, BookHalf } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const DeckListItem = ({
  id,
  name,
  description,
  cardCount, // coerce 'undefined' value (new decks) to "0" below
  handleDeleteDeck,
}) => {
  return (
    <Card className="m-2">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{name}</Card.Title>
          <small>{cardCount !== undefined ? cardCount : 0} cards</small>
        </div>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between">
          <div>
            <Link to={`/decks/${id}`}>
              <Button variant="secondary" className="m-2">
                <EyeFill /> View
              </Button>
            </Link>
            <Link to={`/decks/${id}/study`}>
              <Button variant="primary" className="m-2">
                <BookHalf /> Study
              </Button>
            </Link>
          </div>
          <div>
            <Button
              variant="danger"
              className="m-2"
              onClick={() => handleDeleteDeck(id)}
            >
              <TrashFill />
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DeckListItem;
