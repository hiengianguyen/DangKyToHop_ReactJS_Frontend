import classNames from "classnames/bind";
import style from "./BannerLogin.module.scss";
import { useMediaQuery } from "react-responsive";
const cx = classNames.bind(style);

const Pc = ({ children }) => {
  const isPc = useMediaQuery({ minWidth: 1400 });
  return isPc ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1400 });
  return isDesktop ? children : null;
};

function BannerLogin() {
  return (
    <>
      <Pc>
        <div
          className={cx(
            "box-img",
            "justify-content-center",
            "align-items-center"
          )}
        >
          <div className={cx("content", "d-flex", "align-items-center")}>
            <img
              src="https://res.cloudinary.com/dwoymvppw/image/upload/v1752651864/cropped_circle_image_kfiyjk.png"
              alt=""
            />
            <div className={cx("text")}>
              <h2>ĐĂNG KÝ TỔ HỢP</h2>
              <p className={cx("m-0")}>Trường THPT Duy Tân</p>
            </div>
          </div>
        </div>
      </Pc>

      <Desktop>
        <div
          className={cx(
            "box-img",
            "desktop",
            "justify-content-center",
            "align-items-center"
          )}
        >
          <div className={cx("content", "d-flex", "align-items-center")}>
            <img
              src="https://res.cloudinary.com/dwoymvppw/image/upload/v1752651864/cropped_circle_image_kfiyjk.png"
              alt=""
            />
            <div className={cx("text")}>
              <h2>ĐĂNG KÝ TỔ HỢP</h2>
              <p className={cx("m-0")}>Trường THPT Duy Tân</p>
            </div>
          </div>
        </div>
      </Desktop>
    </>
  );
}

export default BannerLogin;
