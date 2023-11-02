import React, { useState, useEffect } from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import NotFound from "./NotFound";
import { readDeck } from "../utils/api";
import StudyDeck from "./StudyDeck";
import EditDeck from "./EditDeck";
import AddCard from "./AddCard";
import DeckInformation from "./DeckInformation";
import EditCard from "./EditCard";

function ViewDeck({
  handleDeleteDeck,
  handleEditDeck,
  deckUpdateToggle,
  handleEditCard,
  handleAddCard,
  handleDeleteCard,
}) {
  const [deck, setDeck] = useState({});
  const [error, setError] = useState(undefined);

  // Fetch state data for a single deck from the DB:
  const { deckId } = useParams();
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckUpdateToggle]);

  // Get url for route nesting
  const { url } = useRouteMatch();

  if (deck.id) {
    return (
      <>
        <Route path={`${url}/edit`}>
          <EditDeck deck={deck} handleEditDeck={handleEditDeck} />
        </Route>

        <Route path={`${url}/study`}>
          <StudyDeck deck={deck} />
        </Route>

        <Route path={`${url}/cards/new`}>
          <AddCard deck={deck} handleAddCard={handleAddCard} />
        </Route>

        <Route path={`${url}/cards/:cardId/edit`}>
          <EditCard
            deck={deck}
            cardFromParent={deck.cards[1]}
            handleEditCard={handleEditCard}
          />
        </Route>

        <Route exact path={`${url}`}>
          <DeckInformation
            deck={deck}
            handleDeleteDeck={handleDeleteDeck}
            handleDeleteCard={handleDeleteCard}
          />
        </Route>
      </>
    );
  }
  return <NotFound item={"Deck"} />;
}

export default ViewDeck;
