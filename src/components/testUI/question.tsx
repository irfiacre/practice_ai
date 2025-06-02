import React from "react";
import BaseRadioButton from "../base/BaseRadioButton";

const QuestionComponent = ({
  content,
  handleSelectedOption,
}: {
  content: any;
  handleSelectedOption: (data: string) => void;
}) => {
  const { question, options } = content;
  return (
    <div className="py-11 px-3">
      <h1>{question}</h1>
      <div>
        {options?.map((option: any) => (
          <div className="flex justify-start items-center" key={option}>
            <BaseRadioButton
              value={option}
              handleClicked={(value) => handleSelectedOption(value)}
            />
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionComponent;
