import classNames from "classnames/bind";
import style from "../../Pages/ClassDivide/Classmate/CardClass/CardClass.module.scss";

import { useDroppable } from "@dnd-kit/core";
import { createContext } from "react";
const cx = classNames.bind(style);

export const overDraggContext = createContext();

function DroppableClass({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <overDraggContext.Provider value={isOver}>
      <div ref={setNodeRef} className={cx({ over: isOver })}>
        {children}
      </div>
    </overDraggContext.Provider>
  );
}

export default DroppableClass;
