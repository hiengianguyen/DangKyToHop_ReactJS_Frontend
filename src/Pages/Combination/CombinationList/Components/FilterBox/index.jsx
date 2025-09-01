import Card from "react-bootstrap/Card";
import classNames from "classnames/bind";
import Form from "react-bootstrap/Form";
import style from "./FilterBox.module.scss";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";

const cx = classNames.bind(style);

function FilterBox({ options = [], title = "", name = "", handleSubmit = () => {} }) {
  const [valueCheck, setValueCheck] = useState("Tất cả");
  return (
    <Card text="dark" className={cx("mb2", "h-100")}>
      <Card.Header>{title}</Card.Header>
      <Card.Body as={Row}>
        {options.map((item, index) => (
          <Col xs={"auto"} key={index}>
            <Form as={"div"} className={cx("formCheck", "formCheckInline", "mb-2", "me-2")}>
              <Form.Check
                inline
                name={name}
                onChange={(e) => {
                  setValueCheck(e.target.value);
                  handleSubmit();
                }}
                checked={item.value === valueCheck}
                type="radio"
                label={item.title}
                value={item.value}
              />
            </Form>
          </Col>
        ))}
      </Card.Body>
    </Card>
  );
}

export default FilterBox;
