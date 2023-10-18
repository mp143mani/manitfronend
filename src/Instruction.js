import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalNew() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button className="mt-2" variant="primary" onClick={() => setShow(true)}>
        Mandatory Instruction To Start App
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Mandatory Instruction To Start App
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3>Email id & Password</h3>
            <div>
              <h4>Cordinator</h4>

              <p>Email:mani@gmail.com</p>
              <p>Password:mani1234</p>
            </div>
            <div>
              <h4>Teacher</h4>

              <p>Email:amuthan@gmail.com</p>
              <p>Password:abcd1234</p>
            </div>
            <div>
              <h4>Student</h4>

              <p>Email: hari@gmail.com</p>
              <p>Password: abcd1234</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalNew;
