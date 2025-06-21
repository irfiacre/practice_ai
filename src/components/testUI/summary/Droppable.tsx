import React from "react";
import { useDroppable } from "@dnd-kit/core";

const Droppable = (props: any) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} className="border border-primary rounded-md h-28 p-5" style={style}>
      {props.children}
    </div>
  );
};

export default Droppable;
