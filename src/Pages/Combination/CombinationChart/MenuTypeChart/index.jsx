import classNames from "classnames/bind";
import style from "./MenuTypeChart.module.scss";
const cx = classNames.bind(style);

function MenuTypeChart({ currPage = 1, onNextPage = () => {} }) {
  return (
    <div className={cx("tab-container")}>
      <div className={cx("tabs")}>
        <button
          onClick={() => onNextPage(1)}
          className={cx("tab", {
            active: currPage === 1
          })}
        >
          Thống kê đăng ký
        </button>
        <button
          onClick={() => onNextPage(2)}
          className={cx("tab", {
            active: currPage === 2
          })}
        >
          Thống kê chỉ tiêu
        </button>
      </div>
    </div>
  );
}

export default MenuTypeChart;
