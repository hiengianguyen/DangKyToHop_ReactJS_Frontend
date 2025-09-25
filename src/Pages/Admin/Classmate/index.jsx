import classNames from "classnames/bind";
import style from "./Classmate.module.scss";
import Container from "react-bootstrap/esm/Container";
import CardClass from "./CardClass";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/Button";
import AddClassCard from "./AddClassCard";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Loading from "../../../Components/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const cx = classNames.bind(style);

const priorityOptions = [
  { title: "Tổ hợp 1", value: "Tổ hợp 1" },
  { title: "Tổ hợp 2", value: "Tổ hợp 2" },
  { title: "Tổ hợp 3", value: "Tổ hợp 3" },
  { title: "Tổ hợp 4", value: "Tổ hợp 4" },
  { title: "Tổ hợp 5", value: "Tổ hợp 5" }
];

function Classmate() {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [className, setClassName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [combination1, setCombination1] = useState("");
  const [combination2, setCombination2] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4001/ad/classes").then((res) => {
      const data = res.data;
      if (data.redirect) {
        navigator(data.redirect);
        return;
      }

      setClasses(data.classes);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!className.trim() || !teacher.trim() || !combination1 || !combination2) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    if (combination1 === combination2) {
      setError("Hai tổ hợp ưu tiên không được trùng nhau.");
      return;
    }
    setError("");
    setIsValidated(true);
    // Xử lý lưu dữ liệu ở đây
    setIsLoadingModal(true);
    const data = {
      name: className,
      teacher: teacher,
      combination1: combination1,
      combination2: combination2
    };
    toast
      .promise(axios.post("http://localhost:4001/ad/classes/create", data), {
        loading: "Đang tạo...",
        success: <b>Tạo thành công!</b>,
        error: <b>Tạo thất bại.</b>
      })
      .finally(() => {
        setIsLoadingModal(false);
        setShowModal(false);
        navigator(0);
      });
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("title-box")}>
          <h2>🏫 Quản lý các lớp học</h2>
          <p>Trang này cho phép theo dõi và quản lý thông tin các lớp:</p>{" "}
          <p> số lượng học sinh, danh sách thành viên, và các thao tác phân chia – điều chỉnh lớp học.</p>
        </div>

        <Container className={cx("mb-4", "list-class")}>
          <Row className="gap-4">
            <Col xs={"auto"}>
              <AddClassCard onClick={() => setShowModal(true)} />
            </Col>
            {classes.map((item, index) => (
              <Col xs={"auto"} key={index}>
                <CardClass data={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
        <Form onSubmit={handleSubmit} validated={isValidated}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm lớp học</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2 className="px-4 mt-4 text-center">Nhập đầy đủ thông tin để tạo lớp học mới và lưu vào hệ thống quản lý.</h2>
          </Modal.Body>
          <Modal.Body className="position-relative p-4">
            <Form.Group className="mb-3">
              <Form.Label>Tên lớp học</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên lớp học"
                className={cx("v-inp")}
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Giáo viên chủ nhiệm</Form.Label>
              <Form.Control
                type="text"
                className={cx("text-capitalize", "v-inp")}
                placeholder="Nhập tên giáo viên chủ nhiệm"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tổ hợp ưu tiên 1</Form.Label>
              <Form.Select className={cx("v-inp")} value={combination1} onChange={(e) => setCombination1(e.target.value)}>
                <option value="">Chọn tổ hợp ưu tiên</option>
                {priorityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tổ hợp ưu tiên 2</Form.Label>
              <Form.Select className={cx("v-inp")} value={combination2} onChange={(e) => setCombination2(e.target.value)}>
                <option value="">Chọn tổ hợp ưu tiên</option>
                {priorityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
            {isLoadingModal && <Loading height="100%" position="absolute" color="rgb(244 244 244)" zIndex="9998" />}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Huỷ
            </Button>
            <Button variant="primary" type="submit">
              Tạo lớp
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Classmate;
