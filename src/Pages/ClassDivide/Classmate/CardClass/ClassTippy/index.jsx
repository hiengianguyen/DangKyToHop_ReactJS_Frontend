import classNames from "classnames/bind";
import style from "./ClassTippy.module.scss";

const cx = classNames.bind(style);

function ClassTippy({ data = {}, ...props }) {
  return (
    <div className={cx("wrapper")} {...props}>
      <div className={cx("f-flex", "flex-column")}>
        <div className={cx("d-flex")}>
          <span className={cx("class-title")}>Lớp: </span>
          <span className={cx("class-name")}>{data.name}</span>
        </div>
        <span className={cx("teacher")}>GVCN: {data.teacher}</span>
      </div>
      <div className={cx("d-flex", "flex-column")}>
        <span className={cx("combination")}>{data.combination1}</span>
        <span className={cx("combination")}>{data.combination2}</span>
      </div>
    </div>
  );
}

export default ClassTippy;
