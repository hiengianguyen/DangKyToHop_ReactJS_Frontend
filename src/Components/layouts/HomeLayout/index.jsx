import classNames from "classnames/bind";
import style from "./HomeLayout.module.scss";
import Footer from "../Component/Footer";
import HeaderHome from "../Component/HeaderHome";

const cx = classNames.bind(style);

function HomeLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <HeaderHome />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
