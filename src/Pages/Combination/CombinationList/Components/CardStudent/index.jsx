import classNames from "classnames/bind";
import style from "./CardStudent.module.scss";
import { formatDayOfBirth, typeBadge } from "../../../../../utils";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);

function CardStudent({ data = {}, resp = "pc" }) {
  const navigator = useNavigate();
  return (
    <div className={cx("wrapper", resp)}>
      <div className="d-flex">
        <div className={cx("d-flex flex-column col-md-4")}>
          <img src={data.avatar} alt={data.fullName} className={cx("img-student", "border border-dark-subtle")} />
        </div>
        <div className={cx("col-md-8 px-0 position-relative")}>
          <div className={cx("card-body pt-2 pb-3 px-2")}>
            <div className={cx("name-status", "mb-2")}>
              <p className={cx("m-0")}>Họ và tên:</p>
              <h6 className={cx("card-title", "m-0")} title={data.fullName}>
                {data.fullName}
              </h6>
            </div>

            <div className={cx("details")}>
              <span className={cx("d-flex", "align-items-center", "main")}>
                <p className={cx("mb-0 me-2")} title={"Giới tính: " + data.gender}>
                  {data.gender}
                </p>
                •
                <p className={cx("mb-0 mx-2")} title={"Ngày sinh: " + formatDayOfBirth(data.dayOfBirth)}>
                  {formatDayOfBirth(data.dayOfBirth)}
                </p>
                •
                <p className={cx("mb-0 ms-2", "nation-detail")} title={"Dân tộc: " + data.nation}>
                  {data.nation}
                </p>
              </span>
              <span title={"Nguyện vọng 1: " + data.combination1}>Nguyện vọng 1: {data.combination1}</span>
              <span title={"Nguyện vọng 2: " + data.combination2}>Nguyện vọng 2: {data.combination2}</span>
              <span className={cx("time")} title={"Đăng ký lúc: " + data.registeredAt}>
                {data.registeredAt}
              </span>
            </div>
            <button
              type="button"
              className={cx("btn btn-primary mt-4 fs-4")}
              onClick={() => navigator("/combination/detail/" + data.userId)}
            >
              Xem thông tin
            </button>
          </div>

          <span
            className={cx("badge", "badge-" + data.status, "position-absolute")}
            title="Trạng thái"
            style={{ top: 8, right: 8, position: "absolute" }}
          >
            {typeBadge(data.status).title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardStudent;
