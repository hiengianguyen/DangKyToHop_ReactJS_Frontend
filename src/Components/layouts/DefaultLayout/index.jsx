import classNames from "classnames/bind";
import style from "./DefaultLayout.module.scss";
import Sidebar from "../Component/Sidebar";
import BannerSchool from "../Component/BannerSchool";
import Footer from "../Component/Footer";

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      <div className={cx("container-content")}>
        <BannerSchool />
        <div className={cx("content")}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
