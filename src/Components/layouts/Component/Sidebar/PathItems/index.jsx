import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./PathItems.module.scss";
import { useContext, useEffect, useState } from "react";
import { PushSidebarContext } from "..";

const cx = classNames.bind(style);

function PathItems({ routers, currRouter, onChangeRoute = () => {}, role = "student" }) {
  const [menuRoutes, setMenuRoutes] = useState([]);
  const navigate = useNavigate();
  const pushSidebar = useContext(PushSidebarContext);

  const handleNavigator = (path) => {
    onChangeRoute(path);
    navigate(path);
  };

  useEffect(() => {
    setMenuRoutes(
      routers.filter((route) => {
        return route.inSidebar !== false && route.roles.includes(role);
      })
    );
  }, [routers]);

  return (
    <div className={cx("menu-bar")}>
      <ul className={cx("boxs")}>
        {menuRoutes &&
          menuRoutes.map((route, index) => (
            <li
              className={cx("box", {
                active: route.path === currRouter
              })}
              title={route.title}
              key={index}
              onClick={() => handleNavigator(route.path)}
            >
              <i className={cx("icon")}>{route.icon}</i>
              {pushSidebar.isPush && <p className={cx("text")}>{route.title}</p>}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PathItems;
