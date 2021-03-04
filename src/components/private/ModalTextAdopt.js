// import React, { useState, useEffect } from "react";
import React from "react";

import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function ModalTextAdopt(props) {
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
          Terms of adoption:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <p>
            We know many families have working adults and we don't expect anyone
            to be a super hero and quit a day job just to be able to take home a
            puppy. Every puppy family has different needs, and this information
            form helps us identify who needs what information and what homes
            might make the best fit.
          </p>
          <p>
            But by adopting the animal described, you must make sure that you
            able to assume custody and responsibility for this animal and that
            you can provide all the care that this animal requires. Please,
            responsible in preserving the health and do not transmit the
            possession of this animal to others without the donor's knowledge.
          </p>
          <p>
            And finally, to asure the safeness of the animal, the donor may want
            access to the animal's location to check its condition and if finds
            an inadequate situation for the animal's well-being, I will lose his
            guard, without prejudice to legal penalties.
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

export default ModalTextAdopt;
