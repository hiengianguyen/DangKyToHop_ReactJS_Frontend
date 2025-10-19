import classNames from "classnames/bind";
import style from "./FooterAdmin.module.scss";

const cx = classNames.bind(style);

function Footer() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("dash", "bg-gray-400 mb-10")}></div>
        <div className={cx("img-box", "shadow rounded-full")}>
          <img
            src="https://res.cloudinary.com/dwoymvppw/image/upload/v1752651864/cropped_circle_image_kfiyjk.png"
            alt="Ảnh lô gô THPT Duy Tân"
          />
        </div>
        <div className={cx("content")}>
          <h4 className={cx("management-by", "fw-bold", "mb-4")}>CƠ QUAN CHỦ QUẢN: Trường THPT Duy Tân</h4>
          <p>Địa chỉ: Phường Quảng Phú, TP. Đà Nẵng</p>
          <p>Ghi rõ nguồn: Trang Đăng Ký Tổ Hợp THPT Duy Tân</p>{" "}
          <p>hoặc https://dangkytohopthptduytan-v2.onrender.com khi bạn phát hành lại thông tin từ Website này.</p>
          <p className={cx("create-by")}>
            Website được thiết kế và phát triển bởi <i className="fw-bold">Nguyễn Gia Hiền</i>
          </p>
          <p className="italic text-gray-600 mt-4">© 2025</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
