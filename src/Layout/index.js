import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./DeckList";
import { listDecks } from "../utils/api/index";

function Layout() {
  // State of user's decks
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);

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
            <DeckList decks={decks} />
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
