import classNames from "classnames/bind";
import style from "./TrophiContainer.module.scss";
import Dash from "../../../Components/Dash";
import SwiperImg from "../SwiperImg";

const cx = classNames.bind(style);

function TrophiContainer({ listImg = [] }) {
  return (
    <div className={cx("trophi-container")}>
      <div className={cx("title", "text-center", "container")}>
        <h4 className={cx("fw-bold", "mt-4")}>Thành tích nổi bật – Niềm tự hào của nhà trường</h4>
        <p className="fw-normal">
          Năm học vừa qua, trường chúng tôi đã bồi dưỡng và đưa nhiều học sinh tham gia các kỳ thi học sinh giỏi cấp thành phố. Kết quả đạt
          được vô cùng ấn tượng:
        </p>
        <ul className={cx("text-start", "mt-4")}>
          <li>
            Nhiều giải Nhất, Nhì, Ba, Khuyến khích ở các môn Toán, Văn, Anh, Lý, Hóa, Địa...(01 giải Nhất; 02 giải Nhì, 08 giải Ba và 08
            giải Khuyến khích)
          </li>
          <Dash width="1px" color="#000" />
          <li>Học sinh không chỉ giỏi kiến thức mà còn được rèn luyện tư duy và kỹ năng làm bài chuyên sâu.</li>
          <Dash width="1px" color="#000" />
          <li>
            Thành tích này là minh chứng rõ ràng cho chất lượng giảng dạy và sự đầu tư đúng hướng của nhà trường trong suốt thời gian qua.
          </li>
        </ul>
      </div>
      <SwiperImg data={listImg} width="800px" />
    </div>
  );
}

export default TrophiContainer;
