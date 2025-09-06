import classNames from "classnames/bind";
import style from "./Sidebar.module.scss";
import HeaderSidebar from "./HeaderSibebar";
import Dash from "../../../Dash";
import PathItems from "./PathItems";
import { publicRoutes, privateRoutes } from "../../../../Router";
import { createContext, useEffect, useRef, useState } from "react";
import { useAuth } from "../../../../Contexts/AuthContext";
import EndBox from "./PathItems/EndBox";

const cx = classNames.bind(style);
export const PushSidebarContext = createContext();

function Sidebar() {
  const { auth } = useAuth();
  const [currRouter, setCurrRouter] = useState(window.location.pathname);
  const [pushSidebar, setPushSidebar] = useState(false);

  const wrapperSidebar = useRef();
  const contentSidebar = useRef();

  useEffect(() => {
    if (pushSidebar) {
      wrapperSidebar.current.style.width = "280px";
      contentSidebar.current.style.width = "280px";
    } else {
      wrapperSidebar.current.style.width = "80px";
      contentSidebar.current.style.width = "80px";
    }
  }, [pushSidebar]);
  return (
    <div className={cx("wrapper")} ref={wrapperSidebar}>
      <div className={cx("content")} ref={contentSidebar}>
        <PushSidebarContext.Provider value={{ isPush: pushSidebar, onPush: setPushSidebar }}>
          <HeaderSidebar isPushSidebar={pushSidebar} />
          <div className={cx("box-content", { small: !pushSidebar })}>
            <Dash height="1px" />
            <PathItems
              routers={[...publicRoutes, ...privateRoutes]}
              currRouter={currRouter}
              onChangeRoute={setCurrRouter}
              role={auth?.user?.role || "student"}
            />
            <Dash height="1px" />
            <EndBox currRouter={currRouter} onChangeRoute={setCurrRouter} />
          </div>
        </PushSidebarContext.Provider>
      </div>
    </div>
  );
}

export default Sidebar;
