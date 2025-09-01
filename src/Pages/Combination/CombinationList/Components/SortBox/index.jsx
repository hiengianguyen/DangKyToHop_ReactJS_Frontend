import classNames from "classnames/bind";
import style from "./SortBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowUpWideShort, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const cx = classNames.bind(style);

function SortBox({ handleSubmit = () => {} }) {
  const [showListSort, setShowListSort] = useState(false);
  const [sort, setSort] = useState({ name: "Ngày đăng ký", type: "asc" });

  useEffect(() => {
    if (Object.keys(sort).length === 0) return;

    handleSubmit();
  }, [sort, handleSubmit]);

  const emptyFunc = () => {};

  return (
    <div className={cx("sort-box")}>
      <div className={cx("sort-title")} onClick={() => setShowListSort((prev) => !prev)}>
        <p className={cx("m-0")}>
          Sắp xếp theo{" "}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={cx("fa-solid", "sort-icon-title", { active: showListSort })}
            style={{ fontSize: 13 }}
          />
        </p>
      </div>
      <div className={cx("sort-content", { active: showListSort })}>
        <ul className={cx("list-sort", "p-0", "m-0")}>
          <li
            className={cx("sub-li-type", "title")}
            onClick={
              sort.name === "Họ và tên" && sort.type === "asc"
                ? emptyFunc
                : () =>
                    setSort({
                      name: "Họ và tên",
                      type: "asc"
                    })
            }
          >
            Họ và tên <FontAwesomeIcon icon={faArrowUpWideShort} className={cx("ms-1", "title")} style={{ fontSize: 20 }} />
          </li>
          <li className={cx("sub-li-type", "type", "py-0", { active: sort.name !== "Họ và tên" })}>
            <ul className={cx("ps-3")}>
              <li
                className={cx("p-2", "type-sort")}
                onClick={sort.type === "asc" ? emptyFunc : () => setSort((prev) => ({ ...prev, type: "asc" }))}
              >
                Tăng dần {sort.name === "Họ và tên" && sort.type === "asc" && <FontAwesomeIcon icon={faCheck} className={cx("ms-1")} />}
              </li>
              <li
                className={cx("p-2", "type-sort")}
                onClick={sort.type === "desc" ? emptyFunc : () => setSort((prev) => ({ ...prev, type: "desc" }))}
              >
                Giảm dần {sort.name === "Họ và tên" && sort.type === "desc" && <FontAwesomeIcon icon={faCheck} className={cx("ms-1")} />}
              </li>
            </ul>
          </li>
          <li
            className={cx("title", "sub-li-type")}
            onClick={
              sort.name === "Ngày đăng ký" && sort.type === "asc"
                ? emptyFunc
                : () =>
                    setSort({
                      name: "Ngày đăng ký",
                      type: "asc"
                    })
            }
          >
            Ngày đăng ký <FontAwesomeIcon icon={faArrowUpWideShort} className={cx("ms-1", "title")} style={{ fontSize: 20 }} />
          </li>
          <li className={cx("sub-li-type", "type", "py-0", { active: sort.name !== "Ngày đăng ký" })}>
            <ul className={cx("ps-3")}>
              <li
                className={cx("p-2", "type-sort")}
                onClick={sort.type === "asc" ? emptyFunc : () => setSort((prev) => ({ ...prev, type: "asc" }))}
              >
                Trước đó {sort.name === "Ngày đăng ký" && sort.type === "asc" && <FontAwesomeIcon icon={faCheck} className={cx("ms-1")} />}
              </li>
              <li
                className={cx("p-2", "type-sort")}
                onClick={sort.type === "desc" ? emptyFunc : () => setSort((prev) => ({ ...prev, type: "desc" }))}
              >
                Gần đây {sort.name === "Ngày đăng ký" && sort.type === "desc" && <FontAwesomeIcon icon={faCheck} className={cx("ms-1")} />}
              </li>
            </ul>
          </li>
          <li
            className={cx("title", "sub-li-type")}
            onClick={
              sort.name === "Điểm đầu vào" && sort.type === "asc"
                ? emptyFunc
                : () =>
                    setSort({
                      name: "Điểm đầu vào",
                      type: "asc"
                    })
            }
          >
            Điểm đầu vào <FontAwesomeIcon icon={faArrowUpWideShort} className={cx("ms-1", "title")} style={{ fontSize: 20 }} />
          </li>
          <li className={cx("sub-li-type", "type", "py-0", { active: sort.name !== "Điểm đầu vào" })}>
            <ul className={cx("ps-3")}>
              <li
                className={cx("p-2", "type-sort")}
                onClick={sort.type === "asc" ? emptyFunc : () => setSort((prev) => ({ ...prev, type: "asc" }))}
              >
                Cao nhất {sort.name === "Điểm đầu vào" && sort.type === "asc" && <FontAwesomeIcon icon={faCheck} className={cx("ms-1")} />}
              </li>
              <li
                className={cx("p-2", "type-sort")}
                onClick={sort.type === "desc" ? emptyFunc : () => setSort((prev) => ({ ...prev, type: "desc" }))}
              >
                Thấp nhất{" "}
                {sort.name === "Điểm đầu vào" && sort.type === "desc" && <FontAwesomeIcon icon={faCheck} className={cx("ms-1")} />}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <input type="text" name="sort" value={JSON.stringify(sort)} onChange={() => {}} className="d-none" />
    </div>
  );
}

export default SortBox;
