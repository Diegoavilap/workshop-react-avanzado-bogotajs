import React, { useContext, useState, useRef } from "react";
import { Context } from './Context';
import {
    Modal, Form, Col, Button
  } from "react-bootstrap";

function ModalForm(){

    const { dispath: { handleSubmit, handleClose } } = useContext(Context);
    const [show, setShow] = useState(false);
    const formRef = useRef();
    const user = useRef({ id: '', name:'', lastName: '', email: '', state: '', password: '' });

    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Modal.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  required
                  type="text"
                  placeholder="name"
                  defaultValue={user.current.name}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="lastName"
                  required
                  type="text"
                  placeholder="last name"
                   defaultValue={user.current.lastName}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  required
                  type="email"
                  placeholder="email"
                  defaultValue={user.current.email}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>State</Form.Label>
                <Form.Control
                  name="state"
                  required
                  type="select"
                   defaultValue={user.current.state}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  required
                  type="password"
                  placeholder="password"
                  defaultValue={user.current.password}
                />
              </Form.Group>
            </Form.Row>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
}

export default ModalForm;