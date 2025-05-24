"use client";
import BaseButton from "@/src/components/base/BaseButton";
import { TimerState } from "@/store/reducers/timer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TestTopNav = () => {
  //   const params: any = useParams();
  const router = useRouter();
  const [isActive, handleDropdown] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("Overview");
  const { minutes, seconds } = useSelector((state: any) => state.timer);

  const [timeRemaining, setTimeRemaining] = useState<TimerState>({
    minutes: 0,
    seconds: 0,
  });
  const [pauseTimer, setPauseTimer] = useState<boolean>(false);

  useEffect(() => {
    setTimeRemaining({
      minutes,
      seconds,
    });
  }, [minutes, seconds]);

  useEffect(() => {
    if (timeRemaining.minutes >= 0) {
      const countdownInterval = setInterval(() => {
        setTimeRemaining((prevState: TimerState) => ({
          ...prevState,
          seconds: prevState.seconds - 1,
        }));
        if (timeRemaining.minutes === 0 && timeRemaining.seconds === 0) {
          alert("Time is up!");
          clearInterval(countdownInterval);
        }
        if (timeRemaining.seconds <= 0) {
          setTimeRemaining((prevState: TimerState) => ({
            ...prevState,
            minutes: prevState.minutes - 1,
            seconds: seconds,
          }));
          clearInterval(countdownInterval);
        }
      }, 1000);
      if (pauseTimer) {
        clearInterval(countdownInterval);
      }

      return () => clearInterval(countdownInterval);
    }
  }, [timeRemaining, pauseTimer]);

  useEffect(() => {
    const currentUrl = window.location.href.split("/");
  }, []);

  return (
    <div className="flex flex-row justify-between items-center py-2">
      <div className="flex flex-row items-center gap-2">
        <Icon
          icon="ion:chevron-back"
          fontSize={24}
          className="text-sidebar_background cursor-pointer"
          onClick={() => router.back()}
        />
        <h1 className="text-sidebar_background text-2xl capitalize">Reading</h1>
      </div>
      <h1 className="text-sidebar_background text-2xl capitalize">
        Timer: {`${timeRemaining.minutes}:${timeRemaining.seconds}`}
      </h1>
      <div className="mr-6 flex flex-row gap-3 items-center text-notificationIconColor">
        <div>
          <div className="relative inline-block text-left w-full">
            <BaseButton
              // handleClick={() => handleNextClicked()}
            >
              Next
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTopNav;
