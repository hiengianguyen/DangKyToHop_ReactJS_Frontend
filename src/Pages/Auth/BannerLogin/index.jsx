import classNames from "classnames/bind";
import style from "./BannerLogin.module.scss";
const cx = classNames.bind(style);

function BannerLogin() {
  return (
    <div className={cx("box-img", "justify-content-center", "align-items-center")}>
      <div className={cx("content", "d-flex", "align-items-center")}>
        <img src="https://res.cloudinary.com/dwoymvppw/image/upload/v1752651864/cropped_circle_image_kfiyjk.png" alt="" />
        <div className={cx("text")}>
          <h2>ĐĂNG KÝ TỔ HỢP</h2>
          <p className={cx("m-0")}>Trường THPT Duy Tân</p>
        </div>
      </div>
    </div>
  );
}

export default BannerLogin;
