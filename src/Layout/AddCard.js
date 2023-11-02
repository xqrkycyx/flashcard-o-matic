import React from "react";
import Breadcrumbs from "./Breadcrumbs";

function AddCard({ deck }) {
  // Set the Breadcrumbs strings (add deck name for "Edit" form):

  return (
    <>
      <Breadcrumbs additionalItems={[deck.name]} />
      <h1>Add Card: {deck.name}</h1>
      <p>(This is where the Add Card functionality will be built out)</p>
    </>
  );
}

export default AddCard;
