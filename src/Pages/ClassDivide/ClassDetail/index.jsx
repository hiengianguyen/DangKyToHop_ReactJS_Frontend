import { Link, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./ClassDetail.module.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import FillterBoxDetail from "./FillterBoxDetail";
import CardStudent from "./CardStudent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NonDataImg from "../Students/Component/NonDataImg";
import Loading from "../../../Components/Loading";

const cx = classNames.bind(style);

function ClassDetail() {
  const formRef = useRef();
  const [formElement, setFormElement] = useState();
  const [classDetail, setClassDetail] = useState([]);
  const [studentListMain, setStudentListMain] = useState([]);
  const [students, setStudents] = useState([]);
  const [sortList, setSortList] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [messageNonData, setMessageNonData] = useState("Hiện chưa có học sinh được xếp vào lớp này");

  const { id } = useParams();

  useEffect(() => {
    setFormElement(formRef.current);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4001/ad/class/" + id)
      .then((res) => {
        setStudents(res.data.students);
        setClassDetail(res.data.classDetail);
        setStudentListMain(res.data.students);
      })
      .finally(() => setIsLoading(false));
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
        setMessageNonData("Không có học sinh nào trong lớp theo bộ lọc");
      }
    });
  };

  return (
    <div className={cx("wrapper")}>
      {isloading && <Loading title="Đang tải danh sách" />}
      <Link to={-1} className={cx("btn-redirect")}>
        <FontAwesomeIcon icon={faArrowLeft} className="" />
      </Link>
      <div className="container w-50">
        <div className={cx("title")}>
          <h1 className="fs-1 fw-bolder">Lớp {classDetail.name}</h1>
          <h2 className="fs-1">
            Giáo viên chủ nhiệm: <i className="fw-bolder">{classDetail.teacher}</i>
          </h2>
        </div>

        <form ref={formRef}>
          <FillterBoxDetail handleSubmit={() => handleSubmit(sortList)} handleSubmitHaveSort={handleSubmit} />
        </form>

        <div className={cx("list-student")}>
          {students && students?.length > 0 ? (
            students.map((item, index) => (
              <div className="d-flex align-items-center" key={index}>
                <span className={cx("count")}>{index + 1}</span>
                <CardStudent data={item} setStudents={setStudents} classDetail={classDetail} />
              </div>
            ))
          ) : (
            <NonDataImg title="Không có học sinh" message={messageNonData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ClassDetail;
