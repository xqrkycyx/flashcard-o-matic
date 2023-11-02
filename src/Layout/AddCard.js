import React from "react";
import Breadcrumbs from "./Breadcrumbs";

function AddCard({ deck }) {
  return (
    <>
      <Breadcrumbs
        additionalItems={[[deck.name, `/decks/${deck.id}`], `Add Card`]}
      />
      <h1>Add Card: {deck.name}</h1>
      <p>(This is where the Add Card functionality will be built out)</p>
      {/* Pass deckId for "Cancel button" */}
    </>
  );
}

export default AddCard;
