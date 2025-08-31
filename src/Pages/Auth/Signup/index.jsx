import classNames from "classnames/bind";
import style from "./Signup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerLogin from "../BannerLogin";
import axios from "axios";
import { useAuth } from "../../../Contexts/AuthContext";

const cx = classNames.bind(style);

function Signup() {
  const navigator = useNavigate();
  const { auth } = useAuth();
  const [fullName, setFullName] = useState("");
  const [errorFullName, setErrorFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [repassword, setRePassword] = useState("");
  const [errorRePass, setErrorRePass] = useState("");

  useEffect(() => {
    document.title = "Đăng ký tổ hợp | Đăng ký";
  }, []);

  useEffect(() => {
    if (!auth.isAuthenticated) return;
    if (auth.role === "student") {
      navigator("/combination/register");
    } else {
      navigator("/combination/submitted/list");
    }
  }, [auth, navigator]);

  useEffect(() => {
    setErrorFullName("");
    setErrorPhone("");
    setErrorPass("");
    setErrorRePass("");
  }, [fullName, phone, password, repassword]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let ok = true;

    if (fullName.length === 0 || fullName.length <= 4) {
      setErrorFullName("Vui lòng nhập Họ và tên (Hơn 4 kí tự)");
      ok = false;
    } else {
      setErrorFullName("");
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setErrorPhone("Số điện thoại phải gồm đúng 10 chữ số");
      ok = false;
    } else {
      setErrorPhone("");
    }

    if (password.length < 8) {
      setErrorPass("Mật khẩu ít nhất 8 kí tự");
      ok = false;
    } else {
      setErrorPass("");
    }

    if (repassword !== password || repassword.length === 0) {
      setErrorRePass("Mật khẩu nhập lại chưa khớp");
      ok = false;
    } else {
      setErrorRePass("");
    }

    if (ok) {
      axios.post("http://localhost:4001/auth/signup", { fullName: fullName, password: password, phone: phone }).then((axiosData) => {
        if (axiosData.data.isSuccess) {
          navigator("/auth/signin");
        } else {
          setErrorPhone(axiosData.data.messageError);
        }
      });
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("box-login")}>
        <div className={cx("box")}>
          <p onClick={() => navigator("/")} title="Trang chủ" className={cx("btn-home-page")}>
            <FontAwesomeIcon icon={faArrowLeft} className="" /> Trang chủ
          </p>
          <div className={cx("title-box")}>
            <img src="https://res.cloudinary.com/dwoymvppw/image/upload/v1752651864/cropped_circle_image_kfiyjk.png" alt="Duy Tân" />
            <div className={cx("content")}>
              <h2>Chào mừng!</h2>
              <p>Tạo tài khoản để đăng ký tổ hợp</p>
            </div>
          </div>
          <div id="signup" className={cx("form-container")}>
            <Form className="d-flex flex-column" style={{ gap: "15px" }} onSubmit={handleSubmit}>
              <Form.Group className="Group">
                <Form.Label>Họ và tên:</Form.Label>
                <Form.Control
                  isInvalid={!!errorFullName}
                  defaultValue={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="login__input"
                  name="fullName"
                  type="text"
                  placeholder="Họ và tên"
                />
                <Form.Control.Feedback type="invalid">{errorFullName}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Số điện thoại:</Form.Label>
                <Form.Control
                  isInvalid={!!errorPhone}
                  defaultValue={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="login__input"
                  name="phoneNumber"
                  type="text"
                  placeholder="Số điện thoại liên hệ"
                />
                <Form.Control.Feedback type="invalid">{errorPhone}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Mật khẩu:</Form.Label>
                <Form.Control
                  isInvalid={!!errorPass}
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login__input"
                  name="password"
                  type="password"
                  placeholder="Mật khẩu"
                />
                <Form.Control.Feedback type="invalid">{errorPass}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Xác nhận mật khẩu:</Form.Label>
                <Form.Control
                  isInvalid={!!errorRePass}
                  defaultValue={repassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  className="login__input"
                  name="rePassword"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                />
                <Form.Control.Feedback type="invalid">{errorRePass}</Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" style={{ width: "100%", fontSize: "16px" }}>
                ĐĂNG KÝ
              </Button>
              <div className={cx("login-comment")}>
                <p>Bạn đã có tài khoản?</p>
                <p className={cx("btn-home-page")} onClick={() => navigator("/auth/signin")}>
                  Đăng nhập
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <BannerLogin />
    </div>
  );
}

export default Signup;
