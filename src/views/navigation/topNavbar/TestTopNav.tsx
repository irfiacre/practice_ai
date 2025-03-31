"use client";
import React, { useEffect, useState } from "react";

const TestTopNav = () => {
//   const params: any = useParams();
  const [isActive, handleDropdown] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("Overview");

  useEffect(() => {
    const currentUrl = window.location.href.split("/");
  }, []);

  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-sidebar_background text-2xl capitalize">Reading</h1>
      <div className="mr-6 flex flex-row gap-3 items-center text-notificationIconColor">
        <div>
          <div className="relative inline-block text-left">
            <div onClick={() => handleDropdown((prevState) => !prevState)}>
              <span>Next</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTopNav;
