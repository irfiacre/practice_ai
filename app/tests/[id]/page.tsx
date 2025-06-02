"use client";
import React, { useEffect, useState } from "react";
import BaseCard from "@/src/components/base/BaseCard";
import { useParams } from "next/navigation";
import testData from "@/constants/tests.json";
import { useDispatch } from "react-redux";
import { resetTimer } from "@/store/reducers/timer";
import InstructionsView from "@/src/views/reading/instructionsView";
import { READING_INSTRUCTIONS } from "@/constants/instructions";
import ReadingTestView from "@/src/views/reading/ReadingTest";

const Page = () => {
  const { id } = useParams();
  const [practice, setPracice] = useState<any>({});
  const [sectionTracker, setSectionTracker] = useState<string>("reading");
  const [finishedInstructions, setFinishedInstructions] =
    useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const practiceData = testData.filter((elt: any) => elt.id === id)[0];
    setPracice(practiceData);
  }, [id]);

  const skipInstructions = () => {
    console.log("Shoudld skip instuctions");
    dispatch(resetTimer());
    setFinishedInstructions(true);
  };

  const handleNextQuestion = () => {
    console.log("------------->");
  };
  return (
    <div>
      <BaseCard className="p-6">
        {!finishedInstructions && (
          <InstructionsView
            handleSkipInstructions={skipInstructions}
            content={READING_INSTRUCTIONS}
          />
        )}
        {finishedInstructions && sectionTracker === "reading" && (
          <ReadingTestView
            passage={{
              title: practice.test?.reading.title || "No passage title --",
              content: practice.test?.reading.passage,
            }}
            questions={practice.test?.reading.questions || [{}]}
            handleNextClicked={handleNextQuestion}
          />
        )}
      </BaseCard>
    </div>
  );
};

export default Page;
