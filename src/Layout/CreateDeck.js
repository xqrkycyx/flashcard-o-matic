import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CreateDeck({ handleCreateDeck }) {
  const initialFormState = {
    name: "",
    description: "",
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
    handleCreateDeck(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <>
      <h1>Create Deck</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Deck name"
            controlId="name"
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
            controlId="description"
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
        </Form.Group>
        <Link to={"/"}>
          <Button variant="secondary" className="m-2">
            Cancel
          </Button>
        </Link>

        <Button variant="primary" className="m-2" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default CreateDeck;
