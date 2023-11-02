import React from "react";
import CardListItem from "./CardListItem";
import Card from "react-bootstrap/Card";

function CardList({ deck }) {
  const hasCards = deck.cards.length > 0 ? true : false;

  let cardListItems;
  if (hasCards) {
    cardListItems = deck.cards.map((card) => (
      <CardListItem
        key={card.id}
        front={card.front}
        back={card.back}
        id={card.id}
      />
    ));
  }

  const noCardsinDeck = (
    <Card className="m-2">
      <Card.Body>
        <Card.Title>No Cards in Deck</Card.Title>
        <Card.Text>
          Click the "Add Cards" button above to get started!
        </Card.Text>
      </Card.Body>
    </Card>
  );
  return <>{hasCards ? cardListItems : noCardsinDeck}</>;
}

export default CardList;
