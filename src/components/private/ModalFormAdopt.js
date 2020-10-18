import React from "react";

import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import FormFile from "react-bootstrap/FormFile";

function ModalAdopt(props) {
  return (
    <Modal
      {...props}
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
          By adopting the animal described above, I declare myself able to
          assume custody and responsibility for this animal and that I am aware
          of all the care that this animal requires in addition to being able to
          guard and monitor it, compromising me to provide good housing and food
          conditions, as well as physical space that allows the animal to
          exercise. I am responsible for preserving the health. I undertake not
          to transmit the possession of this animal to others without the
          donor's knowledge. I also undertake to allow the donor to access the
          animal's location to check its condition. I am aware that if the donor
          finds an inadequate situation for the animal's well-being, I will lose
          his guard, without prejudice to legal penalties.
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
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

export default ModalAdopt;
