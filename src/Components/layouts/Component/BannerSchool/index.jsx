import classNames from "classnames/bind";
import style from "./BannerSchool.module.scss";

const cx = classNames.bind(style);

function BannerSchool() {
  return (
    <div className={cx("school-info")}>
      <img
        className={cx("school-banner")}
        src="https://res.cloudinary.com/dwoymvppw/image/upload/v1752812401/school_banner_second_new_un0i6r.png"
        alt=""
      />
      <div className={cx("banner-container")}>
        <img
          className={cx("school-banner-second")}
          src="https://res.cloudinary.com/dwoymvppw/image/upload/v1743963404/school_banner_first_ezzd1f.png"
          alt=""
        />
        <div className={cx("school-info-detail")}>
          <img src="https://i.postimg.cc/fyNszfCN/bannertrencung.gif" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BannerSchool;
