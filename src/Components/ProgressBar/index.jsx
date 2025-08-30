import classNames from "classnames/bind";
import style from "./ProgressBar.module.scss";
import { useLayoutEffect, useRef } from "react";
const cx = classNames.bind(style);

function ProgressBar({ step = 1 }) {
  const stepsProgress = useRef();
  useLayoutEffect(() => {
    stepsProgress.current.style.width = `${(step - 1) * (100 / 4)}%`;
  }, [step]);

  return (
    <div className={cx("step-container")}>
      <div className={cx("progress_bar")}>
        <ul className={cx("progress_bar-steps")}>
          <li className={cx("progress_bar-progress")} ref={stepsProgress}></li>
          <li
            className={cx("progress_bar-step", {
              active: step >= 1
            })}
          >
            <span>1</span>
            <div className={cx("step-label")}>
              <p id="tittle-step-1">Thông tin chính</p>
            </div>
          </li>
          <li
            className={cx("progress_bar-step", {
              active: step >= 2
            })}
          >
            <span>2</span>
            <div className={cx("step-label")}>
              <p id="tittle-step-2">Đơn xin nhập học</p>
            </div>
          </li>
          <li
            className={cx("progress_bar-step", {
              active: step >= 3
            })}
          >
            <span>3</span>
            <div className={cx("step-label")}>
              <p id="tittle-step-3">Chọn tổ hợp</p>
            </div>
          </li>
          <li
            className={cx("progress_bar-step", {
              active: step >= 4
            })}
          >
            <span>4</span>
            <div className={cx("step-label")}>
              <p id="tittle-step-3">Lý lịch học sinh</p>
            </div>
          </li>
          <li
            className={cx("progress_bar-step", {
              active: step >= 5
            })}
          >
            <span>5</span>
            <div className={cx("step-label")}>
              <p id="tittle-step-4">Xác nhận thông tin</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProgressBar;
