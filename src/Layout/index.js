import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./DeckList";
import CreateDeck from "./CreateDeck";
import {
  listDecks,
  createDeck,
  deleteDeck,
  updateDeck,
  updateCard,
  createCard,
} from "../utils/api/index";
import ViewDeck from "./ViewDeck";

function Layout() {
  // State of user's decks
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);
  // Set a state variable to toggle after API changes (Create, Delete, Edit deck)
  // which should trigger an API fetch (for list of decks or single deck) in useEffect
  // in this and child components (e.g. View Deck page)
  const [deckUpdateToggle, setDeckUpdateToggle] = useState(false);

  // Handlers for decks
  const history = useHistory();

  const handleCreateDeck = async (formData) => {
    const { id } = await createDeck(formData); // response returns { name, description, id }
    setDeckUpdateToggle(!deckUpdateToggle); // Trigger useEffect to fetch API deck data & re-render
    history.push(`/decks/${id}`);
  };

  const handleEditDeck = async (deck, formData) => {
    const { name, description, ...partialUpdatedDeck } = deck;
    const updatedDeckObj = {
      ...partialUpdatedDeck,
      name: formData.name,
      description: formData.description,
    };
    const updatedDeckFromAPI = await updateDeck(updatedDeckObj); // response returns { name, description, id }
    setDeckUpdateToggle(!deckUpdateToggle); // Trigger useEffect hooks on homepage and View Deck page
    history.push(`/decks/${updatedDeckFromAPI.id}`);
  };

  const handleDeleteDeck = async (deckId) => {
    const result = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (result) {
      try {
        await deleteDeck(deckId);
        setDeckUpdateToggle(!deckUpdateToggle); // Trigger useEffect hooks (for updated API data) in index & ViewDeck components
        history.push(`/`);
      } catch (error) {
        console.error("Error deleting deck:", error);
      }
    }
  };

  // Handlers for Cards
  const handleEditCard = async (card, formData) => {
    const { front, back, ...partialUpdatedCard } = card;
    const updatedCardObj = {
      ...partialUpdatedCard,
      front: formData.front,
      back: formData.back,
    };
    const updatedCardFromAPI = await updateCard(updatedCardObj);
    setDeckUpdateToggle(!deckUpdateToggle); // Cause re-fetch of API for UI refresh
    history.push(`/decks/${updatedCardFromAPI.deckId}`);
  };

  const handleAddCard = async (deckId, formData) => {
    await createCard(deckId, formData); // response returns { name, description, id }
    setDeckUpdateToggle(!deckUpdateToggle); // Trigger useEffect to fetch API deck data & re-render
    history.push(`/decks/${deckId}/cards/new`);
  };

  // Initial data fetch for list of user's decks from API:
  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, [deckUpdateToggle]);

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
            <ViewDeck
              handleDeleteDeck={handleDeleteDeck}
              handleEditDeck={handleEditDeck}
              deckUpdateToggle={deckUpdateToggle}
              handleEditCard={handleEditCard}
              handleAddCard={handleAddCard}
            />
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
