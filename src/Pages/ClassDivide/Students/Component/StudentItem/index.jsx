import classNames from "classnames/bind";
import style from "./StudentItem.module.scss";
import { useDraggable } from "@dnd-kit/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function StudentItem({ data = {}, detail = false, ...props }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: data.id });
  return (
    <div className={cx("wrapper", "border", { dragging: isDragging })} ref={setNodeRef} {...attributes} {...props} title={data.fullName}>
      <FontAwesomeIcon icon={faArrowsUpDownLeftRight} className={cx("icon-drag")} {...listeners} title="Kéo thẻ học sinh" />
      <img className="shadow" src={data.avatar} alt={data.fullName} />
      <div className={cx("info")}>
        <h4 className="me-4">{data.fullName}</h4>
        {!detail && (
          <span className={cx("content")}>
            {data.gender} • {data.dayOfBirth} • NV1: {data.combination1} • NV2: {data.combination2}
          </span>
        )}
      </div>
      <div className={cx("point")}>
        <span className={cx("first")} title="Điểm thi tuyển vào lớp 10 (Tổng điểm 3 môn)">
          {Number(data.mathPoint) + Number(data.literaturePoint) + Number(data.englishPoint)}
        </span>
        {!detail && (
          <span className={cx("second")} title="Điểm thi tuyển vào lớp 10 (Tổng điểm 3 môn)">
            Điểm
          </span>
        )}
      </div>
    </div>
  );
}

export default StudentItem;
