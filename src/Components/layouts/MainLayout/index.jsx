import classNames from "classnames/bind";
import style from "./MainLayout.module.scss";
import FooterAdmin from "../Component/FooterAdmin";
import HeaderDefault from "../Component/HeaderDefault";
import BannerSchool from "../Component/BannerSchool";

const cx = classNames.bind(style);

function MainLayout({ children }) {
  return (
    <div className={cx("wrapper", "bg-gray-200")}>
      <HeaderDefault />
      <BannerSchool />
      <div className={cx("content")}>{children}</div>
      <FooterAdmin />
    </div>
  );
}

export default MainLayout;
