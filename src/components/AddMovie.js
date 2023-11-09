import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddMovie = ({ addMovie }) => {
  // State to manage the visibility of the modal
  const [show, setShow] = useState(false);

  // State to manage the form data for a new movie
  const [newMovie, setNewMovie] = useState({
    title: "",
    year: "",
    type: "",
    rate: 1,
    poster: "",
  });

  // Handler for input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((movie) => ({
      ...movie,
      [name]: value,
    }));
  };

  // Handler to close the modal
  const handleClose = () => {
    setShow(false);
  };

  // Handler to show the modal
  const handleShow = () => {
    setShow(true);
  };

  // Handler to add a new movie
  const handleAddMovie = () => {
    // Validate that a movie title is entered
    if (newMovie.title.trim() === "") {
      alert("Please enter a valid movie title.");
      return;
    }

    // Call the addMovie function with the new movie data
    addMovie(newMovie);

    // Clear the form fields and close the modal after adding a movie
    setNewMovie({
      title: "",
      year: "",
      type: "",
      rate: 1,
      poster: "",
    });
    handleClose();
  };

  return (
    <>
      {/* Button to trigger the modal */}
      <button type="button" className="btn btn-success" onClick={handleShow}>
        Add a new movie
      </button>

      {/* Modal for adding a new movie */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form for entering new movie details */}
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newMovie.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                name="year"
                value={newMovie.year}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                name="type"
                value={newMovie.type}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                name="rate"
                value={newMovie.rate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                name="poster"
                value={newMovie.poster}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Button to close the modal */}
          <Button variant="btn btn-light" onClick={handleClose}>
            Close
          </Button>
          {/* Button to add a new movie */}
          <Button variant="btn btn-light" onClick={handleAddMovie}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;