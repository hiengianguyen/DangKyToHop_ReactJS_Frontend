import classNames from "classnames/bind";
import style from "../CardClass/CardClass.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function AddClassCard({ ...prop }) {
  return (
    <div className={cx("wrapper", "gap-2")} {...prop} title="Thêm lớp">
      <h2>Thêm lớp</h2>
      <FontAwesomeIcon icon={faPlus} className="fs-2" />
    </div>
  );
}

export default AddClassCard;
