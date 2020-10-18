// import React, { useState, useEffect } from "react";
import React from "react";

import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import FormFile from "react-bootstrap/FormFile";

function ModalAdopt(props) {
  console.log(props);
  console.log(props.formShow);
  const { onHide, show, ...rest } = props;
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
          Terms of adoption:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <p>
            We know many families have two working adults and we don't expect
            anyone to be a super hero and quit a day job just to be able to take
            home a puppy. Every puppy family has different needs, and this
            information form helps us identify who needs what information and
            what homes might make the best fit. If you're a veteran poodle
            owner, we don't want to waste your time regaling things you already
            know; by the same token, if this is your first puppy or first
            poodle, we want to make sure you leave prepared for what life with a
            puppy may bring.
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onAccept}>Accept</Button>

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

export default ModalAdopt;
