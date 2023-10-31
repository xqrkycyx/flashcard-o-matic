import React from "react";
import DeckListItem from "./DeckListItem";
import Card from "react-bootstrap/Card";

function DeckList({ decks }) {
  const listOfDecks = decks.map((deck) => (
    <DeckListItem
      key={deck.id}
      id={deck.id}
      name={deck.name}
      count={deck.cards.length}
      description={deck.description}
    />
  ));

  const noDecksFound = (
    <Card className="m-2">
      <Card.Body>
        <Card.Title>No Decks Found</Card.Title>
        <Card.Text>
          Click the "Create Deck" button above to get started!
        </Card.Text>
      </Card.Body>
    </Card>
  );

  return <>{listOfDecks.length > 0 ? listOfDecks : noDecksFound}</>;
}

export default DeckList;
