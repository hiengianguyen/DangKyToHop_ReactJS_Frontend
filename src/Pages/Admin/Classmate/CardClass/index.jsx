import classNames from "classnames/bind";
import style from "./CardClass.module.scss";
import Tippy from "@tippyjs/react/headless";
import ClassTippy from "./ClassTippy";
import { useContext } from "react";
import { overDraggContext } from "../../../../Components/DroppableClass";
import toast from "react-hot-toast";
import axios from "axios";

const cx = classNames.bind(style);

function CardClass({ data = {}, setUpdateModal = () => {}, setClasses = () => {} }) {
  const overContext = useContext(overDraggContext);

  const handleDeleteClass = (id) => {
    toast
      .promise(axios.post("http://localhost:4001/ad/classes/delete", { id: id }), {
        loading: "Đang xoá lớp...",
        success: <b>Xoá thành công!</b>,
        error: <b>Xoá thất bại.</b>
      })
      .then(() => {
        setClasses((prev) => prev.filter((item) => item.id !== id));
      });
  };
  return (
    <Tippy delay={[200, 200]} visible={overContext} placement="top" render={(attrs) => <ClassTippy data={data} tabIndex="-1" {...attrs} />}>
      <div className={cx("wrapper")}>
        <h2>{data.name}</h2>
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
            <li onClick={() => handleDeleteClass(data.id)}>Xoá</li>
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
