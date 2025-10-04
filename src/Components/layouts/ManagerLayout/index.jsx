import classNames from "classnames/bind";
import style from "./ManagerLayout.module.scss";
import Footer from "../Component/Footer";
import Sidebar from "../Component/Sidebar";
import BannerSchool from "../Component/BannerSchool";

const cx = classNames.bind(style);

function ManagerLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      <div className="d-flex flex-column flex-grow-1 overflow-x-hidden">
        <BannerSchool role={"manager"} />
        <div className={cx("content")}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default ManagerLayout;
