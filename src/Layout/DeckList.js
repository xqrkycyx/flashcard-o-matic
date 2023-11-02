import React from "react";
import DeckListItem from "./DeckListItem";
import Card from "react-bootstrap/Card";
import CreateDeckButton from "./CreateDeckButton";

function DeckList({ decks, handleDeleteDeck }) {
  const listOfDecks = decks.map((deck) => (
    <DeckListItem
      key={deck.id}
      id={deck.id}
      name={deck.name}
      cardCount={deck.cards.length}
      description={deck.description}
      handleDeleteDeck={handleDeleteDeck}
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

  return (
    <>
      <CreateDeckButton />
      {listOfDecks.length > 0 ? listOfDecks : noDecksFound}
    </>
  );
}

export default DeckList;
