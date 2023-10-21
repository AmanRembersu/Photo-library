import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ImageModal = ({ show, onHide, imageUrl }) => {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'enlarged_image.jpg';
      link.click();
    };



  return (
    <Modal show={show} onHide={onHide} centered>
     <Modal.Header closeButton>
        <Button variant="btn btn-outline-dark" onClick={handleDownload}>
          Download
        </Button>
      </Modal.Header>
      <Modal.Body>
        <img src={imageUrl} alt="Enlarged" style={{ width: '100%', height:'75%'}} />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
