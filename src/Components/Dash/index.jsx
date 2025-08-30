import classNames from "classnames/bind";
import style from "./Dash.module.scss";

const cx = classNames.bind(style);

function Dash({ width = "", height = "", color = "#ccc" }) {
  return (
    <div
      className={cx("dash")}
      style={{
        width: height ? "100%" : width,
        height: width ? "" : height,
        backgroundColor: color,
        margin: width ? "0 16px" : "16px 0"
      }}
    ></div>
  );
}

export default Dash;
