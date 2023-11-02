import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CardForm({ card = null, handleFormAction }) {
  const initialFormState = {
    // If form receives a Card object as a prop (i.e., when
    // building the "Edit" form for an existing card), set
    // this form's initial state to "front" & "back" props.
    // Otherwise, form is being used for "Add Card" page
    // and should be initialized to empty strings (left blank).
    front: card?.front ?? "",
    back: card?.back ?? "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(`name: ${name} / value: ${value}`);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call handlers differently for Edit vs Create
    if (card) {
      handleFormAction(card, formData);
    } else {
      handleFormAction(formData);
    }
    // handleFormAction(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Front</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Front side of card"
            controlid="front"
            name="front"
            onChange={handleChange}
            value={formData.front}
          />
          <br />
          <Form.Label>Back</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={4}
            placeholder="Back side of card"
            controlid="back"
            name="back"
            onChange={handleChange}
            value={formData.back}
          />
        </Form.Group>
        <Link to={`/decks/${card.deckId}`}>
          <Button variant="secondary" className="m-2">
            Cancel
          </Button>
        </Link>

        <Button variant="primary" className="m-2" type="submit">
          Save
        </Button>
      </Form>
    </>
  );
}

export default CardForm;
