import classNames from "classnames/bind";
import style from "./CombinationStep3R.module.scss";
import InputHadValue from "../../../../Component/InputHadValue";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const cx = classNames.bind(style);

function CombinationStep3R({ valueStudent = {} }) {
  return (
    <div className={cx("card-body", "container")}>
      <div className={cx("content")}>
        <div className={cx("header", "second")}>
          <div className={cx("first-slogan")}>
            <span>SỞ GDĐT THÀNH PHỐ ĐÀ NẴNG</span>
            <span className={cx("second-line")}>TRƯỜNG THPT DUY TÂN</span>
          </div>
          <div className={cx("second-slogan")}>
            <span>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</span>
            <span className={cx("second-line")}>Độc lập - Tự do - Hạnh phúc</span>
          </div>
        </div>
        <div className={cx("title-doc")}>
          <span>ĐƠN ĐĂNG KÝ</span>
          <span>Chọn tổ hợp môn học lớp 10, năm học 2025 - 2026</span>
        </div>
        <div className="container">
          <Row>
            <Col xs={8}>
              <InputHadValue label="Họ và tên học sinh" value={valueStudent.fullName} />
            </Col>
            <Col>
              <InputHadValue label="STT ở DS trúng tuyển" value={valueStudent.numberMatriculation} />
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
              <InputHadValue label="Họ và tên phụ huynh" value={valueStudent.nameDad || valueStudent.nameMom} />
            </Col>
            <Col>
              <InputHadValue label="số ĐTDD" value={valueStudent.phone} />
            </Col>
          </Row>
          {/* Bảng điểm và tổ hợp có thể show dạng bảng hoặc từng trường nếu muốn */}
          <div className={cx("info-box")}>
            <span className={cx("title")}>I. THÔNG TIN CHUNG</span>
            <ol>
              <li>
                Môn học và các hoạt động giáo dục bắt buộc: Toán, Ngữ văn, Tiếng Anh, Lịch sử, GDTC, GDQP-AN, Giáo dục địa phương, Hoạt động
                trải nghiệm – hướng nghiệp.
              </li>
              <li>Môn học lựa chọn và chuyên đề học tập lựa chọn</li>
              <ul>
                <li>
                  Chọn đủ <b>04</b> môn trong số 07 môn học sau: Vật lý, Hóa học, Sinh học (nhóm KHTN), Địa lý, Giáo dục kinh tế và pháp
                  luật (GDKTPL) (nhóm KHXH), Công nghệ, Tin học.
                </li>
                <li>Cụm 03 chuyên đề lựa chọn kèm theo tổ hợp môn học lựa chọn.</li>
                <li>01 môn thể thao trong số các môn: Bóng đá, Bóng chuyền, Đá cầu.</li>
              </ul>
            </ol>
            <span className={cx("title")}>II. TỔ HỢP LỰA CHỌN CỤ THỂ</span>
            <Row>
              <Col xs={"auto"}>
                <InputHadValue label="- Nguyện vọng 1" value={valueStudent.combination1} />
              </Col>
            </Row>
            <Row>
              <Col xs={"auto"}>
                <InputHadValue label="- Nguyện vọng 2" value={valueStudent.combination2} />
              </Col>
            </Row>
            <Row>
              <Col xs={"auto"}>
                <InputHadValue label="- Môn thể thao" value={valueStudent.sport} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CombinationStep3R;
