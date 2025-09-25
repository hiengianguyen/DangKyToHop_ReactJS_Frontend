import classNames from "classnames/bind";
import style from "./BarDivideClass.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import CardClass from "../../../Classmate/CardClass";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import DroppableClass from "../../../../../Components/DroppableClass";

const cx = classNames.bind(style);

function BarDivideClass({ show = false }) {
  const [classes, setClasses] = useState([]);

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
  return (
    <div className={cx("classmate", { show: show })}>
      <div className={cx("title")}>
        <h2>Phần lớp học:</h2>
        <p>Nơi cần thả thẻ học sinh để quyết định lớp học cho học sinh.</p>
      </div>
      <div className={cx("body")}>
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
      </div>
    </div>
  );
}

export default BarDivideClass;
