import classNames from "classnames/bind";
import style from "./HomeLayout.module.scss";
import FooterAdmin from "../Component/FooterAdmin";
import HeaderHome from "../Component/HeaderHome";
import ParrtenBg from "../../ParrtenBg";

const cx = classNames.bind(style);

function HomeLayout({ children }) {
  return (
    <ParrtenBg>
      <div className={cx("wrapper")}>
        <HeaderHome />
        <div className={cx("content")}>{children}</div>
        <FooterAdmin />
      </div>
    </ParrtenBg>
  );
}

export default HomeLayout;
