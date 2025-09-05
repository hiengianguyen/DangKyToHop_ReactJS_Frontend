import classNames from "classnames/bind";
import style from "./CombinationTable.module.scss";
import Table from "react-bootstrap/esm/Table";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../../../Components/Loading";

const cx = classNames.bind(style);

function CombinationTable() {
  const [combinations, setCombinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4001/combination/table")
      .then((axiosData) => {
        if (axiosData.data.isSuccess) {
          setCombinations(axiosData.data.combinations);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Table striped className={cx("wrapper")}>
      {isLoading && <Loading title="Đang tải các tổ hợp" />}
      <thead>
        <tr>
          <th>Tổ hợp</th>
          <th>Số lớp dự kiến</th>
          <th>4 môn lựa chọn</th>
          <th>3 chuyên đề lựa chọn</th>
          <th>Môn thể thao</th>
        </tr>
      </thead>
      <tbody>
        {combinations &&
          combinations.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.classesCount}</td>
              <td>{item.optionalSubjects.join(", ")}</td>
              <td>{item.compulsorySubjects.join(", ")}</td>
              <td>Bóng đá, Bóng chuyền, Đá cầu.</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default CombinationTable;
