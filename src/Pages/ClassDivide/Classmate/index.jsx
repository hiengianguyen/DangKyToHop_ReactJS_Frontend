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
import ModalDeleteClass from "./CardClass/ModalDeleteClass";
import ParrtenBg from "../../../Components/ParrtenBg";

const cx = classNames.bind(style);

function Classmate() {
  const [dataClassesPage, setDataClassesPage] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState({ bol: false });
  const [updateModal, setUpdateModal] = useState(false);

  const navigator = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4001/ad/classes").then((res) => {
      const data = res.data;
      if (data.redirect) {
        navigator(data.redirect);
        return;
      }
      setDataClassesPage(data);
    });
  }, [navigator]);

  return (
    <ParrtenBg>
      <div className={cx("wrapper")}>
        <div className={cx("title-box")}>
          <h2 className="fs-2 text-center text-gray-800 fw-bolder mb-4">🏫 Quản lý các lớp học</h2>
          <p className="fs-3 text-center text-gray-600 fw-medium">Trang này cho phép theo dõi và quản lý thông tin các lớp:</p>
          <p className="fs-3 text-center text-gray-600 fw-medium">
            số lượng học sinh, danh sách thành viên, và các thao tác phân chia – điều chỉnh lớp học.
          </p>
        </div>

        <Container className={cx("pb-4", "list-class")}>
          <Row className="gap-4 justify-content-center">
            <Col xs={"auto"}>
              <AddClassCard onClick={() => setShowModal(true)} />
            </Col>
            {dataClassesPage?.classes?.map((item, index) => (
              <Col xs={"auto"} key={index}>
                <CardClass
                  data={item}
                  setUpdateModal={setUpdateModal}
                  setShowDeleteModal={setShowDeleteModal}
                  studentCount={dataClassesPage.countStudentInClass[item.id] || 0}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <ModalAddClass
          show={showModal || updateModal?.bol}
          setShow={setShowModal}
          setUpdateModal={setUpdateModal}
          data={updateModal?.id ? dataClassesPage.classes.find((item) => item.id === updateModal.id) : undefined}
          isUpdate={updateModal?.bol}
          setDataClassesPage={setDataClassesPage}
        />
        <ModalDeleteClass
          show={showDeleteModal.bol}
          setShowDeleteModal={setShowDeleteModal}
          setClasses={setDataClassesPage}
          classInfo={showDeleteModal.info}
        />
      </div>
    </ParrtenBg>
  );
}

export default Classmate;
