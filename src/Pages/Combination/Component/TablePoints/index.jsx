import classNames from "classnames/bind";
import style from "./TablePoints.module.scss";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const cx = classNames.bind(style);

function TablePoints({ valueStudent = {} }) {
  const [mathPoint, setMathPoint] = useState(0);
  const [literaturePoint, setLiteraturePoint] = useState(0);
  const [englishPoint, setEnglishPoint] = useState(0);
  return (
    <Table striped className={cx("wrapper")}>
      <thead>
        <tr>
          <th colSpan={4}>Điểm thi tuyển vào lớp 10</th>
          <th rowSpan={2}>Tổng điểm xét tuyển HL, RL 4 năm THCS</th>
          <th rowSpan={2}>Tổng điểm trúng tuyển</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Toán</td>
          <td>Văn</td>
          <td>T. Anh</td>
          <td>Tổng điểm 3 môn</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Form.Control
              required
              type="number"
              onChange={(e) => setMathPoint(Number(e.target.value))}
              min={0}
              max={10}
              step={0.1}
              name="mathPoint"
              defaultValue={valueStudent.mathPoint || mathPoint}
              className={cx("inp-man")}
            />
          </td>
          <td>
            <Form.Control
              required
              type="number"
              onChange={(e) => setLiteraturePoint(Number(e.target.value))}
              min={0}
              max={10}
              step={0.1}
              name="literaturePoint"
              defaultValue={valueStudent.literaturePoint || literaturePoint}
              className={cx("inp-man")}
            />
          </td>
          <td>
            <Form.Control
              required
              type="number"
              onChange={(e) => setEnglishPoint(Number(e.target.value))}
              min={0}
              max={10}
              step={0.1}
              name="englishPoint"
              defaultValue={valueStudent.englishPoint || englishPoint}
              className={cx("inp-man")}
            />
          </td>
          <td>
            <span className={cx("total-point")}>
              {(
                (Number(valueStudent.mathPoint) || mathPoint) +
                (Number(valueStudent.literaturePoint) || literaturePoint) +
                (Number(valueStudent.englishPoint) || englishPoint)
              ).toFixed(1)}
            </span>
          </td>
          <td>
            <Form.Control
              required
              type="number"
              min={1.75}
              max={10}
              step={0.25}
              name="conductPoint"
              defaultValue={valueStudent.conductPoint || 1.75}
              className={cx("inp-man")}
            />
          </td>
          <td>
            <Form.Control
              required
              type="number"
              name="admissionPoint"
              defaultValue={valueStudent.admissionPoint || 0}
              className={cx("inp-man")}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TablePoints;
