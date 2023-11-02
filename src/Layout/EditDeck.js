import React from "react";
import DeckForm from "./DeckForm";
import Breadcrumbs from "./Breadcrumbs";

function EditDeck({ deck, handleEditDeck }) {
  return (
    <>
      <Breadcrumbs additionalItems={[deck.name]} />

      <h1>Edit Deck: {deck.name}</h1>
      <DeckForm handleFormAction={handleEditDeck} deck={deck} />
    </>
  );
}

export default EditDeck;
