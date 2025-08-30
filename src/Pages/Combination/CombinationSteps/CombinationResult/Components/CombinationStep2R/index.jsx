import classNames from "classnames/bind";
import style from "./CombinationStep2R.module.scss";
import InputHadValue from "../../../../Component/InputHadValue";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const cx = classNames.bind(style);

function CombinationStep2R({ valueStudent = {} }) {
  return (
    <div className={cx("card-body", "container")} style={{ fontSize: "17px" }}>
      <div className={cx("content")}>
        <div className={cx("header")}>
          <div className={cx("first-slogan")}>
            <span>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</span>
            <span className={cx("second-line")}>Độc lập - Tự do - Hạnh phúc</span>
          </div>
          <div className={cx("second-slogan")}>
            <span>ĐƠN XIN NHẬP HỌC LỚP 10</span>
            <span className={cx("second-line")}>Năm học 2025 - 2026</span>
          </div>
          <div className={cx("choose-avatar-box")}>
            <span className={cx("title-avatar")}>Ảnh thẻ:</span>
            {valueStudent.avatar && <img src={valueStudent.avatar} className={cx("img-result")} alt="avatar" />}
          </div>
          <div className={cx("title-doc")}>
            <span>Kính gửi: Hiệu trưởng Trường THPT Duy Tân</span>
          </div>
        </div>
        <Row>
          <Col xs={8}>
            <InputHadValue label="Em tên là" value={valueStudent.fullName} />
          </Col>
          <Col>
            <InputHadValue label="Nam (Nữ)" value={valueStudent.gender} />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputHadValue label="Sinh ngày" value={valueStudent.dayOfBirth} />
          </Col>
          <Col>
            <InputHadValue label="Dân tộc" value={valueStudent.nation} />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputHadValue label="Địa chỉ thường chú" value={`KP ${valueStudent.village}, ${valueStudent.commune}, ${valueStudent.city}`} />
          </Col>
          <Col>
            <InputHadValue label="Số điện thoại" value={valueStudent.phone} />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputHadValue label="Học sinh lớp 9 Trường THCS" value={valueStudent.secondarySchool} />
          </Col>
          <Col>
            <InputHadValue label="Xã/Phường" value={valueStudent.secondarySchoolDistrict} />
          </Col>
        </Row>
        <Col>
          <InputHadValue label="Năng khiếu vượt trội (môn/lĩnh vực – nếu có)" value={valueStudent.aptitude} />
        </Col>
        <Col>
          <InputHadValue label="Nguyện vọng được vào đội tuyển học sinh giỏi môn (nếu có)" value={valueStudent.aspirationSubject} />
        </Col>
        <Row>
          <Col xs={"auto"}>
            <InputHadValue label="Thành tích thi HSG năm lớp 9 (nếu có) môn" value={valueStudent.goodSubject} />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputHadValue label="đạt giải cấp huyện/TP: giải" value={valueStudent.goodSubjectDistrict} />
          </Col>
          <Col>
            <InputHadValue label="đạt giải cấp tỉnh: giải" value={valueStudent.goodSubjectProvince} />
          </Col>
        </Row>
        <Col className="d-flex align-items-end mt-4">
          <span className={cx("avchielement-label")}>
            Đạt giải TDTT, VN, UPU, KHKT,… do Sở GDĐT tổ chức (hoặc phối hợp tổ chức)(nếu có):{" "}
          </span>
        </Col>
        <Row>
          <Col xs={"auto"}>
            <InputHadValue label="giải" value={valueStudent.avchielementLevel} />
          </Col>
          <Col>
            <InputHadValue label="lĩnh vực" value={valueStudent.avchielementGroup} />
          </Col>
        </Row>
        <p className={cx("quote")}>
          Em làm đơn này xin được nhập học lớp 10 Trường THPT Duy Tân năm học 2025 -2026 và cam kết thực hiện nghiêm túc nhiệm vụ của học
          sinh, chấp hành tốt nội quy nhà trường.
        </p>
      </div>
    </div>
  );
}

export default CombinationStep2R;
