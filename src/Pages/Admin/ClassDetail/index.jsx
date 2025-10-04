import { Link, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./ClassDetail.module.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import FillterBoxDetail from "./FillterBoxDetail";
import CardStudent from "./CardStudent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function ClassDetail() {
  const formRef = useRef();
  const [formElement, setFormElement] = useState();
  const [classDetail, setClassDetail] = useState([]);
  const [studentListMain, setStudentListMain] = useState([]);
  const [students, setStudents] = useState([]);
  const [sortList, setSortList] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setFormElement(formRef.current);
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4001/ad/class/" + id).then((res) => {
      setStudents(res.data.students);
      setClassDetail(res.data.classDetail);
      setStudentListMain(res.data.students);
    });
  }, [id]);

  const handleSubmit = (sort) => {
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    if (Object.keys(data).length === 0 && students.length === 0) return;
    if (sort && Object.keys(sort).length) {
      data.sort = sort;
      setSortList(sort);
    }

    data.studentList = studentListMain;
    axios.post("http://localhost:4001/ad/student/sort", data).then((axiosData) => {
      if (axiosData.data.isSuccess) {
        setStudents(axiosData.data.studentListAfterSort);
      }
    });
  };

  return (
    <div className={cx("wrapper")}>
      <Link to={-1} className={cx("btn-redirect")}>
        <FontAwesomeIcon icon={faArrowLeft} className="" />
      </Link>
      <div className="container w-50">
        <div className={cx("title")}>
          <h1>Lớp {classDetail.name}</h1>
          <h2>
            Giáo viên chủ nhiệm: <i>{classDetail.teacher}</i>
          </h2>
        </div>

        <form ref={formRef}>
          <FillterBoxDetail handleSubmit={() => handleSubmit(sortList)} handleSubmitHaveSort={handleSubmit} />
        </form>

        <div className={cx("list-student")}>
          {students &&
            students.map((item, index) => (
              <div className="d-flex align-items-center" key={index}>
                <span className={cx("count")}>{index + 1}</span>
                <CardStudent data={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ClassDetail;
