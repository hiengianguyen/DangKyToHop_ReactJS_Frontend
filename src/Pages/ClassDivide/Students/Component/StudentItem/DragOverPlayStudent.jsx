import classNames from "classnames/bind";
import style from "./StudentItem.module.scss";

const cx = classNames.bind(style);

function DragOverPlayStudent({ data = {} }) {
  return (
    <div className={cx("wrapper", "shadow", "scrolling")} title={data.fullName}>
      <img className="shadow" src={data.avatar} alt={data.fullName} />
      <div className={cx("info")}>
        <h4 className="me-4">{data.fullName}</h4>
      </div>
      <div className={cx("point")}>
        <span className={cx("first")} title="Điểm thi tuyển vào lớp 10 (Tổng điểm 3 môn)">
          {Number(data.mathPoint) + Number(data.literaturePoint) + Number(data.englishPoint)}
        </span>
      </div>
    </div>
  );
}

export default DragOverPlayStudent;
