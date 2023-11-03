import React from "react";
import CardForm from "./CardForm";
import Breadcrumbs from "../Breadcrumbs";
import { useParams } from "react-router-dom";

function EditCard({ deck, handleEditCard }) {
  // Fetch state data for a single card from the deck:
  const { cardId } = useParams();
  const card = deck.cards.find((card) => card.id === Number(cardId));

  // Get the card's order / position number within the deck for display in breadcrumbs
  // (cardId is unique across project, does not map to its order within its parent deck)
  const cardNumberWithinDeck =
    deck.cards.findIndex((card) => card.id === Number(cardId)) + 1;

  return (
    <>
      <Breadcrumbs
        additionalItems={[
          [deck.name, `/decks/${deck.id}`],
          `Edit Card ${cardNumberWithinDeck}`,
        ]}
      />

      <h1>Edit Card ({deck.name})</h1>
      <CardForm card={card} handleFormAction={handleEditCard} />
    </>
  );
}

export default EditCard;
