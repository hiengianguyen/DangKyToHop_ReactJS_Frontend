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

const cx = classNames.bind(style);

function BarDivideClass({ show = false}) {
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
            {classes &&
              classes.map((classItem, index) => (
                <Col xs={"auto"} key={index} style={{ width: "max-content" }}>
                  <DroppableClass id={classItem.id}>
                    <CardClass data={classItem} isDropped={show} />
                  </DroppableClass>
                </Col>
              ))}
          </Row>
          {isLoadingList && <Loading height="100%" position="absolute" color="rgb(244 244 244)" zIndex="9998" />}
        </div>
      </div>
    </CSSTransition>
  );
}

export default BarDivideClass;
