import { DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import Droppable from "./Droppable";
import Draggable from "./Draggable";

const SummaryQuestion = ({ content }: { content: any }) => {
  const [parent, setParent] = useState(null);

  const handleDragEnd = ({ over }: any) => {
    setParent(over ? over.id : null);
  };

  console.log(content.options);

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3 py-2">
        <span>Directions:</span>
        <span>
          An introductory sentence for a brief summary of the passage is
          provided below. Complete the summary by selecting the THREE answer
          choices that express the most important ideas in the passage. Some
          sentences do not belong in the summary because they express ideas that
          are not presented in the passage or are minor ideas in the passage.
          <strong>This question is worth 2 points. </strong>
        </span>
      </div>

      <p className="p-5 bg-background_color rounded-md">
        Drag your choices to the spaces where they belong. To review the
        passage, click on View Text.
      </p>

      <div>
        <DndContext onDragEnd={handleDragEnd}>
          {!parent ? (
            <Draggable id="draggable">Go ahead, drag me.</Draggable>
          ) : null}
          <Droppable id="droppable">
            {parent === "droppable" ? (
              <Draggable id="draggable">Go ahead, drag me.</Draggable>
            ) : (
              "Drop here"
            )}
          </Droppable>
          <div className="">
            {content?.options.map((option: any, index: number) => (
              <div key={option}>
                <Draggable id={`draggable-${index + 1}`}>{option}</Draggable>
              </div>
            ))}
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default SummaryQuestion;
