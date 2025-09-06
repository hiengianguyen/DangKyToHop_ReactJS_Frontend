import classNames from "classnames/bind";
import style from "./MenuGenerator.module.scss";
const cx = classNames.bind(style);

function MenuGenerator({ currPage = 1, onNextPage = () => {} }) {
  return (
    <div className={cx("tab-container")}>
      <div className={cx("tabs")}>
        <button
          onClick={() => onNextPage(1)}
          className={cx("tab", {
            active: currPage === 1
          })}
        >
          Tạo thông báo nhanh
        </button>
        <button
          onClick={() => onNextPage(2)}
          className={cx("tab", {
            active: currPage === 2
          })}
        >
          Liên kết đường dẫn file
        </button>
      </div>
    </div>
  );
}

export default MenuGenerator;
