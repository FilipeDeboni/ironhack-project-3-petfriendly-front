import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../../apis/index.js";

function ModalCreatePost(props) {
  const { onHide, show } = props;

  const [form, setForm] = useState({
    image: "http://placeimg.com/1920/1080/animals",
    description: "",
    petName: "",
    adoption: "false",
  });

  const modalProp = { onHide, show };

  const handleChange = async (event) => {
    const tempState = { ...form };
    tempState[event.currentTarget.name] = event.currentTarget.value;

    setForm(tempState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/post", form);
      props.onHide();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal
        {...modalProp}
        backdrop={false}
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add a new post:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group controlId="">
                  <img
                    className="friends-image"
                    src={form.image}
                    alt="Your Pet"
                  />
                  <Form.Control
                    type="firstName"
                    name="image"
                    placeholder="Pet image url"
                    value={form.image}
                    onChange={handleChange}
                  />
                  <Form.Group>
                    <Form.Label>Pet Name</Form.Label>
                    <Form.Control
                      type="firstName"
                      name="petName"
                      placeholder="Pet name"
                      value={form.petName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="firstName"
                      name="description"
                      placeholder="Add a description"
                      value={form.description}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="mr-sm-2">
                      Is it for adoption?
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="adoption"
                      className="mr-sm-2"
                      id="anewID"
                      onChange={handleChange}
                      custom
                    >
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Button onClick={props.onHide}>Close</Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Row>
            </Form>
          </Container>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> 
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default ModalCreatePost;
