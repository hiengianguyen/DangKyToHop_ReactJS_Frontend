import classNames from "classnames/bind";
import style from "./BarDivideClass.module.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import CardClass from "../../../Classmate/CardClass";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import DroppableClass from "../../../../../Components/DroppableClass";
import { CSSTransition } from "react-transition-group";
import Loading from "../../../../../Components/Loading";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function BarDivideClass({ show = false }) {
  const [classes, setClasses] = useState([]);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const nodeRef = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:4001/ad/classes")
      .then((res) => {
        const data = res.data;
        if (data.redirect) {
          navigator(data.redirect);
          return;
        }
        setClasses(data.classes);
      })
      .finally(() => setIsLoadingList(false));
  }, []);
  return (
    <CSSTransition key={"out"} in={show} timeout={400} classNames="growfade" unmountOnExit>
      <div className={cx("classmate", "shadow")} ref={nodeRef}>
        <div className={cx("title")}>
          <h2>Phần lớp học:</h2>
          <p>Nơi cần thả thẻ học sinh để quyết định lớp học cho học sinh.</p>
        </div>
        <div className={cx("body", "position-relative")}>
          <Row className="gap-4">
            {classes.length ? (
              classes.map((classItem, index) => (
                <Col xs={"auto"} key={index} style={{ width: "max-content" }}>
                  <DroppableClass id={classItem.id}>
                    <CardClass data={classItem} isDropped={show} />
                  </DroppableClass>
                </Col>
              ))
            ) : (
              <div className="d-flex flex-column align-items-center">
                <img src="/empty-folder.png" alt="" style={{ height: "10pc", width: "10pc", pointerEvents: "none", userSelect: "none" }} />
                <div className="d-flex text-center flex-column">
                  <h3>Không có lớp học</h3>
                  <i className="text-secondary">Hiệi tại chưa có lớp học trong hàng đợi</i>
                  <Link to="/ad/classmate" className="text-primary">
                    Quản lí lớp học
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </Link>
                </div>
              </div>
            )}
          </Row>
          {isLoadingList && <Loading height="100%" position="absolute" color="rgb(244 244 244)" zIndex="9998" />}
        </div>
      </div>
    </CSSTransition>
  );
}

export default BarDivideClass;
