import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import { Link } from "react-router-dom";
import CardList from "../Card/CardList";
import { TrashFill, PencilFill, BookHalf, PlusLg } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { useRouteMatch } from "react-router-dom";

export const DeckInformation = ({
  deck,
  handleDeleteDeck,
  handleDeleteCard,
}) => {
  const { url } = useRouteMatch();

  return (
    <>
      <Breadcrumbs additionalItems={[deck.name]} />
      <h2>{deck.name}</h2>
      <p>{deck.description}</p>

      <div className="d-flex justify-content-between">
        <div>
          <Link to={`${url}/edit`}>
            <Button variant="secondary" className="m-2" tabIndex={-1}>
              <PencilFill style={{ "margin-right": "8px" }} />
              Edit
            </Button>
          </Link>

          <Link to={`${url}/study`}>
            <Button variant="primary" className="m-2" tabIndex={-1}>
              <BookHalf style={{ "margin-right": "8px" }} />
              Study
            </Button>
          </Link>

          <Link to={`${url}/cards/new`}>
            <Button variant="primary" className="m-2" tabIndex={-1}>
              <PlusLg style={{ "margin-right": "5px" }} />
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
      <CardList deck={deck} handleDeleteCard={handleDeleteCard} />
    </>
  );
};

export default DeckInformation;
