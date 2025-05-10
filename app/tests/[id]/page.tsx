"use client";
import React, { useEffect, useState } from "react";
import BaseCard from "@/src/components/base/BaseCard";
import { useParams } from "next/navigation";
import testData from "@/constants/tests.json";
import { useDispatch, useSelector } from "react-redux";
import { startTimer } from "@/store/reducers/timer";
import BaseButton from "@/src/components/base/BaseButton";

const Page = () => {
  const { id } = useParams();
  const [test, setTest] = useState<any>({});
  const dispatch = useDispatch();

  useEffect(() => {
    const test = testData.filter((elt: any) => elt.id === id)[0];
    setTest(test);
    dispatch(startTimer(3));
  }, [id]);

  return (
    <div>
      <BaseCard className="space-y-2 px-10">
        <h1 className="text-primary text-xl font-semibold text-center mt-5 py-2.5">
          Instructions
        </h1>
        <hr />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit
            amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
            consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
            adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
            ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor
            sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
            consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
            adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
            ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor
            sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
            consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
            adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
            sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
            consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
            adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
            ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
        <hr />
        <div className="py-5 text-center">
          <BaseButton>Skip (Start test)</BaseButton>
        </div>
      </BaseCard>
    </div>
  );
};

export default Page;
