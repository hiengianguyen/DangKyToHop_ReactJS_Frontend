import { useState } from "react";
import BoxRadius from "../../../Components/BoxRadius";
import MenuGenerator from "./components/MenuGenerator";
import Generator1 from "./components/generator1";
import Generator2 from "./components/generator2";
import classNames from "classnames/bind";
import style from "./GeneratorNoti.module.scss";
const cx = classNames.bind(style);

function GeneratorNoti() {
  const [currPage, setCurrPage] = useState(1);

  return (
    <BoxRadius className={cx("box-radius")}>
      <MenuGenerator currPage={currPage} onNextPage={setCurrPage} />
      <Generator1 show={currPage === 1} />
      <Generator2 show={currPage === 2} />
    </BoxRadius>
  );
}

export default GeneratorNoti;
