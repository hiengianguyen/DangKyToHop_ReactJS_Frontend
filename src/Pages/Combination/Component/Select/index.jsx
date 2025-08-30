import classNames from "classnames/bind";
import style from "./Select.module.scss";
import Form from "react-bootstrap/Form";

const cx = classNames.bind(style);

function Select({ label = "", name = "", valueNoti = "Chọn giá trị", opts = [], onChange = () => {}, selected = "", errorValue = false }) {
  return (
    <Form.Group className={cx("wrapper", { invalid: errorValue })}>
      <Form.Label as="span">{label}:</Form.Label>
      <Form.Control as="select" name={name} defaultValue={selected} onChange={onChange} className={cx("inp-man")} required>
        <option selected={selected === ""} value="">
          -- {valueNoti} --
        </option>
        {opts.map((item, index) => (
          <option key={index} selected={item.value === selected} value={item.value}>
            {item.title}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}

export default Select;
