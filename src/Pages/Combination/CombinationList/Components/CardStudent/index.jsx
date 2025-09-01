import classNames from "classnames/bind";
import style from "./CardStudent.module.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const cx = classNames.bind(style);

function CardStudent() {
  return (
    <div className={cx("wrapper")}>
      <div className="d-flex">
        <div className={cx("d-flex flex-column col-md-4")}>
          <img
            src="https://res.cloudinary.com/dwoymvppw/image/upload/v1749474953/avatars/yjejfwzww84ertsbpwxd.jpg"
            alt=""
            className={cx("img-student")}
          />
        </div>
        <div className={cx("col-md-8 px-0 position-relative")}>
          <div className={cx("card-body pt-2 pb-3 px-2")}>
            <div className={cx("name-status", "mb-2")}>
              <p className={cx("m-0")}>Họ và tên:</p>
              <h6 className={cx("card-title", "m-0")} title="Nguyen Gia Hien">
                Nguyen Gia Hien
              </h6>
            </div>

            <div className={cx("details")}>
              <span className={cx("d-flex", "align-items-center", "main")}>
                <p className={cx("mb-0 me-2")} title="Giới tính: Nam">
                  Nam
                </p>
                •
                <p className={cx("mb-0 mx-2")} title="Ngày sinh: 08/09/2009">
                  08/09/2009
                </p>
                •
                <p className={cx("mb-0 ms-2", "nation-detail")} title="Dân tộc: Kinh Go Venna">
                  Kinh Go Venna
                </p>
              </span>
              <span title="Nguyện vọng 1: Tổ Hợp 1">Nguyện vọng 1: Tổ Hợp 1</span>
              <span title="Nguyện vọng 2: Tổ Hợp 2">Nguyện vọng 2: Tổ Hợp 2</span>
              <span className={cx("time")} title="Đăng ký lúc: 12:30:45 14/08/2025">
                12:30:45 14/08/2025
              </span>
            </div>
            <button className={cx("btn btn-primary mt-4 fs-4")}>Xem thông tin</button>
          </div>

          <span
            className={cx("badge", "badge-submitted", "position-absolute")}
            title="Trạng thái"
            style={{ top: 8, right: 8, position: "absolute" }}
          >
            Đã nộp
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardStudent;
