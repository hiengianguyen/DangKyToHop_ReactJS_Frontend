import classNames from "classnames/bind";
import style from "./CombinationStep3R.module.scss";
import InputHadValue from "../../../../Component/InputHadValue";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CombinationTable from "../../../../Component/CombinationTable";

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
              <InputHadValue label="SĐT" value={valueStudent.phoneDad} />
            </Col>
          </Row>
          {/* Bảng điểm và tổ hợp có thể show dạng bảng hoặc từng trường nếu muốn */}
          <div className={cx("info-box", "mt-4")}>
            <span className={cx("title")}>I. THÔNG TIN TỔ HỢP</span>
            <CombinationTable />
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
