import classNames from "classnames/bind";
import style from "../PathItems.module.scss";
import { useAuth } from "../../../../../../Contexts/AuthContext";
import Dash from "../../../../../Dash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PushSidebarContext } from "../..";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const cx = classNames.bind(style);

function EndBox({ currRouter, onChangeRoute = () => {} }) {
  const pushSidebar = useContext(PushSidebarContext);
  const navigator = useNavigate();
  const { auth, logout } = useAuth();

  const handleLogout = () => {
    axios.get("http://localhost:4001/auth/signout").then((axiosData) => {
      if (axiosData.data.isSuccess) {
        logout();
        navigator("/auth/signin");
      }
    });
  };

  const handleNavigator = (path) => {
    onChangeRoute(path);
    navigator(path);
  };

  return (
    <>
      <div className={cx("end-box")}>
        <li
          className={cx("box", "avatar", {
            active: "/profile" === currRouter
          })}
          onClick={() => handleNavigator("/profile")}
          value="profile"
        >
          <img src={auth?.user?.avatar} />
          {pushSidebar.isPush && <p className={cx("m-0", "text", "text-black")}>{auth?.user?.fullName}</p>}
        </li>
        <li className={cx("box", "logout", "gap-4", "my-1", "mt-2")} onClick={handleLogout}>
          <FontAwesomeIcon icon={faPowerOff} className="" />
          {pushSidebar.isPush && <p className={cx("text", "m-0")}>Đăng xuất</p>}
        </li>
      </div>
      <Dash height="1px" />
      <div className={cx("show-sidebar")}>
        <div title="Thu nhỏ bảng điều hướng" className={cx("p-0")}>
          <li onClick={() => pushSidebar.onPush((prev) => !prev)} className={cx("box", "redirect", "mb-1", "btn-push-sidebar")}>
            {pushSidebar.isPush && <p className={cx("text", "m-0")}>Thu nhỏ bảng điều hướng</p>}
            <FontAwesomeIcon icon={faArrowLeft} className="" />
          </li>
        </div>
      </div>
    </>
  );
}

export default EndBox;
