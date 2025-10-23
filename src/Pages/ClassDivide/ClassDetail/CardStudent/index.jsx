import classNames from "classnames/bind";
import style from "../../Students/Component/StudentItem/StudentItem.module.scss";
import ModalRejectStudent from "../ModalRejectStudent";
import { useState } from "react";
import ModalChangeClass from "../ModalChangeClass";

const cx = classNames.bind(style);

function CardStudent({ data = {}, setStudents = () => {}, main = false, classDetail = {} }) {
  const [showChangeClass, setShowChangeClass] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={cx("wrapper", "shadow")} title={data.fullName}>
        <img className="shadow" src={data.avatar} alt={data.fullName} />
        <div className={cx("info")}>
          <h4 className="me-4">{data.fullName}</h4>
          <span className={cx("content")}>
            {data.gender} {!main ? `| ${data.dayOfBirth} ` : ""}| NV1: {data.combination1} | NV2: {data.combination2}
          </span>
        </div>
        <div className={cx("point", "detail")}>
          <span className={cx("first")} title="Điểm thi tuyển vào lớp 10 (Tổng điểm 3 môn)">
            {Number(data.mathPoint) + Number(data.literaturePoint) + Number(data.englishPoint)}
          </span>
          <span className={cx("second")} title="Điểm thi tuyển vào lớp 10 (Tổng điểm 3 môn)">
            Điểm
          </span>
        </div>
        {!main && (
          <div className={cx("list-icon")}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis"
              className="svg-inline--fa fa-ellipsis "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
              ></path>
            </svg>
            <ul className={cx("opt-noti", "shadow")}>
              <li onClick={() => setShowChangeClass(true)}>Chuyển lớp</li>
              <li onClick={() => setShowModal(true)}>Huỷ phê duyệt</li>
            </ul>
          </div>
        )}
      </div>
      {showModal && <ModalRejectStudent setShowModal={setShowModal} setStudents={setStudents} data={data} />}
      {showChangeClass && (
        <ModalChangeClass onHide={setShowChangeClass} student={data} classDetail={classDetail} setStudents={setStudents} />
      )}
    </>
  );
}

export default CardStudent;
