import React from "react";
import BaseRadioButton from "../base/BaseRadioButton";

const QuestionComponent = ({ content }: { content: any }) => {
  const { question, options } = content;
  return (
    <div>
      <h1>{question}</h1>(
      <div>
        {options?.map((option: any) => (
          <div className="flex justify-start items-center" key={option}>
            <BaseRadioButton
              handleClicked={() => console.log("Radio clicked")}
            />
            <span> {option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionComponent;
