import classNames from "classnames/bind";
import style from "./Classmate.module.scss";
const cx = classNames.bind(style);

function Classmate() {
  return (
    <div className={cx("wrapper")}>
      <h2>hihi</h2>
    </div>
  );
}

export default Classmate;
