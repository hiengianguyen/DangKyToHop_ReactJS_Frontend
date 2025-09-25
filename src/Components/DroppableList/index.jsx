import { useDroppable } from "@dnd-kit/core";
import classNames from "classnames/bind";
import style from "../../Pages/Admin/Students/Students.module.scss";
const cx = classNames.bind(style);

function DroppableList({ id, children, show = false }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className={cx("list", "position-relative")} style={{ background: isOver ? "#f0f8ff" : undefined }}>
      {children}
    </div>
  );
}

export default DroppableList;
