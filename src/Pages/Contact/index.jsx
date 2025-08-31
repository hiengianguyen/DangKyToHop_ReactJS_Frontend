import classNames from "classnames/bind";
import style from "./Contact.module.scss";
import BoxRadius from "../../Components/BoxRadius";
import { useEffect } from "react";

const cx = classNames.bind(style);

function Contact() {
  useEffect(() => {
    document.title = "Đăng ký tổ hợp | Liên hệ";
  }, []);
  return (
    <BoxRadius>
      <div className={cx("wrapper")}>
        <h4 className={cx("title")}>Thông tin Ban tuyển sinh trường THPT Duy Tân</h4>
        <div className={cx("contact-teacher")}>
          <div className={cx("card", "card-1")}>
            <div className={cx("img-box")}>
              <img
                src="https://res.cloudinary.com/dwoymvppw/image/upload/v1743848084/default_user_avatar_dckymx.avif"
                alt="giao vien"
                className={cx("img-fluid")}
              />
            </div>
            <div className={cx("col-info")}>
              <div className={cx("card-body")}>
                <div className={cx("card-title")}>
                  <p className={cx("teacher-label")}>Thầy</p>
                  <h3 className={cx("card-title", "name")}>Trần Bá Lĩnh</h3>
                </div>
                <div className={cx("info-row")}>
                  <p className={cx("info")}>
                    Chức vụ: <b>Bí thư đoàn trường</b>
                  </p>
                </div>
                <p>Thông tin liên hệ:</p>
                <div className={cx("contact-box")}>
                  <p className={cx("info")}>
                    Số điện thoại: <b>0933162651</b>
                  </p>
                  <p className={cx("info")}>
                    Email: <b>tranbalinh@gmail.com</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={cx("card", "card-2")}>
            <div className={cx("img-box", "center-img")}>
              <img
                src="https://res.cloudinary.com/dwoymvppw/image/upload/v1743848084/default_user_avatar_dckymx.avif"
                alt="giao vien"
                className={cx("img-fluid")}
              />
            </div>
            <div className={cx("col-info")}>
              <div className={cx("card-body")}>
                <div className={cx("card-title")}>
                  <p className={cx("teacher-label")}>Cô</p>
                  <h3 className={cx("card-title", "name")}>Nguyễn Hồng Hạnh</h3>
                </div>
                <div className={cx("info-row")}>
                  <p className={cx("info")}>
                    Chức vụ: <b>Phó Bí thư đoàn trường</b>
                  </p>
                </div>
                <p>Thông tin liên hệ:</p>
                <div className={cx("contact-box")}>
                  <p className={cx("info")}>
                    Số điện thoại: <b>0933162651</b>
                  </p>
                  <p className={cx("info")}>
                    Email: <b>nguyenhonghanh@gmail.com</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BoxRadius>
  );
}

export default Contact;
