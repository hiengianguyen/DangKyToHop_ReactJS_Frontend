import classNames from "classnames/bind";
import style from "./Footer.module.scss";

const cx = classNames.bind(style);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("box-main")}>
        <div className={cx("img-box")}>
          <img
            src="https://res.cloudinary.com/dwoymvppw/image/upload/v1752651864/cropped_circle_image_kfiyjk.png"
            alt="Ảnh lô gô THPT Duy Tân"
          />
        </div>
        <div className={cx("content")}>
          <h4 className={cx("management-by", "fw-bold", "mb-4")}>CƠ QUAN CHỦ QUẢN: Trường THPT Duy Tân</h4>
          <p>Địa chỉ: Phường Quảng Phú, TP. Đà Nẵng</p>
          <p>Số điện thoại: ....</p>
          <p>Trưởng Ban biên tập: .....; Chức vụ: .......</p>
          <p>
            Ghi rõ nguồn: Trang Đăng Ký Tổ Hợp THPT Duy Tân hoặc https://dangkytohopthptduytan.onrender.com khi bạn phát hành lại thông tin
            từ Website này.
          </p>
          <p className={cx("create-by")}>
            Website được thiết kế và phát triển bởi <i className="fw-bold">Nguyễn Gia Hiền</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
