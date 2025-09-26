import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import Badge from "react-bootstrap/Badge";
import toast from "react-hot-toast";
import axios from "axios";

function ModalDeleteClass({ show = false, setShowDeleteModal = () => {}, setClasses = () => {}, classInfo = {} }) {
  const handleDeleteClass = () => {
    toast
      .promise(axios.post("http://localhost:4001/ad/classes/delete", { id: classInfo.id }), {
        loading: "Đang xoá lớp...",
        success: <b>Xoá thành công!</b>,
        error: <b>Xoá thất bại.</b>
      })
      .then(() => {
        setShowDeleteModal({ bol: false });
        setClasses((prev) => prev.filter((item) => item.id !== classInfo.id));
      });
  };

  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title className="fs-1">Xoá lớp học</Modal.Title>
      </Modal.Header>
      <Modal.Body className="my-4 fs-2">
        Bạn có muôn xoá lớp học <Badge bg="secondary">{classInfo.name}</Badge> ?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" className="fs-3" onClick={handleDeleteClass}>
          Xoá lớp
        </Button>
        <Button variant="secondary" onClick={() => setShowDeleteModal({ bol: false })} className="fs-3">
          Huỷ
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDeleteClass;
