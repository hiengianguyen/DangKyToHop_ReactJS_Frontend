import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import classNames from "classnames/bind";
import style from "./SwiperImg.module.scss";

const cx = classNames.bind(style);

function SwiperImg({ data = [], width = "600px" }) {
  return (
    <Swiper
      className={cx("wrapper")}
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={{
        delay: 3000, // 3 giây tự chạy
        disableOnInteraction: false // không dừng khi người dùng kéo
      }}
      spaceBetween={20}
      slidesPerView={1} // hiển thị 1 biểu đồ mỗi lần
      style={{ width: width, height: "400px", paddingTop: "10px" }}
    >
      {data.map((item) => (
        <SwiperSlide className={cx("img-box")}>
          <img src={item.imgUrl} alt={item.description} />
          <p className="mt-3">{item.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperImg;
