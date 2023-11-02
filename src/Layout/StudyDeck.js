import React from "react";
import Breadcrumbs from "./Breadcrumbs";

function StudyDeck({ deck }) {
  return (
    <>
      <Breadcrumbs additionalItems={[deck.name]} />
      <h1>Study: {deck.name}</h1>
      <p>(This is where the Study functionality will be built out)</p>
    </>
  );
}

export default StudyDeck;
