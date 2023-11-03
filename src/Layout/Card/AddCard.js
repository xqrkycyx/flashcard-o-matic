import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import CardForm from "./CardForm";

function AddCard({ deck, handleAddCard }) {
  return (
    <>
      <Breadcrumbs
        additionalItems={[[deck.name, `/decks/${deck.id}`], `Add Card`]}
      />
      <h1>Add Card: {deck.name}</h1>

      <CardForm deckId={deck.id} handleFormAction={handleAddCard} />
    </>
  );
}

export default AddCard;
