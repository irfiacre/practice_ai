import { getAllStaff } from "@/services/firebase/authentication";
import AnalyticsCard from "@/src/components/cards/AnalyticsCard";
import BaseCard from "@/src/components/base/BaseCard";
import React, { useEffect, useState, useRef } from "react";
import Datepicker from "react-tailwindcss-datepicker";

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
    return []
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
      title: "Applications",
      count: data.length,
    },
    {
      title: "Accepted",
      count: data.filter((elt: any) => elt.status === "approved").length,
    },
    {
      title: "Pending",
      count: data.filter((elt: any) => elt.status === "pending").length,
    },
    {
      title: "Rejected",
      count: data.filter((elt: any) => elt.status === "rejected").length,
    },
  ];
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row flex-wrap justify-between max-md:justify-start items-center gap-1.5 py-1.5">
        {analytics.map((item) => (
          <div className="w-60 py-1.5 max-sm:w-32" key={item.title}>
            <AnalyticsCard title={item.title} count={item.count} />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="w-2/5">
          <Datepicker
            value={dateRange}
            onChange={(val) => setDateRange(val)}
            primaryColor={"rose"}
            showShortcuts={true}
            showFooter
            placeholder="Report Date Range"
            maxDate={new Date()}
          />
        </div>
      </div>

      <BaseCard className="px-10 py-5">
        <div className="flex flex-row justify-between p-1.5 mb-5">
          <h1 className="text-xl">More statistics</h1>
          <span className="text-textLightColor font-light">Just Now</span>
        </div>
        {moreStatistics.map((item) => (
          <div key={item.title}>
            <div className="flex flex-row justify-between p-1.5">
              <h1 className="font-medium">{item.title}</h1>
              <span className="text-textLightColor">{item.count}</span>
            </div>
            <hr />
          </div>
        ))}
      </BaseCard>
    </div>
  );
};

export default DashboardPage;
