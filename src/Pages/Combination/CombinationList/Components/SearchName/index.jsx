import classNames from "classnames/bind";
import style from "./SearchName.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

const cx = classNames.bind(style);

function SearchName({ handleSubmit = () => {}, col = false, change = false, defaultValue = "" }) {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(defaultValue);
  }, [defaultValue]);
  return (
    <div className={cx("filter-box", "d-flex", "my-3", { active: col })}>
      <div className={cx("d-flex", "align-items-center", "search-name-div", "border")}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
        <input
          className={cx("ps-0 w-100")}
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e) => {
            if (change) {
              handleSubmit();
            }
            setFullName(e.target.value);
          }}
          style={{ border: "none", outline: "none" }}
          placeholder="Tìm kiếm theo họ và tên..."
        />
      </div>
      <button type="button" onClick={() => handleSubmit()} className={cx("btn", "btn-primary", "search-name-btn")}>
        Tìm kiếm
      </button>
    </div>
  );
}

export default SearchName;
