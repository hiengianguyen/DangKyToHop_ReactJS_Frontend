import classNames from "classnames/bind";
import style from "../../Main/Main.module.scss";

const cx = classNames.bind(style);

function ImgCropped({ imgUrl = "" }) {
  return (
    <div className={cx("info-top", "containers", "mb-3", "d-flex", "justify-content-center", "align-items-center")}>
      <img className={cx("profile-img-user", "mt-2", "shadow")} src={imgUrl ? imgUrl : undefined} alt="User" />
    </div>
  );
}

export default ImgCropped;
