import classNames from "classnames/bind";
import style from "./BoxRadius.module.scss";

const cx = classNames.bind(style);

function BoxRadius({ children, className = "" }) {
  return (
    <div
      className={cx("wrapper", {
        [className]: className
      })}
    >
      {children}
    </div>
  );
}

export default BoxRadius;
