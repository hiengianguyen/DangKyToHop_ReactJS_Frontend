import classNames from "classnames/bind";
import style from "./CombinationStep4.module.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import InputHadValue from "../../Component/InputHadValue";
import Form from "react-bootstrap/Form";
import InputBorder from "../../Component/InputBorder";
import Button from "react-bootstrap/esm/Button";
import { useRef, useState, useEffect } from "react";

const cx = classNames.bind(style);

function CombinationStep4({ setCurrPage = () => {}, setValueStudent = () => {}, valueStudent = {} }) {
  const [validated, setValidated] = useState(false);
  const [formElement, setFormElement] = useState();
  const formRef = useRef();

  useEffect(() => {
    setFormElement(formRef.current);
  }, []);

  useEffect(() => {
    document.title = "Đăng ký tổ hợp | Lý lịch học sinh";
  }, []);

  const handleSubmit = (form) => {
    if (!form) return;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    data.sick = formData.getAll("sick");
    data.typeStudent = formData.getAll("typeStudent");

    setValueStudent((prev) => ({ ...prev, ...data }));
    setValidated(true);
    setCurrPage(5);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title-step")}>
        <h4>Lý lịch học sinh</h4>
      </div>

      <div className="d-flex justify-content-end">
        <Button primary="true" onClick={() => setCurrPage(3)} className={cx("button", "fs-3", "px-4", "me-3")}>
          Trở lại
        </Button>
        <Button primary="true" onClick={() => handleSubmit(formElement)} className={cx("button", "fs-3", "px-4")}>
          Tiếp tục
        </Button>
      </div>

      <div className={cx("card-body", "container shadow")} style={{ fontSize: "17px" }}>
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

          <Form validated={validated} ref={formRef} onSubmit={handleSubmit}>
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
                  <Form.Check
                    label="Con liệt sĩ"
                    value={"Con liệt sĩ"}
                    checked={valueStudent?.typeStudent?.includes("Con liệt sĩ")}
                    type="checkbox"
                    required={false}
                    name="typeStudent"
                  />
                </Col>
                <Col>
                  <Form.Check
                    label="Con thương binh, bệnh binh từ 81% trở lên"
                    value={"Con thương binh, bệnh binh từ 81% trở lên"}
                    checked={valueStudent?.typeStudent?.includes("Con thương binh, bệnh binh từ 81% trở lên")}
                    type="checkbox"
                    required={false}
                    name="typeStudent"
                  />
                </Col>
              </Row>
              <Row className="fs-1">
                <Col>
                  <Form.Check
                    label="Con dân tộc thiểu số"
                    value={"Con dân tộc thiểu số"}
                    checked={valueStudent?.typeStudent?.includes("Con dân tộc thiểu số")}
                    type="checkbox"
                    required={false}
                    name="typeStudent"
                  />
                </Col>
                <Col>
                  <Form.Check
                    label="Con thương binh, bệnh binh dưới 81%"
                    value={"Con thương binh, bệnh binh dưới 81%"}
                    checked={valueStudent?.typeStudent?.includes("Con thương binh, bệnh binh dưới 81%")}
                    type="checkbox"
                    required={false}
                    name="typeStudent"
                  />
                </Col>
              </Row>
              <Row className="fs-1">
                <Col>
                  <Form.Check
                    label="Con Anh hùng LLVT"
                    value={"Con Anh hùng LLVT"}
                    checked={valueStudent?.typeStudent?.includes("Con Anh hùng LLVT")}
                    type="checkbox"
                    required={false}
                    name="typeStudent"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={"auto"}>
                  <InputHadValue label="+ Vận động viên TT TDTT tỉnh/TP (nếu có), môn" value={valueStudent.avchielementGroup} />
                </Col>
              </Row>

              <Row>
                <Col xs={"auto"}>
                  <InputHadValue label="- Năng khiếu vượt trội (môn/lĩnh vực – nếu có)" value={valueStudent.aptitude} />
                </Col>
              </Row>

              <Row>
                <Col xs={"auto"}>
                  <InputBorder
                    label="- Diện mồ côi, hộ nghèo, hộ cận nghèo (nếu có)"
                    nonRequired={true}
                    name="priorityGroup"
                    defaultValue={valueStudent.priorityGroup}
                  />
                </Col>
              </Row>

              <Row>
                <Col xs={"auto"}>
                  <InputBorder
                    label="- Hoàn cảnh khó khăn (nếu có)"
                    nonRequired={true}
                    name="difficultSituation"
                    defaultValue={valueStudent.difficultSituation}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <span className={cx("health-status", "mt-2")}>- Tình trạng sức khỏe:</span>
                </Col>
                <Col>
                  <InputBorder label="+ Chiều cao (cm)" type="number" name="height" defaultValue={valueStudent.height} />
                </Col>
                <Col>
                  <InputBorder label="+ Cân nặng (kg)" type="number" name="weight" defaultValue={valueStudent.weight} />
                </Col>
              </Row>

              <Row className="mt-4 fs-1">
                <Col xs={"auto"}>+ </Col>
                <Col>
                  <Form.Check
                    label="Bệnh ngoài da"
                    checked={valueStudent?.sick?.includes("Bệnh ngoài da")}
                    value={"Bệnh ngoài da"}
                    type="checkbox"
                    required={false}
                    name="sick"
                  />
                </Col>
                <Col>
                  <Form.Check
                    label="Bệnh tim mạch"
                    checked={valueStudent?.sick?.includes("Bệnh tim mạch")}
                    value={"Bệnh tim mạch"}
                    type="checkbox"
                    required={false}
                    name="sick"
                  />
                </Col>
                <Col>
                  <Form.Check
                    label="Bệnh hô hấp"
                    checked={valueStudent?.sick?.includes("Bệnh hô hấp")}
                    value={"Bệnh hô hấp"}
                    type="checkbox"
                    required={false}
                    name="sick"
                  />
                </Col>
              </Row>

              <Row>
                <Col xs={"auto"}>
                  <InputBorder
                    label="+ Diện khuyết tật (nếu có)"
                    nonRequired={true}
                    name="disability"
                    defaultValue={valueStudent.disability}
                  />
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CombinationStep4;
