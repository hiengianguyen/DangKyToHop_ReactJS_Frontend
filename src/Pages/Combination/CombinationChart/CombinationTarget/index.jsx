import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import classNames from "classnames/bind";
import style from "./CombinationTarget.module.scss";
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

function CombinationTarget({ show = true, labels = [], chosen = [], empty = [] }) {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Số học sinh chọn tổ hợp cho NV 1 (so với tổng chỗ)"
      },
      datalabels: {
        anchor: "center",
        color: "black",
        formatter: (value, context) => {
          // chỉ hiển thị số cho dataset "Đã chọn"
          if (context.dataset.label === "Đã chọn") {
            return value;
          }
          return null;
        }
      }
    },
    scales: {
      x: {
        stacked: true // xếp chồng theo trục X
      },
      y: {
        stacked: true, // xếp chồng theo trục Y
        beginAtZero: true,
        suggestedMax: 80 // cố định trục Y tối đa = capacity
      }
    }
  };

  return (
    <div style={{ display: show ? "block" : "none" }}>
      <div className={cx("title")}>
        <h3>Biểu đồ thống kê số lượng học sinh đăng ký so với chỉ tiêu</h3>
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("chart-box-1")}>
          <Pc>
            <Bar
              options={options}
              className={cx("chart")}
              data={{
                labels,
                datasets: [
                  {
                    label: "Đã chọn",
                    data: chosen,
                    backgroundColor: "rgba(54, 162, 235, 0.8)"
                  },
                  {
                    label: "Còn trống",
                    data: empty,
                    backgroundColor: "rgba(200, 200, 200, 0.6)"
                  }
                ]
              }}
            />
          </Pc>
          <Desktop>
            <Bar
              options={options}
              className={cx("chart", "desktop")}
              data={{
                labels,
                datasets: [
                  {
                    label: "Đã chọn",
                    data: chosen,
                    backgroundColor: "rgba(54, 162, 235, 0.8)"
                  },
                  {
                    label: "Còn trống",
                    data: empty,
                    backgroundColor: "rgba(200, 200, 200, 0.6)"
                  }
                ]
              }}
            />
          </Desktop>
          <div className={cx("content")}>
            <p>
              Biểu đồ thống kê số học sinh đăng ký vào từng tổ hợp so với số lượng chỉ tiêu tối đa được phân bổ cho mỗi tổ hợp. Thông tin
              giúp đánh giá mức độ quan tâm và phân bố nguyện vọng của học sinh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CombinationTarget;
