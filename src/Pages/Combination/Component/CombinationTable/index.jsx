import classNames from "classnames/bind";
import style from "./CombinationTable.module.scss";
import Table from "react-bootstrap/esm/Table";

const cx = classNames.bind(style);

function CombinationTable() {
  return (
    <Table striped className={cx("wrapper")}>
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
        <tr>
          <td>Tổ hợp 1</td>
          <td>1</td>
          <td>Vật lý, Hóa học, Sinh học, Tin học</td>
          <td>Toán, Lý, Hóa</td>
          <td>Bóng đá, Bóng chuyền, Đá cầu.</td>
        </tr>
        <tr>
          <td>Tổ hợp 1</td>
          <td>1</td>
          <td>Vật lý, Hóa học, Sinh học, Tin học</td>
          <td>Toán, Lý, Hóa</td>
          <td>Bóng đá, Bóng chuyền, Đá cầu.</td>
        </tr>
        <tr>
          <td>Tổ hợp 1</td>
          <td>1</td>
          <td>Vật lý, Hóa học, Sinh học, Tin học</td>
          <td>Toán, Lý, Hóa</td>
          <td>Bóng đá, Bóng chuyền, Đá cầu.</td>
        </tr>
        <tr>
          <td>Tổ hợp 1</td>
          <td>1</td>
          <td>Vật lý, Hóa học, Sinh học, Tin học</td>
          <td>Toán, Lý, Hóa</td>
          <td>Bóng đá, Bóng chuyền, Đá cầu.</td>
        </tr>
        <tr>
          <td>Tổ hợp 1</td>
          <td>1</td>
          <td>Vật lý, Hóa học, Sinh học, Tin học</td>
          <td>Toán, Lý, Hóa</td>
          <td>Bóng đá, Bóng chuyền, Đá cầu.</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CombinationTable;
