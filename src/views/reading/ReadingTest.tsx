import Passage from "@/src/components/testUI/passage";
import QuestionComponent from "@/src/components/testUI/question";
import React from "react";

const InitialPassageView =({passage}:{passage: string})=>{
  <p>
    {passage}
  </p>
};

const ReadingTestView = ({
  passage,
  questions,
}: {
  passage: any;
  questions: any;
}) => {
  const initial_passage=""
  return (
    <div>
      <Passage />
      <QuestionComponent />
    </div>
  );
};

export default ReadingTestView;
