import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
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
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked"
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };

  const data = {
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
  };

  return (
    <div style={{ display: show ? "block" : "none" }}>
      <div className={cx("title")}>
        <h3>Biểu đồ thống kê số lượng học sinh đăng ký so với chỉ tiêu</h3>
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("chart-box-1")}>
          <Pc>
            <Bar options={options} className={cx("chart")} data={data} />
          </Pc>
          <Desktop>
            <Bar options={options} className={cx("chart", "desktop")} data={data} />
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
