import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import { PlusLg } from "react-bootstrap-icons";

function CreateDeckButton() {
  return (
    <Link to={"/decks/new"}>
      <Button variant="secondary" className="m-2" tabIndex={-1}>
        <PlusLg />
        Create Deck
      </Button>
    </Link>
  );
}

export default CreateDeckButton;
