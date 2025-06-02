import BaseButton from "@/src/components/base/BaseButton";
import Passage from "@/src/components/testUI/passage";
import QuestionComponent from "@/src/components/testUI/question";
import { addAnswer } from "@/store/reducers/attempt/readingAnswers";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const InitialPassageView = ({ passage }: { passage: string }) => {
  <p>{passage}</p>;
};

const ReadingTestView = ({
  passage,
  questions,
  handleNextClicked,
}: {
  passage: any;
  questions: any;
  handleNextClicked: () => void;
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const readingAnswersStore = useSelector((state: any) => state.readingAnswers);
  const dispatch = useDispatch();

  const handleNextQuestion = () => {
    if (!selectedOption) {
      alert("Please select an option");
      return;
    }
    dispatch(
      addAnswer({
        questionId: currentQuestionIndex,
        answer: selectedOption,
        passage: 0,
      })
    );
    setCurrentQuestionIndex((prevIndex: number) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
    );
    setSelectedOption(null);
    handleNextClicked();
  };

  return (
    <div className="items-start flex justify-start gap-2">
      <div className="w-full">
        <Passage content={passage.content} title={passage.title} />
      </div>
      <div className="w-full">
        <div className="float-right">
          <BaseButton className="py-1" handleClick={handleNextQuestion}>
            {" "}
            Next{" "}
          </BaseButton>
        </div>
        <QuestionComponent
          handleSelectedOption={(option) => setSelectedOption(option)}
          content={questions[currentQuestionIndex]}
        />
      </div>
    </div>
  );
};

export default ReadingTestView;
