import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function DeckForm({ deck = null, handleFormAction }) {
  const initialFormState = {
    // If form receives a Deck object as a prop (i.e., when
    // building the "Edit" form for an existing deck), set
    // this form's initial state to name & description props.
    // Otherwise, form is being used for "Create Deck" page
    // and should be initialized to empty strings (left blank).
    name: deck?.name ?? "",
    description: deck?.description ?? "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call handlers differently for Edit vs Create
    if (deck) {
      handleFormAction(deck, formData);
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Deck name"
            controlid="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <br />
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={4}
            placeholder="Brief description of the deck"
            controlid="description"
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
        </Form.Group>
        <Link to={deck !== null ? `/decks/${deck.id}` : "/"}>
          <Button variant="secondary" className="m-2" tabIndex={-1}>
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

export default DeckForm;
