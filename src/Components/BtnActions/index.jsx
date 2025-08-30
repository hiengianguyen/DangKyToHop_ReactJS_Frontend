import classNames from "classnames/bind";
import style from "./BtnActions.module.scss";
import Button from "../Button";
import { useContext, useEffect, useState } from "react";

const cx = classNames.bind(style);

function BtnActions({ back = false, next = false, confirm = false, step = 1, handleNext = () => {} }) {
  const [renderListBtn, setRenderListBtn] = useState({
    btnBack: false,
    btnNext: true,
    btnConfirm: false
  });

  const handleNextBtn = () => {
    handleNext();
  };
  useEffect(() => {
    switch (step) {
      case 1:
        setRenderListBtn({
          btnBack: false,
          btnNext: true,
          btnConfirm: false
        });
        break;
      case 2:
        setRenderListBtn({
          btnBack: true,
          btnNext: true,
          btnConfirm: false
        });
        break;
      case 3:
        setRenderListBtn({
          btnBack: true,
          btnNext: true,
          btnConfirm: false
        });
        break;
      default:
        setRenderListBtn({
          btnBack: true,
          btnNext: false,
          btnConfirm: true
        });
        break;
    }
  }, [step]);

  return (
    <div className={cx("wrapper")}>
      {renderListBtn.btnBack && (
        <Button primary disabled={back} onClick={() => step - 1} className={cx("button")}>
          Trở lại
        </Button>
      )}

      {renderListBtn.btnNext && (
        <Button primary disabled={next} onClick={handleNextBtn} className={cx("button")}>
          Tiếp tục
        </Button>
      )}
      {renderListBtn.btnConfirm && (
        <Button primary disabled={confirm} className={cx("button")}>
          Xác nhận
        </Button>
      )}
    </div>
  );
}

export default BtnActions;
