import classNames from "classnames/bind";
import style from "./CardClass.module.scss";
import Tippy from "@tippyjs/react/headless";
import ClassTippy from "./ClassTippy";
import { useContext } from "react";
import { overDraggContext } from "../../../../Components/DroppableClass";

const cx = classNames.bind(style);

function CardClass({ data = {}, setUpdateModal = () => {}, setShowDeleteModal = () => {}, studentCount = 0 }) {
  const overContext = useContext(overDraggContext);
  return (
    <Tippy delay={[200, 200]} visible={overContext} placement="top" render={(attrs) => <ClassTippy data={data} tabIndex="-1" {...attrs} />}>
      <div className={cx("wrapper")}>
        <div className="d-flex flex-column align-items-center">
          <h2>{data.name}</h2>
          <span>Số học sinh: {studentCount}</span>
        </div>
        <div className={cx("list-icon")}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="ellipsis"
            className="svg-inline--fa fa-ellipsis "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
            ></path>
          </svg>
          <ul className={cx("opt-noti", "shadow")}>
            <li onClick={() => setUpdateModal({ bol: true, id: data.id })}>Chỉnh sửa</li>
            <li onClick={() => setShowDeleteModal({ bol: true, info: { name: data.name, id: data.id } })}>Xoá</li>
          </ul>
        </div>
        <div className={cx("teacher")}>
          <span>GVCN: {data.teacher}</span>
        </div>
        <span className={cx("title")}>Lớp:</span>
      </div>
    </Tippy>
  );
}

export default CardClass;
