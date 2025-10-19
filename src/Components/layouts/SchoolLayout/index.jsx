import classNames from "classnames/bind";
import style from "./SchoolLayout.module.scss";
import FooterAdmin from "../Component/FooterAdmin";
import HeaderDefault from "../Component/HeaderDefault";

const cx = classNames.bind(style);

function SchoolLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <HeaderDefault />
      <div className={cx("content")}>{children}</div>
      <FooterAdmin />
    </div>
  );
}

export default SchoolLayout;
