import classNames from "classnames/bind";
import style from "./BoxContentAndImg.module.scss";
import SwiperImg from "../SwiperImg";
import { useEffect, useState } from "react";

const cx = classNames.bind(style);

function BoxContentAndImg({
  isSwiper = false,
  imgUrl,
  desImg = "",
  children,
  backGround,
  isLeftImgBg = false,
  listImg = [],
  imgWidth = "",
  bgColor = "papayawhip"
}) {
  const [sideStyle, setSideStyle] = useState({});
  useEffect(() => {
    if (isLeftImgBg === undefined) return;
    if (isLeftImgBg) {
      setSideStyle({
        backgroundImage: `url(${backGround})`,
        right: "unset",
        left: 0
      });
    } else {
      setSideStyle({
        backgroundImage: `url(${backGround})`,
        right: 0,
        left: "unset"
      });
    }
  }, [isLeftImgBg, backGround]);
  return (
    <div className={cx("img-activity-container")}>
      <div className={cx("img-act-box")} style={sideStyle}></div>
      <div
        className={cx("text", {
          left: !isLeftImgBg
        })}
        style={{
          background: `linear-gradient(to ${!isLeftImgBg ? "right" : "left"}, ${bgColor} 45%, transparent)`
        }}
      >
        <div className={cx("text-child")}>{children}</div>
      </div>
      <div className={cx("img-box")} style={isLeftImgBg ? { left: 0, right: "unset" } : { right: 0, left: "unset" }}>
        {isSwiper ? (
          <SwiperImg data={listImg} />
        ) : (
          <>
            <img
              className={cx("img-detail")}
              src={imgUrl}
              alt={desImg}
              style={{
                width: imgWidth
              }}
            />
            <p>{desImg}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default BoxContentAndImg;
