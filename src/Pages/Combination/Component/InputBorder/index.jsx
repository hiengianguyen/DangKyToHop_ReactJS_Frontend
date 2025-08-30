import classNames from "classnames/bind";
import style from "./InputBorder.module.scss";
import Form from "react-bootstrap/Form";

const cx = classNames.bind(style);

function InputBorder({
  label = "",
  type = "text",
  fontStyle = "",
  name = "",
  defaultValue = "",
  errorValue = false,
  nonRequired = false,
  onChange = () => {},
  ...props
}) {
  return (
    <Form.Group className={cx("wrapper", { invalid: errorValue })}>
      <Form.Label as="span">{label}:</Form.Label>
      <Form.Control
        type={type}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        className={cx("inp-man")}
        placeholder={errorValue ? "Vui lòng nhập dữ liệu" : ""}
        style={{ textTransform: fontStyle === "" ? "capitalize" : "" }}
        {...props}
        required={!nonRequired}
      />
      {errorValue && <img src="/limitation.png" className={cx("icon-error-value")} alt="" />}
    </Form.Group>
  );
}

export default InputBorder;
