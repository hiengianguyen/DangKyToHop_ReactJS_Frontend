import classNames from "classnames/bind";
import style from "./FillterBox.module.scss";
import FilterBox from "../../../../Combination/CombinationList/Components/FilterBox";
import SearchName from "../../../../Combination/CombinationList/Components/SearchName";
const cx = classNames.bind(style);

function FillterBox({ handleSubmit = () => {} }) {
  return (
    <div className={cx("wrapper")}>
      <SearchName handleSubmit={handleSubmit} col change />
      <FilterBox
        handleSubmit={handleSubmit}
        name="gender"
        title="Giới tính"
        options={[
          {
            title: "Tất cả",
            value: "Tất cả"
          },
          {
            title: "Nam",
            value: "Nam"
          },
          {
            title: "Nữ",
            value: "Nữ"
          }
        ]}
      />
      <FilterBox
        handleSubmit={handleSubmit}
        name="combination1"
        title="Nguyện vọng 1"
        options={[
          {
            title: "Tất cả",
            value: "Tất cả"
          },
          {
            title: "Tổ hợp 1",
            value: "Tổ hợp 1"
          },
          {
            title: "Tổ hợp 2",
            value: "Tổ hợp 2"
          },
          {
            title: "Tổ hợp 3",
            value: "Tổ hợp 3"
          },
          {
            title: "Tổ hợp 4",
            value: "Tổ hợp 4"
          },
          {
            title: "Tổ hợp 5",
            value: "Tổ hợp 5"
          }
        ]}
      />
      <FilterBox
        handleSubmit={handleSubmit}
        name="combination2"
        title="Nguyện vọng 2"
        options={[
          {
            title: "Tất cả",
            value: "Tất cả"
          },
          {
            title: "Tổ hợp 1",
            value: "Tổ hợp 1"
          },
          {
            title: "Tổ hợp 2",
            value: "Tổ hợp 2"
          },
          {
            title: "Tổ hợp 3",
            value: "Tổ hợp 3"
          },
          {
            title: "Tổ hợp 4",
            value: "Tổ hợp 4"
          },
          {
            title: "Tổ hợp 5",
            value: "Tổ hợp 5"
          }
        ]}
      />
    </div>
  );
}

export default FillterBox;
