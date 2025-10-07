import { useDroppable } from "@dnd-kit/core";
import Row from "react-bootstrap/esm/Row";
function DroppableList({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <Row ref={setNodeRef} className="position-relative px-3 h-100" style={{ background: isOver ? "#f0f8ff" : undefined }}>
      {children}
    </Row>
  );
}

export default DroppableList;
