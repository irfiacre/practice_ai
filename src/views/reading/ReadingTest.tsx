import Passage from "@/src/components/testUI/passage";
import QuestionComponent from "@/src/components/testUI/question";
import React from "react";

const InitialPassageView = ({ passage }: { passage: string }) => {
  <p>{passage}</p>;
};

const ReadingTestView = ({
  passage,
  questions,
}: {
  passage: any;
  questions: any;
}) => {
  // const initial_passage = "";
  return (
    <div className="p-2 items-start flex justify-start gap-2">
      <div className="w-full">
        <Passage content={passage.content} title={passage.title} />
      </div>
      <div className="w-full">
        <QuestionComponent content={questions[0]} />
      </div>
    </div>
  );
};

export default ReadingTestView;
