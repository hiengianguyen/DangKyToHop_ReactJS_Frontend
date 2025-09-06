import BoxRadius from "../../../Components/BoxRadius";
import classNames from "classnames/bind";
import style from "./NotiInfo.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);

function NotiInfo() {
  return (
    <BoxRadius>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className={cx("title")}>Hướng dẫn xuất bản và lấy liên kết công khai từ Google Docs</h4>
        <Link to={-1} className="btn btn-primary text-white fs-3">
          Trở lại
        </Link>
      </div>
      <div className={cx("content-info", "container", "mt-4")}>
        <div className={cx("boxContent")}>
          <h5>
            <b>Bước 1:</b> Tải tệp Word lên Google Drive
          </h5>
          <p className={cx("mainText")}>
            {" "}
            Để bắt đầu, vui lòng truy cập vào <a href="https://drive.google.com/">Google Drive</a>. Tại đây, người dùng nhấn vào nút{" "}
            <b>"Mới"</b> ở góc trên bên trái màn hình, sau đó chọn <b>"Tải tệp lên"</b> từ menu. Hệ thống sẽ cho phép bạn chọn một file Word
            (.doc hoặc .docx) từ thiết bị cá nhân để tải lên Drive. Sau khi hoàn tất, tệp sẽ xuất hiện trong danh sách tài liệu trên Drive.
          </p>
          <div className={cx("d-flex justify-content-center")}>
            <img src="https://res.cloudinary.com/dwoymvppw/image/upload/v1754408377/geturl-1_xpycjo.jpg" alt="" />
            <img src="https://res.cloudinary.com/dwoymvppw/image/upload/v1754408377/geturl-2_g4nm8l.jpg" alt="" />
          </div>
        </div>
        <div className={cx("boxContent")}>
          <h5>
            <b>Bước 2:</b> Mở tệp bằng Google Docs
          </h5>
          <p className={cx("mainText")}>
            {" "}
            Khi file đã được tải lên, người dùng hãy nhấp chuột phải vào tên tệp trong Google Drive, chọn mục <b>"Mở bằng"</b> và sau đó
            chọn <b>"Google Tài liệu"</b>. Hành động này sẽ chuyển đổi tệp Word sang định dạng Google Docs, giúp bạn chỉnh sửa và định dạng
            trực tiếp trên nền tảng web của Google. Tài liệu lúc này đã sẵn sàng để chia sẻ và xuất bản.
          </p>
          <div className={cx("d-flex justify-content-center")}>
            <img src="https://res.cloudinary.com/dwoymvppw/image/upload/v1754408377/geturl-4_uowzq5.jpg" alt="" />
          </div>
        </div>
        <div className={cx("boxContent", "bc3")}>
          <h5>
            <b>Bước 3:</b> Truy cập tính năng xuất bản tài liệu
          </h5>
          <p className={cx("mainText")}>
            {" "}
            Tại giao diện Google Docs, hệ thống hướng dẫn bạn vào menu <b>"Tệp"</b> trên thanh công cụ, di chuột đến mục <b>"Chia sẻ"</b>,
            sau đó chọn <b>"Xuất bản lên web"</b>. Đây là <b>bước cần thiết</b> để tạo một đường dẫn công khai cho phép người khác truy cập
            tài liệu mà không cần quyền chỉnh sửa hay xem riêng tư
          </p>
          <div className={cx("d-flex justify-content-center")}>
            <img src="https://res.cloudinary.com/dwoymvppw/image/upload/v1754408377/geturl-5_hzq64k.jpg" alt="" />
          </div>
        </div>
        <div className={cx("boxContent", "bc4")}>
          <h5>
            <b>Bước 4:</b> Xuất bản tài liệu lên web
          </h5>
          <p className={cx("mainText")}>
            {" "}
            Trong hộp thoại <b>"Xuất bản lên web"</b>, vui lòng đảm bảo bạn đang ở tab <b>"Liên kết"</b> (mặc định). Sau đó, nhấn nút{" "}
            <b>"Xuất bản"</b> và xác nhận nếu hệ thống yêu cầu. Ngay sau đó, Google Docs sẽ cung cấp cho bạn một đường dẫn có định dạng:
          </p>
          <p className={cx("idDocs")}>
            https://docs.google.com/document/d/e/<b>[ID]</b>
          </p>
          <p>
            Trong đó <b>[ID]</b> là mã định danh của tài liệu. Đây chính là dữ liệu mà bạn dùng để nhúng file thông báo vào.
          </p>
          <div className={cx("d-flex justify-content-center")}>
            <img src="https://res.cloudinary.com/dwoymvppw/image/upload/v1754408378/geturl-6_lnzgyb.jpg" alt="" />
          </div>
        </div>
        <div className={cx("boxContent", "bc5")}>
          <h5>
            <b>Bước 5:</b> Hoàn tất và sử dụng liên kết
          </h5>
          <p className={cx("mainText")}>
            {" "}
            Sau khi đã sao chép <b>[ID]</b> được cung cấp, bạn có thể trở lại hệ thông đăng ký tổ hợp ở trang{" "}
            <Link to="/notification/generator">Tạo thông báo</Link> để nhập dữ liệu dán <b>[ID]</b> file cho bài thông báo.
          </p>
          <div className={cx("d-flex justify-content-center")}>
            <img
              src="https://res.cloudinary.com/dwoymvppw/image/upload/v1754464275/geturl-8_nfyksj.jpg"
              alt=""
              style={{ height: "10pc" }}
            />
          </div>
        </div>
      </div>
    </BoxRadius>
  );
}

export default NotiInfo;
