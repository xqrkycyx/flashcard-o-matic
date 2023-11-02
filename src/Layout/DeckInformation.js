import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import { Link } from "react-router-dom";
import CardList from "./CardList";
import { TrashFill, PencilFill, BookHalf, PlusLg } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { useRouteMatch } from "react-router-dom";

export const DeckInformation = ({ deck, handleDeleteDeck }) => {
  const { url } = useRouteMatch();

  return (
    <>
      <Breadcrumbs additionalItems={[deck.name]} />
      <h2>{deck.name}</h2>
      <p>{deck.description}</p>

      <div className="d-flex justify-content-between">
        <div>
          <Link to={`${url}/edit`}>
            <Button variant="secondary" className="m-2">
              <PencilFill />
              Edit
            </Button>
          </Link>

          <Link to={`${url}/study`}>
            <Button variant="primary" className="m-2">
              <BookHalf />
              Study
            </Button>
          </Link>

          <Link to={`${url}/cards/new`}>
            <Button variant="primary" className="m-2">
              <PlusLg />
              AddCards
            </Button>
          </Link>
        </div>
        <div>
          <Button
            variant="danger"
            className="m-2"
            onClick={() => handleDeleteDeck(deck.id)}
          >
            <TrashFill />
          </Button>
        </div>
      </div>

      <h3>Cards</h3>
      <CardList deck={deck} />
    </>
  );
};

export default DeckInformation;
