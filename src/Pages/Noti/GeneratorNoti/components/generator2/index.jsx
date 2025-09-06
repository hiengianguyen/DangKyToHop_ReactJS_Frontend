import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classNames from "classnames/bind";
import style from "./generator2.module.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const cx = classNames.bind(style);

function Generator2({ show = false, data = {}, btnText = "Tạo thông báo", isUpdate = false }) {
  const [title, setTitle] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [error, setError] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    if (data === undefined || JSON.stringify(data) === "{}") return;

    setTitle(data.title);
    setFileUrl(data.fileUrl);
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length < 10 || title.length > 130) {
      setError("Tiêu đề phải từ 10 đến 130 ký tự.");
      return;
    }
    if (!fileUrl) {
      setError("Đường dẫn file thông báo là bắt buộc.");
      return;
    }
    setError("");
    const dataPost = { title, fileUrl };
    axios
      .post(
        isUpdate ? "http://localhost:4001/notification/update-noti/" + data.id : "http://localhost:4001/notification/create-noti/",
        dataPost
      )
      .then((axiosData) => {
        alert(axiosData.data.message);
        return axiosData.data.id;
      })
      .then((id) => navigator("/notifications/" + id));
  };

  return (
    <div className={cx("boxSubmit2")} style={{ display: show ? "block" : "none" }}>
      <Form className={cx("createNotiForm")} onSubmit={handleSubmit}>
        <Form.Group className={cx("formGroup")}>
          <Form.Label htmlFor="title-noti">Tiêu đề thông báo (*):</Form.Label>
          <Form.Control
            type="text"
            id="title-noti"
            name="title"
            className={cx("notiInput")}
            required
            minLength={10}
            maxLength={130}
            placeholder="Tiêu đề thông báo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className={cx("formGroup")}>
          <Form.Label htmlFor="file-url">Đường dẫn file thông báo (*):</Form.Label>
          <div className={cx("inputFileUrl")}>
            <p className={cx("mb-0", "me-2")}>https://docs.google.com/document/d/e/</p>
            <Form.Control
              type="text"
              id="file-url"
              name="fileUrl"
              className={cx("notiInput")}
              required
              placeholder="Đường dẫn file thông báo"
              value={fileUrl}
              onChange={(e) => setFileUrl(e.target.value)}
            />
          </div>
        </Form.Group>
        <div className="d-flex flex-column">
          <Link to="/notification/info" className={cx("mb-2", "btn-info-get")}>
            Cách lấy đường dẫn của file trong google docs
          </Link>
          <Form.Label>Xem trước:</Form.Label>
        </div>
        <div className={cx("fileImportReview")}>
          <h5>File thông báo</h5>
          <iframe src={fileUrl ? `https://docs.google.com/document/d/e/${fileUrl}` : null} width="100%" height="900" title="Preview" />
        </div>
        {error && <span className={cx("formMessage")}>{error}</span>}
        <div className={cx("flexEnd")}>
          <Button variant="primary" type="submit" className="fs-3">
            {btnText}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Generator2;
