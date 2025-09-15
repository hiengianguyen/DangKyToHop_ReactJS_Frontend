import classNames from "classnames/bind";
import style from "./BtnActions.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Contexts/AuthContext";
import axios from "axios";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const cx = classNames.bind(style);

function BtnActions({ userId = "", disabled = false }) {
  const { auth } = useAuth();

  const handleReject = (userId) => {
    if (disabled) return console.log(123);
    axios.post("http://localhost:4001/combination/submited-reject/" + userId).then((res) => {
      alert(res.data.message);
    });
  };

  const handleApprove = (userId) => {
    if (disabled) return console.log(123);
    axios.post("http://localhost:4001/combination/submited-approve/" + userId).then((res) => {
      alert(res.data.message);
    });
  };
  return (
    <div>
      <Row className={cx("btnFeature", "mt-4")}>
        {auth?.user?.role === "student" ? (
          <>
            <Col xs={"auto"}>
              <Link to="/combination/submit-combination?step=2" className={cx("btnAction", "btn", "btn-secondary", { disabled: disabled })}>
                Chỉnh sửa
              </Link>
            </Col>
            <Col xs={"auto"}>
              <button type="button" id="btn-modal-delete" className={cx("btnAction", "btn", "btn-danger", { disabled: disabled })}>
                Xoá hồ sơ
              </button>
            </Col>
            <Col xs={"auto"}>
              <a
                href="/file/pdf/submited/{{submitedCombinationDetail.userId}}"
                className={cx("btnAction", "btn", "btn-info")}
                target="_blank"
              >
                Hồ sơ PDF
              </a>
            </Col>
          </>
        ) : (
          <>
            <Col xs={"auto"}>
              <a
                href="/file/pdf/submited/{{submitedCombinationDetail.userId}}"
                className={cx("btnAction", "btn", "btn-info")}
                target="_blank"
              >
                Hồ sơ PDF
              </a>
            </Col>
            <Col xs={"auto"}>
              {" "}
              <button
                className={cx("btnAction", "btn", "btn-danger", { disabled: disabled })}
                type="button"
                onClick={() => handleReject(userId)}
              >
                Không phê duyệt
              </button>
            </Col>
            <Col xs={"auto"}>
              <button
                className={cx("btnAction", "btn", "btn-primary", { disabled: disabled })}
                type="button"
                onClick={() => handleApprove(userId)}
              >
                Phê duyệt
              </button>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
}

export default BtnActions;
