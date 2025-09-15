import classNames from "classnames/bind";
import style from "./SortBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowUpWideShort, faCheck, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(style);

function SortBox({ handleSubmit = () => {} }) {
  const [showListSort, setShowListSort] = useState(false);
  const [sort, setSort] = useState({ name: "Ngày đăng ký", type: "asc" });

  const handleClickTypeSort = (value) => {
    setSort(value);
    handleSubmit(value);
  };

  const emptyFunc = () => {};

  return (
    <div className={cx("sort-box")}>
      <div className={cx("sort-title")} onClick={() => setShowListSort((prev) => !prev)}>
        <p className={cx("m-0")}>Sắp xếp theo</p>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={cx("fa-solid", "sort-icon-title", { active: showListSort })}
          style={{ fontSize: 13 }}
        />
      </div>
      <div className={cx("sort-content", { active: showListSort })}>
        <ul className={cx("list-sort", "p-0", "m-0")}>
          <li
            className={cx("sub-li-type", "title")}
            onClick={
              sort.name === "Họ và tên" && sort.type === "asc"
                ? emptyFunc
                : () =>
                    handleClickTypeSort({
                      name: "Họ và tên",
                      type: "asc"
                    })
            }
          >
            Họ và tên{" "}
            {sort.name === "Họ và tên" &&
              (sort.type === "asc" ? (
                <FontAwesomeIcon icon={faArrowUpWideShort} className={cx("ms-1", "title")} style={{ fontSize: 20 }} />
              ) : (
                <FontAwesomeIcon icon={faArrowDownWideShort} className={cx("ms-1", "title")} style={{ fontSize: 20 }} />
              ))}
          </li>
          <li className={cx("sub-li-type", "type", "py-0", { active: sort.name !== "Họ và tên" })}>
            <ul className={cx("ps-3")}>
              <li
                className={cx("p-2", "type-sort")}
                onClick={
                  sort.type === "asc"
                    ? emptyFunc
                    : () =>
                        handleClickTypeSort({
                          name: "Họ và tên",
                          type: "asc"
                        })
                }
              >
                Tăng dần {sort.name === "Họ và tên" && sort.type === "asc" && <FontAwesomeIcon icon={faCheck} className={cx("ms-1")} />}
              </li>
              <li
                className={cx("p-2", "type-sort")}
                onClick={
                  sort.type === "desc"
                    ? emptyFunc
                    : () =>
                        handleClickTypeSort({
                          name: "Họ và tên",
                          type: "desc"
                        })
                }
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
                    handleClickTypeSort({
                      name: "Ngày đăng ký",
                      type: "asc"
                    })
            }
          >
            Ngày đăng ký{" "}
            {sort.name === "Ngày đăng ký" &&
              (sort.type === "asc" ? (
                <FontAwesomeIcon icon={faArrowUpWideShort} className={cx("ms-1", "title")} style={{ fontSize: 20 }} />
              ) : (
                <FontAwesomeIcon icon={faArrowDownWideShort} className={cx("ms-1", "title")} style={{ fontSize: 20 }} />
              ))}
          </li>
          <li className={cx("sub-li-type", "type", "py-0", { active: sort.name !== "Ngày đăng ký" })}>
            <ul className={cx("ps-3")}>
              <li
                className={cx("p-2", "type-sort")}
                onClick={
                  sort.type === "asc"
                    ? emptyFunc
                    : () =>
                        handleClickTypeSort({
                          name: "Ngày đăng ký",
                          type: "asc"
                        })
                }
              >
                Trước đó {sort.name === "Ngày đăng ký" && sort.type === "asc" && <FontAwesomeIcon icon={faCheck} className={cx("ms-1")} />}
              </li>
              <li
                className={cx("p-2", "type-sort")}
                onClick={
                  sort.type === "desc"
                    ? emptyFunc
                    : () =>
                        handleClickTypeSort({
                          name: "Ngày đăng ký",
                          type: "desc"
                        })
                }
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
                    handleClickTypeSort({
                      name: "Điểm đầu vào",
                      type: "asc"
                    })
            }
          >
            Điểm đầu vào{" "}
            {sort.name === "Điểm đầu vào" &&
              (sort.type === "asc" ? (
                <FontAwesomeIcon icon={faArrowUpWideShort} className={cx("ms-1", "title")} style={{ fontSize: 20 }} />
              ) : (
                <FontAwesomeIcon icon={faArrowDownWideShort} className={cx("ms-1", "title")} style={{ fontSize: 20 }} />
              ))}
          </li>
          <li className={cx("sub-li-type", "type", "py-0", { active: sort.name !== "Điểm đầu vào" })}>
            <ul className={cx("ps-3")}>
              <li
                className={cx("p-2", "type-sort")}
                onClick={
                  sort.type === "asc"
                    ? emptyFunc
                    : () =>
                        handleClickTypeSort({
                          name: "Điểm đầu vào",
                          type: "asc"
                        })
                }
              >
                Cao nhất {sort.name === "Điểm đầu vào" && sort.type === "asc" && <FontAwesomeIcon icon={faCheck} className={cx("ms-1")} />}
              </li>
              <li
                className={cx("p-2", "type-sort")}
                onClick={
                  sort.type === "desc"
                    ? emptyFunc
                    : () =>
                        handleClickTypeSort({
                          name: "Điểm đầu vào",
                          type: "desc"
                        })
                }
              >
                Thấp nhất{" "}
                {sort.name === "Điểm đầu vào" && sort.type === "desc" && <FontAwesomeIcon icon={faCheck} className={cx("ms-1")} />}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SortBox;
