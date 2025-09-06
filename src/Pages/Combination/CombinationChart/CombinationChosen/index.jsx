import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import classNames from "classnames/bind";
import style from "./CombinationChosen.module.scss";
import { useMediaQuery } from "react-responsive";
const cx = classNames.bind(style);

const Pc = ({ children }) => {
  const isPc = useMediaQuery({ minWidth: 1400 });
  return isPc ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1400 });
  return isDesktop ? children : null;
};

function CombinationChosen({
  show = false,
  labels = [],
  dataCombination1 = [],
  dataCombination2 = [],
  mostChooseOfCombination1 = {},
  mostChooseOfCombination2 = {},
}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Số học sinh chọn tổ hợp cho nguyện vọng 1",
      },
      datalabels: {
        anchor: "end", // neo nhãn ở đầu cột
        align: "top", // căn trên
        color: "black", // màu chữ
        font: {
          weight: "bold",
          size: 15,
        },
      },
    },
  };

  const options2 = options;
  options2.plugins.title.text = "Số học sinh chọn tổ hợp cho nguyện vọng 2";

  return (
    <div style={{ display: show ? "block" : "none" }}>
      <div className={cx("title")}>
        <h3>Biểu đồ thống kê số lượng học sinh chọn các tổ hợp</h3>
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("chart")}>
          <Pc>
            <div className={cx("quantity-box")}>
              <div className={cx("most-combination")}>
                <h4> Nguyện vọng 1</h4>
                <p className={cx("offical")} style={{ color: "#2caffe" }}>
                  {mostChooseOfCombination1.count}
                </p>
                <p className={cx("des")}>
                  Học sinh chọn {mostChooseOfCombination1.combination}
                </p>
              </div>
              <div className={cx("most-combination")}>
                <h4> Nguyện vọng 2</h4>
                <p className={cx("offical")} style={{ color: "#00e272" }}>
                  {mostChooseOfCombination2.count}
                </p>
                <p className={cx("des")}>
                  Học sinh chọn {mostChooseOfCombination2.combination}
                </p>
              </div>
            </div>
            <div className={cx("chart-box")}>
              <Bar
                options={options}
                className={cx("chart-detail")}
                data={{
                  labels: labels,
                  datasets: [
                    {
                      label: "Tổ hợp đã chọn",
                      data: dataCombination1,
                      backgroundColor: ["#2caffe"],
                    },
                  ],
                }}
              />
              <Bar
                options={options2}
                className={cx("chart-detail")}
                data={{
                  labels: labels,
                  datasets: [
                    {
                      label: "Tổ hợp đã chọn",
                      data: dataCombination2,
                      backgroundColor: ["#00e272"],
                    },
                  ],
                }}
              />
            </div>
          </Pc>
          <Desktop>
            <div className={cx("quantity-box", "desktop")}>
              <div className={cx("most-combination")}>
                <h4> Nguyện vọng 1</h4>
                <p className={cx("offical")} style={{ color: "#2caffe" }}>
                  {mostChooseOfCombination1.count}
                </p>
                <p className={cx("des")}>
                  Học sinh chọn {mostChooseOfCombination1.combination}
                </p>
              </div>
              <div className={cx("most-combination")}>
                <h4> Nguyện vọng 2</h4>
                <p className={cx("offical")} style={{ color: "#00e272" }}>
                  {mostChooseOfCombination2.count}
                </p>
                <p className={cx("des")}>
                  Học sinh chọn {mostChooseOfCombination2.combination}
                </p>
              </div>
            </div>
            <div className={cx("chart-box", "desktop")}>
              <Bar
                options={options}
                className={cx("chart-detail")}
                data={{
                  labels: labels,
                  datasets: [
                    {
                      label: "Tổ hợp đã chọn",
                      data: dataCombination1,
                      backgroundColor: ["#2caffe"],
                    },
                  ],
                }}
              />
              <Bar
                options={options2}
                className={cx("chart-detail")}
                data={{
                  labels: labels,
                  datasets: [
                    {
                      label: "Tổ hợp đã chọn",
                      data: dataCombination2,
                      backgroundColor: ["#00e272"],
                    },
                  ],
                }}
              />
            </div>
          </Desktop>
        </div>
      </div>
    </div>
  );
}

export default CombinationChosen;
