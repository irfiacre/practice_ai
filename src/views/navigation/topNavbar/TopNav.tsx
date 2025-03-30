"use client";
import { PLACEHOLDER_IMG } from "@/constants/fixtures";
import { signOutUser } from "@/services/firebase/authentication";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const TopNav = ({ title }: { title?: string }) => {
  const params: any = useParams();
  const [isActive, handleDropdown] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("Overview");

  const router = useRouter();
  const handleLogout = async () => {
    localStorage.removeItem("user");
    await signOutUser();
    router.replace("/");
  };

  useEffect(() => {
    const currentUrl = window.location.href.split("/");
    setCurrentTitle(
      params.id
        ? `${params.id?.substring(0, 20)}...`
        : currentUrl[currentUrl.length - 1]
        ? currentUrl[currentUrl.length - 1]
        : "overview"
    );
  }, [params]);


  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-sidebar_background text-2xl capitalize">{currentTitle}</h1>
      <div className="mr-6 flex flex-row gap-3 items-center text-notificationIconColor">
        <div className="">
          <Icon icon="zondicons:notification" fontSize={20} />
        </div>
        <div>|</div>
        <div>
          <span>xxx</span>
        </div>
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

export default TopNav;
