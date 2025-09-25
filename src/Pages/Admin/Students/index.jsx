import classNames from "classnames/bind";
import style from "./Students.module.scss";
import Container from "react-bootstrap/esm/Container";
import StudentItem from "./Component/StudentItem";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading";
import FillterBox from "./Component/FillterBox";
import SortBox from "../../Combination/CombinationList/Components/SortBox";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import BarDivideClass from "./Component/BarDivideClass";
import DroppableList from "../../../Components/DroppableList";
import DragOverPlayStudent from "./Component/StudentItem/DragOverPlayStudent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function Students() {
  const formRef = useRef();
  const containerListRef = useRef();
  const [studentList, setStudentList] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [formElement, setFormElement] = useState();
  const [submittedListMain, setSubmittedListMain] = useState([]);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const [sortList, setSortList] = useState(null);
  const [showClassBar, setShowClassBar] = useState(false);
  const [scrollStudent, setScrollStudent] = useState({});

  const navigator = useNavigate();

  useEffect(() => {
    setFormElement(formRef.current);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4001/ad/students")
      .then((res) => {
        const data = res.data;
        if (data.redirect) {
          navigator(data.redirect);
        } else {
          setStudentList(data.studentList);
          setSubmittedListMain(data.studentList);
        }
      })
      .finally(() => setIsLoading(false));
  }, [navigator]);

  const handleSubmit = (sort) => {
    setIsLoadingList(true);
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    if (Object.keys(data).length === 0 && studentList.length === 0) return;
    if (sort && Object.keys(sort).length) {
      data.sort = sort;
      setSortList(sort);
    }

    data.submittedList = submittedListMain;
    axios
      .post("http://localhost:4001/combination/submited/sort", data)
      .then((axiosData) => {
        if (axiosData.data.isSuccess) {
          setStudentList(axiosData.data.submittedListAfterSort);
        }
      })
      .finally(() => setIsLoadingList(false));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setScrollStudent(null);
    if (!active || !over || over.id === "list") return setShowClassBar(false);

    axios
      .post("http://localhost:4001/ad/student/add/class", {
        studentId: active.id,
        classId: over.id
      })
      .then((res) => {
        setStudentList((prev) => {
          return prev.filter((item) => item.id !== active.id);
        });
        alert(res.data.message);
      });
    setShowClassBar(false);
  };

  const handleDragStart = (event) => {
    setScrollStudent(() => studentList.find((item) => item.id === event.active.id));
    setShowClassBar(true);
  };

  return (
    <form action="" ref={formRef}>
      <DndContext key={String(showClassBar)} onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <div className={cx("wrapper", "mb-4")}>
          {isloading && <Loading />}
          <div className={cx("sort-box", { hidden: showClassBar })}>
            <h4>Phần lọc:</h4>
            <FillterBox handleSubmit={() => handleSubmit(sortList)} />
          </div>
          <Container className={"d-flex flex-column align-items-center " + cx("container-list")} ref={containerListRef}>
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className={cx("turn-sort-bar", { hidden: showClassBar })}
              onClick={() => setShowClassBar((prev) => !prev)}
            />
            <div className={cx("title-box")}>
              <h2>📋 Danh sách học sinh đã được phê duyệt hồ sơ</h2>
              <p>Danh sách này hiển thị toàn bộ học sinh đã hoàn tất và được phê duyệt hồ sơ tuyển sinh.</p>{" "}
              <p>Đây là bước chuẩn bị để tiến hành phân chia vào các lớp học.</p>
            </div>
            <div className={cx("content", "border shadow")}>
              <div className={cx("header-list") + " d-flex align-items-center pb-4 justify-content-between"}>
                <span className="d-flex justify-content-start">Kéo thả để phân chia lớp</span>
                <SortBox changeSort={setSortList} handleSubmit={handleSubmit} />
              </div>
              <DroppableList id="list" show={showClassBar}>
                {studentList &&
                  studentList.map((item, index) => {
                    if (!item.classId) {
                      return (
                        <StudentItem
                          data={item}
                          key={index}
                          index={index}
                          detail={false}
                          onClick={() => setShowClassBar((prev) => !prev)}
                        />
                      );
                    } else {
                      return null;
                    }
                  })}
                {isLoadingList && <Loading height="100%" position="absolute" color="rgb(244 244 244)" zIndex="9998" />}
              </DroppableList>
              <DragOverlay>{scrollStudent && <DragOverPlayStudent data={scrollStudent} />}</DragOverlay>
            </div>
          </Container>
          <BarDivideClass show={showClassBar} />
        </div>
      </DndContext>
    </form>
  );
}

export default Students;
