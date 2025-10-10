import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import toast from "react-hot-toast";
import axios from "axios";

function ModalRejectStudent({ show = false, setStudents = () => {}, setShowModal = () => {}, data = {} }) {
  const handleRejectSubmitted = (id) => {
    toast
      .promise(axios.post("http://localhost:4001/combination/submited-reject/" + id), {
        loading: "Đang huỷ phê duyệt...",
        success: <b>Huỷ phê duyệt thành công!</b>,
        error: <b>Huỷ phê duyệt thất bại.</b>
      })
      .then(() => setStudents((prev) => prev.filter((item) => item.userId !== id)))
      .finally(() => setShowModal(false));
  };

  return (
    <Modal show={show} centered onHide={setShowModal}>
      <Modal.Header>
        <Modal.Title className="fs-1">Huỷ phê duyệt</Modal.Title>
      </Modal.Header>
      <Modal.Body className="my-4 fs-2">
        Bạn có muốn huỷ duyệt học sinh?
        <div className="d-flex">
          <span>Họ và tên: </span>
          <span>{data.fullName}</span>
        </div>
        <div className="d-flex">
          <span>Nguyện vọng 1: </span>
          <span>{data.combination1}</span>
        </div>
        <div className="d-flex">
          <span>Nguyện vọng 2: </span>
          <span>{data.combination2}</span>
        </div>
        <div className="d-flex">
          <span>Điểm thi tuyển: </span>
          <span>{Number(data.mathPoint) + Number(data.literaturePoint) + Number(data.englishPoint)}</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" className="fs-3" onClick={() => handleRejectSubmitted(data.userId)}>
          Huỷ duyệt
        </Button>
        <Button variant="secondary" onClick={() => setShowModal(false)} className="fs-3">
          Huỷ
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalRejectStudent;
