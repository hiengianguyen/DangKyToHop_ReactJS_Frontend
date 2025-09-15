import classNames from "classnames/bind";
import style from "./StudentItem.module.scss";

const cx = classNames.bind(style);

function StudentItem({ data = {} }) {
  return (
    <div className={cx("wrapper", "shadow")} title={data.fullName}>
      <img className="shadow" src={data.avatar} alt={data.fullName} />
      <div className={cx("info")}>
        <h4>{data.fullName}</h4>
        <span className={cx("content")}>
          {data.gender} • {data.dayOfBirth} • NV1: {data.combination1} • NV2: {data.combination2}
        </span>
      </div>
      <div className={cx("point")}>
        <span className={cx("first")} title="Điểm thi tuyển vào lớp 10 (Tổng điểm 3 môn)">
          {Number(data.mathPoint) + Number(data.literaturePoint) + Number(data.englishPoint)}
        </span>
        <span className={cx("second")} title="Điểm thi tuyển vào lớp 10 (Tổng điểm 3 môn)">
          Điểm
        </span>
      </div>
    </div>
  );
}

export default StudentItem;
