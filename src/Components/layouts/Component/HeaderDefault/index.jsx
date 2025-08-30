import classNames from "classnames/bind";
import style from "./HeaderDefault.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);

function HeaderDefault() {
  return (
    <div className={cx("header")}>
      <div className={cx("d-flex", "align-items-center")}>
        <div className={cx("d-flex", "align-items-center", "me-auto")}>
          <div className={cx("nav-img")}>
            <img src="https://res.cloudinary.com/dwoymvppw/image/upload/v1752651864/cropped_circle_image_kfiyjk.png" alt="logo" />
          </div>
          <div className={cx("tittle-sidebar")}>
            <span className={cx("name", "fw-bolder")}>Đăng ký tổ hợp</span>
            <span className={cx("des", "fw-medium")}>Trường THPT Duy Tân</span>
          </div>
        </div>
      </div>
      <div className={cx("nav-bar-icon", "main", "ms-auto") + " d-flex justify-content-center align-items-center"}>
        <FontAwesomeIcon icon={faBars} className="" />
      </div>
    </div>
  );
}

export default HeaderDefault;
