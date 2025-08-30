import classNames from "classnames/bind";
import style from "./HomeLayout.module.scss";
import HeaderDefault from "../Component/HeaderDefault";
import Footer from "../Component/Footer";

const cx = classNames.bind(style);

function HomeLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <HeaderDefault />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
