import React, { useState, useEffect } from "react";
import Breadcrumbs from "../Breadcrumbs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import { PlusLg } from "react-bootstrap-icons";

function StudyDeck({ deck }) {
  const history = useHistory();
  const numberOfCards = deck.cards.length;

  const [flipped, setFlipped] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Click handlers for Study UI:
  function handleFlipCard() {
    setFlipped(() => !flipped);
  }

  function handleNextCard() {
    setFlipped(false);
    setActiveCardIndex(activeCardIndex + 1);
  }

  function handlePreviousCard() {
    setFlipped(false);
    setActiveCardIndex(activeCardIndex - 1);
  }

  function resetDeck() {
    setFlipped(false);
    setActiveCardIndex(0);
  }

  useEffect(() => {
    if (flipped && activeCardIndex + 1 === numberOfCards) {
      const restartCardsAnswer = window.confirm(
        "Restart cards?\n\nClick cancel to return to the home page."
      );
      if (restartCardsAnswer) {
        resetDeck();
      } else {
        history.push(`/`);
      }
    }
  }, [flipped, activeCardIndex, history, numberOfCards]);

  let studyPageContent;
  if (numberOfCards < 3) {
    // If user has fewer than 3 cards, show "not enough cards" screen:
    studyPageContent = (
      <Card className="m-2">
        <Card.Body>
          <Card.Title>Not enough cards</Card.Title>
          <Card.Text>
            You need at least 3 cards to study. There
            {numberOfCards === 1
              ? ` is 1 card `
              : ` are ${numberOfCards} cards `}
            in this deck.
          </Card.Text>
          <Link to={`/decks/${deck.id}/cards/new`}>
            <Button variant="primary" className="m-2" tabIndex={-1}>
              <PlusLg style={{ "margin-right": "5px" }} />
              AddCards
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  } else {
    // If user has 3+ cards, display "Study" UI
    studyPageContent = (
      <Card className="m-2">
        <Card.Body>
          <Card.Title>
            Card {activeCardIndex + 1} of {numberOfCards}
          </Card.Title>
          <Card.Text>
            {!flipped
              ? deck.cards[activeCardIndex].front
              : deck.cards[activeCardIndex].back}
          </Card.Text>
          <div className="d-flex justify-content-between">
            <div>
              <Button
                variant="secondary"
                className="m-2"
                onClick={() => handleFlipCard()}
              >
                Flip
              </Button>
            </div>
            <div>
              {flipped && (
                <>
                  <Button
                    disabled={activeCardIndex === 0}
                    variant="primary"
                    className="m-2"
                    onClick={() => handlePreviousCard()}
                  >
                    Previous
                  </Button>

                  <Button
                    disabled={activeCardIndex + 1 >= numberOfCards}
                    variant="primary"
                    className="m-2"
                    onClick={() => handleNextCard()}
                  >
                    Next
                  </Button>
                </>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }

  return (
    <>
      <Breadcrumbs
        additionalItems={[[deck.name, `/decks/${deck.id}`], `Study`]}
      />
      <h1>Study: {deck.name}</h1>
      {studyPageContent}
    </>
  );
}

export default StudyDeck;
