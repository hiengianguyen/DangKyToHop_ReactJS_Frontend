import classNames from "classnames/bind";
import style from "./SchoolStats.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function SchoolStats() {
  return (
    <div className={cx("box-content-info")}>
      <div className={cx("container")}>
        <div className={cx("title")}>
          <h4 className={cx("fw-bold")}>Môi trường học tập năng động – Nền tảng vững chắc cho tương lai</h4>
        </div>
        <div className={cx("info")}>
          <ul className={cx("ds-data")}>
            <li className={cx("data")}>
              <div className={cx("content")}>
                <h2>400+</h2>
                <p>Học sinh xuất sắc, giỏi</p>
              </div>
            </li>
            <div className={cx("dash-width")}></div>
            <li className={cx("data")}>
              <div className={cx("content")}>
                <h2>75+</h2>
                <p>Cán bộ, giáo viên</p>
              </div>
            </li>
            <div className={cx("dash-width")}></div>
            <li className={cx("data")}>
              <div className={cx("content")}>
                <h2>1250+</h2>
                <p>Học sinh theo học</p>
              </div>
            </li>
            <div className={cx("dash-width")}></div>
            <li className={cx("data")}>
              <div className={cx("content")}>
                <h2>32</h2>
                <p>Lớp học</p>
              </div>
            </li>
          </ul>
          <i>
            <FontAwesomeIcon icon={faCircleInfo} className="" /> Thông tin từ năm học 2024-2025
          </i>
        </div>
      </div>
    </div>
  );
}

export default SchoolStats;
