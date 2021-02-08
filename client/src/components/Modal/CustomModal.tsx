import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CustomModal: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    window.scrollTo({top: 0})
  };

  const handleShow = () => setShow(true);
  
  return(
    <>
    <CustomModal>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Thank you for your submission</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Click through to see and contribute to others' ideas.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" href="/feedback">Submissions</Button>
          </Modal.Footer>
        </Modal.Dialog> 
      </Modal>
    </CustomModal>
  </>
  )
};

export default CustomModal;