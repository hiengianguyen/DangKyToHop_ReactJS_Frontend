import BoxRadius from "../../../Components/BoxRadius";

import classNames from "classnames/bind";
import style from "./CombinationChart.module.scss";
import MenuTypeChart from "./MenuTypeChart";
import { useEffect, useState } from "react";
import CombinationChosen from "./CombinationChosen";
import CombinationTarget from "./CombinationTarget";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);
function CombinationChart() {
  const [currPage, setCurrPage] = useState(1);
  const [dataChart, setDataChart] = useState({});
  const navigator = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4001/combination/analytics").then((axiosData) => {
      if (axiosData.data.isSuccess) {
        setDataChart(axiosData.data);
      } else {
        navigator("/auth/signin");
      }
    });
  }, []);

  const renderChart = () => {
    switch (currPage) {
      case 2:
        return <CombinationTarget labels={dataChart.combinations} chosen={dataChart.countCombinaton1} empty={dataChart.classesCapacitys} />;
      default:
        return (
          <CombinationChosen
            labels={dataChart.combinations}
            dataCombination1={dataChart.countCombinaton1}
            dataCombination2={dataChart.countCombinaton2}
            mostChooseOfCombination1={dataChart.mostChooseOfCombination1}
            mostChooseOfCombination2={dataChart.mostChooseOfCombination2}
          />
        );
    }
  };

  return (
    <BoxRadius className={cx("box-radius")}>
      <MenuTypeChart currPage={currPage} onNextPage={setCurrPage} />
      <div style={{ padding: "25px" }}>{renderChart()}</div>
    </BoxRadius>
  );
}

export default CombinationChart;
