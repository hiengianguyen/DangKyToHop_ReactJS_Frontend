import classNames from "classnames/bind";
import style from "./CombinationStep3.module.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import InputHadValue from "../../Component/InputHadValue";
import Select from "../../Component/Select";
import TablePoints from "../../Component/TablePoints";
import CombinationTable from "../../Component/CombinationTable";
import UniversityTable from "../../Component/UniversityTable";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(style);

const combinations = [
  {
    title: "Tổ hợp 1",
    value: "Tổ hợp 1"
  },
  {
    title: "Tổ hợp 2",
    value: "Tổ hợp 2"
  },
  {
    title: "Tổ hợp 3",
    value: "Tổ hợp 3"
  },
  {
    title: "Tổ hợp 4",
    value: "Tổ hợp 4"
  },
  {
    title: "Tổ hợp 5",
    value: "Tổ hợp 5"
  }
];

function CombinationStep3({ setCurrPage = () => {}, valueStudent = {}, setValueStudent = () => {} }) {
  const formRef = useRef();
  const [formElememt, setFormElememt] = useState();
  const [combination1, setCombination1] = useState(combinations);
  const [combination2, setCombination2] = useState(combinations);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setFormElememt(formRef.current);
  }, []);

  useEffect(() => {
    document.title = "Đăng ký tổ hợp | Chọn tổ hợp";
  }, []);

  const handleChangeCombination = (value, combination) => {
    const mainCombinations = combinations;
    if (combination === 1) {
      setCombination2(() => mainCombinations.filter((item) => item.value !== value));
    } else {
      setCombination1(() => mainCombinations.filter((item) => item.value !== value));
    }
  };

  const handleSubmit = () => {
    if (formElememt.checkValidity()) {
      const formData = new FormData(formElememt);
      const data = Object.fromEntries(formData.entries());
      setValueStudent((prev) => ({ ...prev, ...data }));
      setCurrPage(4);
    }
    setValidated(true);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title-step")}>
        <h4>Chọn tổ hợp</h4>
      </div>

      <div className="d-flex justify-content-end">
        <Button primary="true" onClick={() => setCurrPage(2)} className={cx("button", "fs-3", "px-4", "me-3")}>
          Trở lại
        </Button>
        <Button primary="true" onClick={handleSubmit} className={cx("button", "fs-3", "px-4")}>
          Tiếp tục
        </Button>
      </div>

      <div className={cx("card-body", "container shadow")} style={{ fontSize: "17px" }}>
        <div className={cx("content", "first")}>
          <div className={cx("header", "first")}>
            <span>MỘT SỐ LƯU Ý KHI ĐĂNG KÝ CHỌN TỔ HỢP MÔN HỌC</span>
          </div>

          <ol className={cx("list-info")}>
            <li>
              Căn cứ lựa chọn môn học: phù hợp với năng lực học tập, sở thích, định hướng thi tốt nghiệp, xét tuyển đại học và nghề nghiệp
              trong tương lai.
            </li>
            <li> Môn đã chọn sẽ học cả 3 năm học, xác định là không thay đổi.</li>
            <li>
              Đăng ký tối đa 02 nguyện vọng. Nhà trường ưu tiên xếp lớp cho nguyện vọng 1 trước; trường hợp cần thiết sẽ xếp theo nguyện
              vọng 2 để đảm bảo số lớp và phù hợp với tình hình đội ngũ, cơ sở vật chất, trang thiết bị dạy học hiện có.
            </li>
            <li>
              Nhà trường ưu tiên dạy học môn thể thao được phụ huynh và học sinh lựa chọn, tuy nhiên trong trường hợp cần thiết sẽ tổ chức
              dạy học môn khác trong số các môn còn lại để đảm bảo biên chế lớp, phù hợp với tình hình đội ngũ, cơ sở vật chất, trang thiết
              bị dạy học hiện có. Học sinh có năng khiếu ở môn thể thao khác (như võ Karate, võ cổ truyền,… có thể tham gia câu lạc bộ năng
              khiếu).
            </li>
            <li> Nhà trường sẽ tổ chức họp phụ huynh và học sinh để tư vấn, hướng dẫn; do vậy phụ huynh đăng ký sau khi được tư vấn.</li>
          </ol>

          <div className={cx("title-doc")}>
            <span>ĐỊNH HƯỚNG THI ĐẠI HỌC VÀ CHỌN NGHỀ</span>
            <span>(Kết hợp môn học bắt buộc và môn học lựa chọn)</span>
          </div>

          <UniversityTable />

          <div className="my-4 text-center">
            <i className="fs-3">
              <b>Ghi chú:</b> còn rất nhiều tổ hợp xét tuyển ĐH và ngành nghề khác gắn với môn học bắt buộc và môn học lựa chọn, bảng trên
              chỉ có tính chất tham khảo, định hướng.
            </i>
          </div>
        </div>
      </div>

      <Form noValidate validated={validated} ref={formRef} onSubmit={handleSubmit}>
        <div className={cx("card-body", "container")} style={{ fontSize: "17px" }}>
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

              <div className={cx("table-point", "mt-4")}>
                <span className="mb-4">Điểm thi tuyển vào lớp 10 và kết quả học tập, rèn luyện 4 năm THCS của học sinh</span>
                <TablePoints valueStudent={valueStudent} />
              </div>

              <div className={cx("info-box")}>
                <span className={cx("title")}>I. THÔNG TIN CHUNG</span>

                <ol>
                  <li>Môn học và các hoạt động giáo dục bắt buộc:</li>
                  <p> Toán, Ngữ văn, Tiếng Anh, Lịch sử, GDTC, GDQP-AN, Giáo dục địa phương, Hoạt động trải nghiệm – hướng nghiệp.</p>
                  <li>Môn học lựa chọn và chuyên đề học tập lựa chọn</li>
                  <ul>
                    <li>
                      Chọn đủ <b>04</b> môn trong số 07 môn học sau: Vật lý, Hóa học, Sinh học (nhóm KHTN), Địa lý, Giáo dục kinh tế và pháp
                      luật (viết tắt là GDKTPL) (nhóm KHXH), Công nghệ, Tin học.
                    </li>
                    <li>Cụm 03 chuyên đề lựa chọn kèm theo tổ hợp môn học lựa chọn.</li>
                    <li>01 môn thể thao trong số các môn: Bóng đá, Bóng chuyền, Đá cầu.</li>
                  </ul>
                </ol>

                <span className={cx("title")}>II. TỔ HỢP LỰA CHỌN CỤ THỂ</span>
                <CombinationTable />
                <div className={cx("choose-combination-box")}>
                  <Row>
                    <Col>
                      <Select
                        label="- Nguyện vọng 1: tổ hợp số"
                        name="combination1"
                        valueNoti="Tổ hợp"
                        selected={valueStudent.combination1}
                        onChange={(e) => handleChangeCombination(e.target.value, 1)}
                        opts={combination1}
                      />
                    </Col>
                    <Col>
                      <Select
                        label="- Nguyện vọng 2: tổ hợp số"
                        name="combination2"
                        valueNoti="Tổ hợp"
                        selected={valueStudent.combination2}
                        onChange={(e) => handleChangeCombination(e.target.value, 2)}
                        opts={combination2}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={"auto"}>
                      <Select
                        label="- Môn thể thao"
                        name="sport"
                        valueNoti="Môn thể thao"
                        selected={valueStudent.sport}
                        opts={[
                          { title: "Bóng đá", value: "Bóng đá" },
                          { title: "Bóng chuyền", value: "Bóng chuyền" },
                          { title: "Đá Cầu", value: "Đá Cầu" }
                        ]}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default CombinationStep3;
