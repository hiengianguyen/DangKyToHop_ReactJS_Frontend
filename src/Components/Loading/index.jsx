import classNames from "classnames/bind";
import style from "./Loading.module.scss";
import Spinner from "react-bootstrap/Spinner";

const cx = classNames.bind(style);

function Loading({ title = "Đang tải dữ liệu", position = "fixed", height = "100vh", color = "#fff", zIndex = "9999" }) {
  return (
    <div className={cx("loading", "position-" + position)} style={{ height: height, backgroundColor: color, zIndex: zIndex }}>
      <div className={cx("d-flex", "align-items-center", "flex-column")}>
        <h2 className={cx("tittle-loading")}>{title}...</h2>
        <Spinner animation="border" className={cx("spinner-border", "mt-4")} />
      </div>
    </div>
  );
}

export default Loading;
