import classNames from "classnames/bind";
import style from "./MainLayout.module.scss";
import Footer from "../Component/Footer";
import HeaderDefault from "../Component/HeaderDefault";
import BannerSchool from "../Component/BannerSchool";

const cx = classNames.bind(style);

function MainLayout({ children }) {
  return (
    <div className={cx("wrapper", "bg-gray-200")}>
      <HeaderDefault />
      <BannerSchool />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
