import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import api from "../../apis/index.js";

function ModalFormAdopt(props) {
  const { onHide, show } = props;

  const modalProp = { onHide, show };

  const [form, setform] = useState({
    petName: "",
    ownerName: "",
    owneremail: "",
    userName: "",
    userEmail: "",
    subject: "Adoption of ",
    hadPet: false,
    iagree: false,
  });

  useEffect(() => {
    (async () => {
      // const response = await api.get("/friendsposts");
      // setform(response.data);
      // console.log(response.data);
    })();
  }, []);

  const handleChange = async (event) => {
    const tempState = { ...form };

    tempState[event.currentTarget.name] = event.currentTarget.value;

    setform(tempState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(state);

    try {
      // const result = await api.post("/signup", state);
      // console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal
      {...modalProp}
      backdrop={false}
      animation={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Form for responsible adoption:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group
                as={Col}
                controlId={`petNameFormGroup${props.pet._id}`}
              >
                <img
                  className="friends-image"
                  src={props.pet.image}
                  alt={`${props.pet.petName}`}
                />
                <Form.Label>Pet Name</Form.Label>
                <Form.Control
                  type="firstName"
                  placeholder={props.pet.petName}
                  disabled
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId={`userNameFormGroup${props.pet._id}`}
              >
                <img
                  className="friends-image"
                  src={props.user.image}
                  alt={`${props.user.name}`}
                />
                <Form.Label>Human Name</Form.Label>
                <Form.Control
                  type="firstName"
                  placeholder={props.user.name}
                  disabled
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label
                  className="mr-sm-2"
                  htmlFor={`select${props.pet._id}`}
                >
                  Have you ever owned a pet?
                </Form.Label>
                <Form.Control
                  as="select"
                  name="hadPet"
                  className="mr-sm-2"
                  id={`select${props.pet._id}`}
                  onChange={handleChange}
                  custom
                >
                  <option value="0">Choose...</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId={`checkFormGroup${props.pet._id}`}>
                <Form.Check
                  type="checkbox"
                  name="iagree"
                  className="mb-2 mr-sm-2"
                  id={`check${props.pet._id}`}
                  label="I accept the terms and conditions."
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Row>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>

        {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalFormAdopt;
