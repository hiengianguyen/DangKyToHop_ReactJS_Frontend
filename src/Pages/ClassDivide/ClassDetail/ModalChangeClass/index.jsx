import Modal from "react-bootstrap/esm/Modal";

function ModalChangeClass({ onHide = () => {} }) {
  return (
    <Modal size="lg" show onHide={() => onHide(false)} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Thay đổi lớp học cho học sinh</Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal>
  );
}

export default ModalChangeClass;
