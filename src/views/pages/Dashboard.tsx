"use client";
import { getAllStaff } from "@/services/firebase/authentication";
import AnalyticsCard from "@/src/components/cards/AnalyticsCard";
import BaseCard from "@/src/components/base/BaseCard";
import React, { useEffect, useState } from "react";
import testData from "@/constants/tests.json";
import SearchableTable from "@/src/components/tables/SearchableTable";

const DashboardPage = () => {
  const moreStatistics = [
    { title: "Finished Onboarding", count: 0 },
    { title: "Currently Onboarding", count: 2 },
    { title: "Available courses", count: 1 },
  ];
  const fetchStaff = async () => await getAllStaff();

  const [allStaff, setStaff] = useState([]);
  const [user, setUser] = useState<any>(null);
  const [generating, setGenerating] = useState(false);
  const [dateRange, setDateRange] = useState<any>({
    startDate: new Date().setMonth(new Date().getMonth() - 1),
    endDate: new Date(),
  });
  const [loading, setLoading] = useState(false);

  const initialFindApplications = async () => {
    return [];
  };

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const userObj = JSON.parse(userStr);
      if (userObj.role === "admin") {
        fetchStaff().then((result: any) => setStaff(result));
      }
      setUser(userObj);
    }
  }, []);

  const [data, setData] = useState<any>([]);
  const handleOnUpdateData = (newChanges: any) =>
    setData((prevData: any) => [...prevData, newChanges]);

  useEffect(() => {
    initialFindApplications();
  }, []);

  const analytics = [
    {
      title: "Questions",
      count: data.length,
    },
    {
      title: "By Community",
      count: data.filter((elt: any) => elt.status === "approved").length,
    },
    {
      title: "By AI",
      count: data.filter((elt: any) => elt.status === "pending").length,
    },
    // {
    //   title: "Rejected",
    //   count: data.filter((elt: any) => elt.status === "rejected").length,
    // },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row flex-wrap justify-start max-md:justify-start items-center gap-3 py-1.5">
        {analytics.map((item) => (
          <div className="w-60 py-1.5 max-sm:w-32" key={item.title}>
            <AnalyticsCard title={item.title} count={item.count} />
          </div>
        ))}
          <SearchableTable data={testData} />
      </div>
    </div>
  );
};

export default DashboardPage;
