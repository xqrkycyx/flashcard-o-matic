import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./DeckList";
import CreateDeck from "./CreateDeck";
import { listDecks, createDeck, deleteDeck } from "../utils/api/index";

function Layout() {
  // State of user's decks
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);

  // Handlers for decks
  const history = useHistory();
  const handleCreateDeck = async (formData) => {
    const newDeck = await createDeck(formData);
    setDecks([...decks, newDeck]);
    history.push(`/decks/${newDeck.id}`);
  };

  const handleDeleteDeck = async (deckId) => {
    const result = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (result) {
      try {
        await deleteDeck(deckId);
        setDecks((currentDecks) =>
          currentDecks.filter((deck) => deck.id !== deckId)
        );
        history.push(`/`);
      } catch (error) {
        console.error("Error deleting deck:", error);
      }
    }
  };

  // Fetch the list of decks from the DB:
  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, []);

  // Handle error for initial fetch of decks
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DeckList decks={decks} handleDeleteDeck={handleDeleteDeck} />
          </Route>

          <Route exact path="/decks/new">
            <CreateDeck handleCreateDeck={handleCreateDeck} />
          </Route>

          <Route path="/decks/:deckId">
            <p>This will show info about a specific Deck</p>
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
