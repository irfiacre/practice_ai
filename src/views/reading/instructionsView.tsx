"use client";
import React, { useEffect, useState } from "react";
import BaseCard from "@/src/components/base/BaseCard";
import { useParams } from "next/navigation";
import testData from "@/constants/tests.json";
import { useDispatch, useSelector } from "react-redux";
import { startTimer } from "@/store/reducers/timer";
import BaseButton from "@/src/components/base/BaseButton";

const InstructionsView = ({
  handleSkipInstructions,
  content,
}: {
  handleSkipInstructions: () => void;
  content: string;
}) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startTimer(3));
  }, [id]);

  return (
    <div>
      <div className="space-y-">
        <h1 className="text-primary text-xl font-semibold text-center mt-5 py-2.5">
          Instructions
        </h1>
        <hr />
        <div>
          <p>{content}</p>
        </div>
        <hr />
        <div className="py-5 text-center">
          <BaseButton handleClick={handleSkipInstructions}>
            Skip (Start test)
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default InstructionsView;
