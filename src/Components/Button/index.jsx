import classNames from "classnames/bind";
import style from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Button({
  to,
  href,
  onClick,
  primary = false,
  outline = false,
  rounded = false,
  disabled = false,
  text = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    Comp = Link;
    props.to = to;
  } else if (href) {
    Comp = "a";
    props.href = href;
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    text,
    disabled,
    rounded
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
