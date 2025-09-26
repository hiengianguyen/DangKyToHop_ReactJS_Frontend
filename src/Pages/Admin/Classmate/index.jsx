import classNames from "classnames/bind";
import style from "./Classmate.module.scss";
import Container from "react-bootstrap/esm/Container";
import CardClass from "./CardClass";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AddClassCard from "./AddClassCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ModalAddClass from "./CardClass/ModalAddClass";
const cx = classNames.bind(style);

function Classmate() {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

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
  }, [navigator]);

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Indigo Corner Deep Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #c7d2fe, transparent),
        radial-gradient(circle 600px at 100% 200px, #c7d2fe, transparent)
      `
        }}
      >
        <div className={cx("wrapper")}>
          <div className={cx("title-box")}>
            <h2>🏫 Quản lý các lớp học</h2>
            <p>Trang này cho phép theo dõi và quản lý thông tin các lớp:</p>{" "}
            <p> số lượng học sinh, danh sách thành viên, và các thao tác phân chia – điều chỉnh lớp học.</p>
          </div>

          <Container className={cx("pb-4", "list-class")}>
            <Row className="gap-4 justify-content-center">
              <Col xs={"auto"}>
                <AddClassCard onClick={() => setShowModal(true)} />
              </Col>
              {classes.map((item, index) => (
                <Col xs={"auto"} key={index}>
                  <CardClass data={item} setUpdateModal={setUpdateModal} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <ModalAddClass
          show={showModal || updateModal?.bol}
          setShow={setShowModal}
          setUpdateModal={setUpdateModal}
          data={updateModal?.id ? classes.find((item) => item.id === updateModal.id) : undefined}
          isUpdate={updateModal?.bol}
        />
      </div>
    </div>
  );
}

export default Classmate;
