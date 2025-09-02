import classNames from "classnames/bind";
import style from "./CombinationStep4R.module.scss";
import InputHadValue from "../../../../Component/InputHadValue";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/esm/Badge";
import { typeBadge } from "../../../../../../utils";

const cx = classNames.bind(style);

function CombinationStep4R({ valueStudent = {}, role = "student" }) {
  return (
    <div className={cx("card-body", "container shadow")} style={{ fontSize: "17px" }}>
      {role === "manager" && (
        <h3>
          Trạng thái:{" "}
          <Badge className="p-3 shadow" bg={typeBadge(valueStudent.status).color}>
            {typeBadge(valueStudent.status).title}
          </Badge>
        </h3>
      )}
      <div className={cx("content")}>
        <div className={cx("header")}>
          <div className={cx("first-slogan")}>
            <span>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</span>
            <span className={cx("second-line")}>Độc lập - Tự do - Hạnh phúc</span>
          </div>
        </div>
        <div className={cx("title-doc")}>
          <span>LÝ LỊCH HỌC SINH</span>
        </div>
        <div className="container">
          <Row>
            <Col xs={7}>
              <InputHadValue label="Họ và tên" value={valueStudent.fullName} />
            </Col>
            <Col>
              <InputHadValue label="Nam (Nữ)" value={valueStudent.gender} />
            </Col>
            <Col>
              <InputHadValue label="Dân tộc" value={valueStudent.nation} />
            </Col>
          </Row>
          <Row>
            <Col xs={"auto"}>
              <InputHadValue label="Ngày sinh" value={valueStudent.dayOfBirth} />
            </Col>
            <Col>
              <InputHadValue label="Nơi sinh" value={valueStudent.placeOfBirth} />
            </Col>
          </Row>
          <Row>
            <Col xs={"auto"} className="d-flex align-items-end">
              <span className={cx("place-label")}>Hộ khẩu thường trú:</span>
            </Col>
            <Col xs={5}>
              <InputHadValue label="Thôn/KP" value={valueStudent.village} />
            </Col>
            <Col xs={5}>
              <InputHadValue label="Xã/Phường" value={valueStudent.commune} />
            </Col>
            <Col>
              <InputHadValue label="Tỉnh/Thành Phố" value={valueStudent.city} />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <InputHadValue label="Họ và tên cha" value={valueStudent.nameDad} />
            </Col>
            <Col xs={4}>
              <InputHadValue label="Nghề nghiệp" value={valueStudent.jobDad} />
            </Col>
            <Col xs={4}>
              <InputHadValue label="SĐT" value={valueStudent.phoneDad} />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <InputHadValue label="Họ và tên mẹ" value={valueStudent.nameMom} />
            </Col>
            <Col xs={4}>
              <InputHadValue label="Nghề nghiệp" value={valueStudent.jobMom} />
            </Col>
            <Col xs={4}>
              <InputHadValue label="SĐT" value={valueStudent.phoneMom} />
            </Col>
          </Row>
          <span className={cx("student-type")}>
            - Là học sinh thuộc diện sau <i>(thuộc diện nào thì đánh dấu vào ô tương ứng)</i>
          </span>
          <Row className="fs-1">
            <Col>
              <InputHadValue label="Diện học sinh" value={(valueStudent.typeStudent || []).join(", ")} />
            </Col>
          </Row>
          <Row>
            <Col xs={"auto"}>
              <InputHadValue label="+ Vận động viên TT TDTT tỉnh/TP, môn" value={valueStudent.avchielementGroup} />
            </Col>
          </Row>
          <Row>
            <Col xs={"auto"}>
              <InputHadValue label="- Năng khiếu vượt trội" value={valueStudent.aptitude} />
            </Col>
          </Row>
          <Row>
            <Col xs={"auto"}>
              <InputHadValue label="- Diện mồ côi, hộ nghèo, hộ cận nghèo" value={valueStudent.priorityGroup} />
            </Col>
          </Row>
          <Row>
            <Col xs={"auto"}>
              <InputHadValue label="- Hoàn cảnh khó khăn" value={valueStudent.difficultSituation} />
            </Col>
          </Row>
          <Row>
            <Col>
              <span className={cx("health-status", "mt-2")}>- Tình trạng sức khỏe:</span>
            </Col>
            <Col>
              <InputHadValue label="+ Chiều cao (cm)" value={valueStudent.height} />
            </Col>
            <Col>
              <InputHadValue label="+ Cân nặng (kg)" value={valueStudent.weight} />
            </Col>
          </Row>
          <Row className="mt-4 fs-1">
            <Col>
              <InputHadValue label="+ Bệnh ngoài da" value={valueStudent.sick?.includes("Bệnh ngoài da") ? "Có" : "Không"} />
            </Col>
            <Col>
              <InputHadValue label="+ Bệnh tim mạch" value={valueStudent.sick?.includes("Bệnh tim mạch") ? "Có" : "Không"} />
            </Col>
            <Col>
              <InputHadValue label="+ Bệnh hô hấp" value={valueStudent.sick?.includes("Bệnh hô hấp") ? "Có" : "Không"} />
            </Col>
          </Row>
          <Row>
            <Col xs={"auto"}>
              <InputHadValue label="+ Diện khuyết tật" value={valueStudent.disability} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CombinationStep4R;
