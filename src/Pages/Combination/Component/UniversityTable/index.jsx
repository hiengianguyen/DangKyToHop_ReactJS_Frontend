import classNames from "classnames/bind";
import style from "./UniversityTable.module.scss";
import Table from "react-bootstrap/Table";

const cx = classNames.bind(style);

function UniversityTable() {
  return (
    <Table striped className={cx("wrapper")}>
      <thead>
        <tr>
          <th>Tổ hợp</th>
          <th>4 môn lựa chọn</th>
          <th>Tổ hợp phổ biến xét tuyển ĐH – CĐ</th>
          <th>Lĩnh vực ngành nghề phù hợp</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tổ hợp 1</td>
          <td>Vật lí, Hoá học, Sinh học, Tin học</td>
          <td>
            <div className="d-flex flex-column">
              <span>A00 (Toán – Lý – Hóa),</span>
              <span>A01 (Toán – Lý – Anh),...</span>
            </div>
          </td>
          <td>Công nghệ kỹ thuật, CNTT, Kỹ thuật điện – điện tử, Công nghiệp,...</td>
        </tr>
        <tr>
          <td>Tổ hợp 2</td>
          <td>Vật lí, Sinh học, Tin học, Công nghệ trồng trọt</td>

          <td>
            <div className="d-flex flex-column">
              <span>D01 (Toán – Văn – Anh),</span>
              <span>B08 (Toán – Sinh – Anh),...</span>
            </div>
          </td>
          <td>Công nghệ thực phẩm, Môi trường, Khoa học sức khỏe, Nông nghiệp công nghệ, Y tế cộng đồng,…</td>
        </tr>
        <tr>
          <td>Tổ hợp 3</td>
          <td>Hoá học, Sinh học, GDKTPL, Công nghệ trồng trọt</td>
          <td>
            <div className="d-flex flex-column">
              <span> B00 (Toán – Hóa – Sinh),</span>
              <span>B08 (Toán – Sinh – Anh),...</span>
            </div>
          </td>
          <td>Y – Dược, Công nghệ sinh học, Môi trường, Điều dưỡng, Nông nghiệp sạch,...</td>
        </tr>
        <tr>
          <td>Tổ hợp 4</td>
          <td>Vật lý, Hoá học, Địa lý, GDKTPL</td>
          <td>
            <div className="d-flex flex-column">
              <span>A00 (Toán – Lý – Hóa),</span>
              <span>D01 (Toán – Văn – Anh),...</span>
            </div>
          </td>
          <td>Công nghệ kỹ thuật, Quản lý tài nguyên, Kinh tế – Kỹ thuật môi trường, Sư phạm, Quản trị hành chính,…</td>
        </tr>
        <tr>
          <td>Tổ hợp 5</td>
          <td>Địa lý, GDKTPL, Tin học, Công nghệ trồng trọt</td>
          <td>
            <div className="d-flex flex-column">
              <span> C00 (Văn – Sử – Địa),</span>
              <span>C14 (Toán – Văn – GDKTPL),</span>
              <span> D01 (Toán – Văn – Anh),...</span>
            </div>
          </td>
          <td>Quản lý đất đai, Du lịch – Văn hóa, Hành chính công, Giáo dục công dân, Quản trị văn phòng,…</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default UniversityTable;
