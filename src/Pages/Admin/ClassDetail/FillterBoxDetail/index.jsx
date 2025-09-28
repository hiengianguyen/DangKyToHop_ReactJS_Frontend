import classNames from "classnames/bind";
import style from "./FillterBoxDetail.module.scss";
import FilterBox from "../../../../Pages/Combination/CombinationList/Components/FilterBox";
import SearchName from "../../../../Pages/Combination/CombinationList/Components/SearchName";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SortBox from "../../../Combination/CombinationList/Components/SortBox";
const cx = classNames.bind(style);

function FillterBoxDetail({ handleSubmit = () => {}, handleSubmitHaveSort = () => {} }) {
  return (
    <div className={cx("wrapper")}>
      <SearchName handleSubmit={handleSubmit} change />
      <Row>
        <Col xs={"auto"}>
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
        </Col>
        <Col>
          <SortBox handleSubmit={handleSubmitHaveSort} />
        </Col>
      </Row>
    </div>
  );
}

export default FillterBoxDetail;
