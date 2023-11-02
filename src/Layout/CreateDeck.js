import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import DeckForm from "./DeckForm";

function CreateDeck({ handleCreateDeck }) {
  return (
    <>
      <Breadcrumbs additionalItems={["Create Deck"]} />

      <h1>Create Deck</h1>
      <DeckForm handleFormAction={handleCreateDeck} formTitle={"Create Deck"} />
    </>
  );
}

export default CreateDeck;
