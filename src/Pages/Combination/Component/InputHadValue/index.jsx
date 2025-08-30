import classNames from "classnames/bind";
import style from "./InputHadValue.module.scss";

const cx = classNames.bind(style);

function InputHadValue({ label = "", value = "", fontStyle = "" }) {
  return (
    <div className={cx("wrapper")}>
      <span>{label}:</span>
      <span className={cx("value-text")} style={{ textTransform: fontStyle === "" ? "capitalize" : "" }}>
        {value}
      </span>
    </div>
  );
}

export default InputHadValue;
