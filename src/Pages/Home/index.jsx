import classNames from "classnames/bind";
import style from "./Home.module.scss";
import MainContentSchool from "../School/MainContentSchool";
import SchoolStats from "../School/SchoolStats";
import SchoolMap from "../School/SchoolMap";
import TrophiContainer from "../School/TrophiContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
const cx = classNames.bind(style);

function Home() {
  const [imgStudentAchiement, setImgStudentAchiement] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigator = useNavigate();

  useEffect(() => {
    document.title = "Đăng ký tổ hợp";
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4001").then((axiosData) => {
      if (axiosData.data.isSuccess) {
        setImgStudentAchiement(axiosData.data.studentAchievements);
      } else if (axiosData.data.redirect) {
        navigator(axiosData.data.redirect);
      }
      setIsLoading(false);
    });
  }, [navigator]);

  return (
    <div className={cx("containers", "wrapper")}>
      {isLoading && <Loading />}
      <div className={cx("container-start")}>
        <p className={cx("text-center", "fw-bold")}>Về trang web Đăng ký tổ hợp</p>
        <div className={cx("d-flex", "introduce-box")}>
          <div className={cx("content-box")}>
            <h2>Giúp học sinh chọn đúng tổ hợp, bước đầu cho hành trình vào lớp 10</h2>
            <p>
              Hệ thống trực tuyến hỗ trợ <b>học sinh lớp 9</b> lựa chọn tổ hợp môn phù hợp với năng lực và định hướng tương lai, đồng thời
              giúp giáo viên <b>theo dõi, tư vấn và tổng hợp nguyện vọng</b> dễ dàng.
            </p>
          </div>
          <div className={cx("img-start")}>
            <img src="https://res.cloudinary.com/dwoymvppw/image/upload/v1749121953/img_1_ss5mze.png" alt="" />
          </div>
        </div>
      </div>

      <div className={cx("container-center", "shadow")}>
        <div className={cx("content-1", "d-flex")}>
          <div className={cx("content-box")}>
            <h2>Đăng ký nguyện vọng bằng giấy – bất tiện, dễ sai sót</h2>
            <p>
              Trước đây, học sinh phải điền tay vào phiếu đăng ký nguyện vọng và nộp lại cho giáo viên. Việc này thường gây ra nhiều khó
              khăn như: ghi sai thông tin, gạch xoá nhiều lần, dễ mất phiếu hoặc sai sót trong quá trình tổng hợp. Giáo viên thì mất nhiều
              thời gian để nhập dữ liệu thủ công, kiểm tra và lập bảng thống kê.
            </p>
          </div>
          <img src="https://res.cloudinary.com/dwoymvppw/image/upload/v1749121954/register-3_wxevux.jpg" alt="" />
        </div>
        <div className={cx("content-2", "d-flex")}>
          <img src="https://res.cloudinary.com/dwoymvppw/image/upload/v1749121953/register-2_bw7lez.avif" className={cx("img-2")} alt="" />
          <div className={cx("content-box")}>
            <h2>Đăng ký nguyện vọng trực tuyến – nhanh chóng, chính xác</h2>
            <p>
              Với hệ thống đăng ký trực tuyến, học sinh có thể dễ dàng chọn tổ hợp môn chỉ với vài thao tác đơn giản. Thông tin được lưu trữ
              tự động, hạn chế tối đa sai sót và dễ dàng chỉnh sửa nếu cần. Giáo viên có thể theo dõi tiến độ đăng ký, thống kê nguyện vọng
              theo thời gian thực và hỗ trợ học sinh nhanh chóng, hiệu quả hơn.
            </p>
          </div>
        </div>
      </div>

      <MainContentSchool />
      <SchoolStats />

      <TrophiContainer listImg={imgStudentAchiement} />

      <div className={cx("container-end", "shadow", "d-flex", "justify-content-center")}>
        <div className={cx("content-box", "position-relative", "content-end")}>
          <h4 className={cx("fw-bold")}>Ngôi trường sẵn sàng chào đón bạn</h4>
          <p>
            Chúng tôi tin rằng mỗi học sinh là một hạt giống tiềm năng – chỉ cần được gieo trồng đúng nơi, sẽ có cơ hội phát triển mạnh mẽ.
            Hãy để ngôi trường này trở thành nơi bắt đầu cho hành trình trưởng thành và thành công của bạn.
          </p>
          <p className={cx("support")}>
            Bấm vào nút bên dưới để bắt đầu đăng ký tổ hợp vào lớp 10 và đồng hành cùng chúng tôi trong năm học tới!
          </p>
          <div
            onClick={() => navigator("/auth/signin")}
            className={cx("btn", "btn-primary", "fs-3")}
            style={{ boxShadow: "3px 3px #9e9e9e", color: "#fff" }}
          >
            Bắt đầu <FontAwesomeIcon icon={faChevronRight} className="" />
          </div>
        </div>
        <div className={cx("img-box", "img-end")}>
          <img
            src="https://res.cloudinary.com/dwoymvppw/image/upload/v1749179562/BE_GIANG_DT_48_hbhv1o.jpg"
            className={cx("shadow")}
            alt=""
          />
        </div>
      </div>

      <SchoolMap />
    </div>
  );
}

export default Home;
