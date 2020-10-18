import React from "react";

import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

function ModalFormAdopt(props) {
  // console.log(props);
  console.log(props.pet);
  const { onHide, show } = props;
  const modalProp = { onHide, show };
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
          <Form>
            <Form.Group controlId="formPetEmail">
              {/* <Image src={props.image} roundedCircle /> */}
              <Form.Label>Name of Pet You Wish to Adopt</Form.Label>
              <Form.Control
                type="firstName"
                placeholder={props.pet.petName}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formHumanName">
              {/* <Image src={props.user.image} roundedCircle /> */}
              <Form.Label>Perspective pet parent</Form.Label>
              <Form.Control
                type="firstName"
                placeholder={props.user.name}
                disabled
              />
              <Form.Text className="text-muted">First Name</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
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
