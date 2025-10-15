import Container from "react-bootstrap/esm/Container";
import classNames from "classnames/bind";
import style from "./MainContentSchool.module.scss";
import { useMediaQuery } from "react-responsive";

const Pc = ({ children }) => {
  const isPc = useMediaQuery({ minWidth: 1400 });
  return isPc ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1400 });
  return isDesktop ? children : null;
};

const cx = classNames.bind(style);

function MainContentSchool() {
  return (
    <div className={cx("content-3")}>
      <Container>
        <p className={cx("text-content-3", "text-gray-800 fs-3 mb-4")}>
          Trải qua 15 năm phát triển, Trường THPT Duy Tân đã mở rộng quy mô đáng kể. Năm học 2024–2025, trường có 32 lớp với 1.256 học sinh
          và đội ngũ gần 80 cán bộ, giáo viên. Địa bàn tuyển sinh của trường bao gồm các xã/phường như phường Quảng Phú, phường Tam Kỳ,
          phường Hương Trà, phường Bàn Thạch và mở rộng đến xã Thăng Trường và xã Tam Xuân.
        </p>
      </Container>
      <Pc>
        <div className={cx("img-box")}>
          <img
            className={cx("first")}
            src="https://res.cloudinary.com/dwoymvppw/image/upload/v1749179562/BE_GIANG_DT_38_sjlsqx.jpg"
            alt=""
          />
          <img
            className={cx("second")}
            src="https://res.cloudinary.com/dwoymvppw/image/upload/v1749179568/BE_GIANG_DT_247_k6rm0i.jpg"
            alt=""
          />
        </div>
      </Pc>
      <Desktop>
        <div className={cx("img-box", "desktop")}>
          <img
            className={cx("first")}
            src="https://res.cloudinary.com/dwoymvppw/image/upload/v1749179562/BE_GIANG_DT_38_sjlsqx.jpg"
            alt=""
          />
          <img
            className={cx("second")}
            src="https://res.cloudinary.com/dwoymvppw/image/upload/v1749179568/BE_GIANG_DT_247_k6rm0i.jpg"
            alt=""
          />
        </div>
      </Desktop>
    </div>
  );
}

export default MainContentSchool;
