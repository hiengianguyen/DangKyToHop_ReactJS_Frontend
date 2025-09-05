import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import classNames from "classnames/bind";
import style from "./ModalEditTable.module.scss";
import { useState } from "react";
const cx = classNames.bind(style);

function ModalEditTable({ isShow = false, setShow = () => {}, combination = {} }) {
  const handleClose = () => setShow(false);
  const [optionalSubject1, setOptionalSubject1] = useState(combination.optionalSubjects ? combination?.optionalSubjects[0] : "");
  const [optionalSubject2, setOptionalSubject2] = useState(combination.optionalSubjects ? combination?.optionalSubjects[1] : "");
  const [optionalSubject3, setOptionalSubject3] = useState(combination.optionalSubjects ? combination?.optionalSubjects[2] : "");
  const [optionalSubject4, setOptionalSubject4] = useState(combination.optionalSubjects ? combination?.optionalSubjects[3] : "");
  const [compulsorySubject1, setCompulsorySubject1] = useState(combination.compulsorySubjects ? combination?.compulsorySubjects[0] : "");
  const [compulsorySubject2, setCompulsorySubject2] = useState(combination.compulsorySubjects ? combination?.compulsorySubjects[1] : "");
  const [compulsorySubject3, setCompulsorySubject3] = useState(combination.compulsorySubjects ? combination?.compulsorySubjects[2] : "");

  return (
    <Modal show={isShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className={cx("modalTitle", "mb-3")}>{combination.name}</h4>
        <h6 className={cx("cardTitle")}>Môn lựa chọn (04 môn)</h6>
        <ol>
          <li>
            <input
              type="text"
              onChange={(e) => setOptionalSubject1(e.target.value)}
              value={combination.optionalSubjects ? optionalSubject1 || combination?.optionalSubjects[0] : ""}
              name="optionalSubjects"
            />
          </li>
          <li>
            <input
              type="text"
              onChange={(e) => setOptionalSubject2(e.target.value)}
              value={combination.optionalSubjects ? optionalSubject2 || combination?.optionalSubjects[1] : ""}
              name="optionalSubjects"
            />
          </li>
          <li>
            <input
              type="text"
              onChange={(e) => setOptionalSubject3(e.target.value)}
              value={combination.optionalSubjects ? optionalSubject3 || combination?.optionalSubjects[2] : ""}
              name="optionalSubjects"
            />
          </li>
          <li>
            <input
              type="text"
              onChange={(e) => setOptionalSubject4(e.target.value)}
              value={combination.optionalSubjects ? optionalSubject4 || combination?.optionalSubjects[3] : ""}
              name="optionalSubjects"
            />
          </li>
        </ol>
        <h6 className={cx("cardTitle")}>Cụm chuyên đề (03 môn)</h6>
        <ol>
          <li>
            <input
              type="text"
              onChange={(e) => setCompulsorySubject1(e.target.value)}
              value={combination.compulsorySubjects ? compulsorySubject1 || combination?.compulsorySubjects[0] : ""}
              name="compulsorySubjects"
            />
          </li>
          <li>
            <input
              type="text"
              onChange={(e) => setCompulsorySubject2(e.target.value)}
              value={combination.compulsorySubjects ? compulsorySubject2 || combination?.compulsorySubjects[1] : ""}
              name="compulsorySubjects"
            />
          </li>
          <li>
            <input
              type="text"
              onChange={(e) => setCompulsorySubject3(e.target.value)}
              value={combination.compulsorySubjects ? compulsorySubject3 || combination?.compulsorySubjects[2] : ""}
              name="compulsorySubjects"
            />
          </li>
        </ol>
        <div className={cx("d-flex align-items-center gap-3")}>
          <h6 className={cx("cardTitle", "classCount")}>Số lớp: </h6>
          <input type="number" value={combination.classesCount} onChange={() => {}} step="1" min="1" name="classesCount" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditTable;
