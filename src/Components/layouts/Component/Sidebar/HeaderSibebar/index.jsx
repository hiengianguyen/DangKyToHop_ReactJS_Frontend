import classNames from "classnames/bind";
import style from "./HeaderSidebar.module.scss";

const cx = classNames.bind(style);

function HeaderSidebar({ isPushSidebar }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("img-box", !isPushSidebar ? "d-flex justify-content-center w-100" : "")}>
        <img src="https://res.cloudinary.com/dwoymvppw/image/upload/v1752651864/cropped_circle_image_kfiyjk.png" alt="Lo-go Truong" />
      </div>
      {isPushSidebar && (
        <div className={cx("title-sidebar")}>
          <span className={cx("name")}>Đăng ký tổ hợp</span>
          <span className={cx("des")}>Trường THPT Duy Tân</span>
        </div>
      )}
    </div>
  );
}

export default HeaderSidebar;
