import classNames from "classnames/bind";
import style from "./Loading.module.scss";
import Spinner from "react-bootstrap/Spinner";

const cx = classNames.bind(style);

function Loading({ title = "Đang tải dữ liệu" }) {
  return (
    <div className={cx("loading", "position-fixed")}>
      <div className={cx("d-flex", "align-items-center", "flex-column")}>
        <h2 className={cx("tittle-loading")}>{title}...</h2>
        <Spinner animation="border" className={cx("spinner-border", "mt-4")} />
      </div>
    </div>
  );
}

export default Loading;
