import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

function CheckoutForm() {
  // Handle Validation inputs
  const [validated, setValidated] = useState(false);
  // Handle Popup
  const [showModal, setShowModal] = useState(false);
  
  const handleSubmit = (event) => {
    // Current input
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    
    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const cityRegex = /^[a-zA-Z\s]*$/;
    const stateRegex = /^[a-zA-Z]{2}$/;
    const zipRegex = /^\d{5}$/;

    // Check validation for each input field
    if (
      form.checkValidity() === false ||
      !nameRegex.test(form.elements['validationCustom01'].value) ||
      !nameRegex.test(form.elements['validationCustom02'].value) ||
      !usernameRegex.test(form.elements['validationCustomUsername'].value) ||
      !cityRegex.test(form.elements['validationCustom03'].value) ||
      !stateRegex.test(form.elements['validationCustom04'].value) ||
      !zipRegex.test(form.elements['validationCustom05'].value) ||
      !form.elements['terms'].checked
    ) {
      setValidated(true);
      return;
    }

    // Form is valid, submit your data here
    setShowModal(true);
  };

  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h2>Please Enter Your Information</h2>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            pattern="[a-zA-Z]+"
            defaultValue="Mark"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid first name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            pattern="[a-zA-Z]+"
            defaultValue="Otto"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid last name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              pattern="[a-zA-Z0-9_]+"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a valid username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" pattern="[a-zA-Z\s]*" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" pattern="[a-zA-Z]{2}" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state code (e.g., NY).
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" pattern="\d{5}" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid 5-digit zip code.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          id="terms"
          name="terms"
          label="Agree to terms and conditions"
          required
        />
        <Form.Control.Feedback type="invalid">
          You must agree before submitting.
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    {/* Modal for success message */}
    <Modal show={showModal} onHide={() => setShowModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Success</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Your form has been successfully submitted.
    </Modal.Body>
    <Modal.Footer>
      <Button variant="danger" onClick={() => setShowModal(false)}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  );
}

export default CheckoutForm;