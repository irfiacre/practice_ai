"use client";
import SearchableInput from "@/src/components/inputs/SearchInput";
import LogoComponent from "@/src/components/logo/LogoComponent";
import React, { useState } from "react";
import MenuSection, { MenuItem } from "./MenuSection";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const Sidebar = () => {
  const sidebarMenu = {
    dashboard: [
      {
        title: "Dashboard",
        subtitle: "Daily analytics",
        url: "dashboard",
        icon: "material-symbols:dashboard",
      },
    ],
    sections: [
      {
        title: "Reading",
        subtitle: "Practice Toefl reading section",
        url: "reading",
        icon: "ri:book-read-fill",
      },
      {
        title: "Listening",
        subtitle: "Practice Toefl Listening section",
        url: "Listening",
        icon: "fluent:speaker-1-16-filled",
      },
      {
        title: "Speaking",
        subtitle: "Practice Toefl speaking section",
        url: "speaking",
        icon: "mdi:microphone",
      },
      {
        title: "Writing",
        subtitle: "Practice Toefl writing section",
        url: "writing",
        icon: "clarity:note-solid",
      },
    ]
  };
  const [searchText, setSearchText] = useState("");

  const handleSidebarSearch = (e: any) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  return (
    <div className="bg-sidebar_background px-6 py-9 h-lvh flex flex-col gap-6">
      <div>
        <LogoComponent small />
        <div className="py-3.5">
          <SearchableInput
            inputID="sidebarSearch"
            value={searchText}
            onInputChange={handleSidebarSearch}
            inputClassName="rounded-xl"
          />
        </div>
      </div>
      <div>
        <MenuItem content={sidebarMenu.dashboard[0]} />
      </div>
      <div>
        <MenuSection
          title="Individual Sections"
          menuItems={sidebarMenu.sections}
        />
      </div>
      <div className="py-6">
        <Link
          href="/courses"
          scroll={false}
          className="flex items-center text-text_light text-xl cursor-pointer hover:underline"
        >
          <p>Give us feedback </p>
          <Icon
            icon="mingcute:right-fill"
            fontSize={24}
            className="pt-1 -ml-1"
          />
        </Link>
      </div>
    </div>
  );
};
