"use client";
import React, { useEffect, useState } from "react";
import BaseCard from "../base/BaseCard";
import SearchableInput from "../inputs/SearchInput";
import Pagination from "./Pagination";
import Link from "next/link";
import BaseModel from "../base/BaseModel";
import CreateOnboardingPlan from "@/src/views/forms/CreateOnboardingPlan";
import { Icon } from "@iconify/react";
import { generateId } from "@/util/helpers";
import {
  createDocEntry,
  deleteDocEntryById,
  updateDocEntry,
} from "@/services/firebase/helpers";
import { PLANS_COLLECTION } from "@/constants/collectionNames";
import { toast } from "react-toastify";
import PillComponent from '../PillComponent';

interface SearchableTableProps {
  data: Array<any>;
}

const SearchableTable = ({ data }: SearchableTableProps) => {
  const [searchText, setSearchText] = useState("");
  const [tableData, updateTableData] = useState(data);
  const [openModel, setOpenCourseModel] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [editValues, setEditValues] = useState({
    title: "",
    description: "",
    id: "",
  });

  useEffect(() => {
    updateTableData(
      data.filter((item) =>
        searchText.trim() === ""
          ? item
          : item.title.toLowerCase().includes(searchText.trim().toLowerCase())
      )
    );
  }, [data, searchText]);

  const handleSidebarSearch = (e: any) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleCreatePlan = async (planObj: "create" | any) => {
    if (planObj === "create") {
      setOpenCourseModel(true);
    } else {
      setLoading(true);
      const planFormat = editValues.title
        ? {
            ...editValues,
            title: planObj.title,
            description: planObj.description,
          }
        : {
            ...planObj,
            id: generateId(planObj.title),
            status: "pending",
            createdAt: new Date().toISOString(),
            courses: [],
          };

      const planAdded = editValues.title
        ? await updateDocEntry(PLANS_COLLECTION, planFormat.id, planFormat)
        : await createDocEntry(PLANS_COLLECTION, planFormat);
      if (planAdded) {
        toast.success("Course Created", {
          hideProgressBar: true,
          closeOnClick: true,
          autoClose: 3000,
        });
        handleCloseModel();
      }
      setLoading(false);
    }
  };

  const handleCloseModel = () => {
    setOpenCourseModel(false);
    setEditValues({
      title: "",
      description: "",
      id: "",
    });
  };

  const handleEditPlan = (plan: any) => {
    setOpenCourseModel(true);
    setEditValues({
      title: plan.title,
      description: plan.description,
      id: plan.id,
    });
  };

  const handleDelete = async (plan: any) => {
    const deleted = await deleteDocEntryById(PLANS_COLLECTION, plan.id);
    if (deleted) {
      toast.success(`${plan.title} is Deleted`, {
        hideProgressBar: true,
        closeOnClick: true,
        autoClose: 3000,
      });
    }
  };

  return (
    <BaseCard className="px-10 py-5">
      <SearchableInput
        inputID="sidebarSearch"
        value={searchText}
        onInputChange={handleSidebarSearch}
        inputClassName="rounded-xl bg-white"
      />
      <br />
      {openModel && (
        <BaseModel
          title={
            editValues.title ? `Edit (${editValues.title})` : "Create Plan"
          }
          onClose={handleCloseModel}
          containerStyle="w-4/5 p-10"
        >
          <div className="">
            <CreateOnboardingPlan
              onFormSubmit={handleCreatePlan}
              defaultDescription={editValues.description}
              defaultTitle={editValues.title}
              loading={loading}
            />
          </div>
        </BaseModel>
      )}
      <div className="py-2.5 text-text_light text-base font-semibold flex flex-row align-middle items-center px-1.5 gap-3.5 cursor-pointer bg-background_color">
        <span className="w-full">Title</span>
        <span className="w-full">Description</span>
        <span className="w-2/4">Taken</span>
      </div>
      <hr />
      <div>
        {tableData.map((item) => (
          <div key={item.id}>
            <div className="flex flex-row align-middle items-center py-2.5 px-1.5 gap-1.5 cursor-pointer hover:bg-background_color">
              <div className="w-full">
                <Link href={`/tests/${item.id}`}>
                  <span>{item.title}</span>
                  <p className="font-medium text-xs text-text_light py-2">{`${item.likeness}% (Toefl likeness)`}</p>
                </Link>
              </div>
              <div className="text-sm w-full">
                <Link href={`/tests/${item.id}`}>
                  <span className="text-textLightColor font-light">
                    {item.description}
                  </span>
                </Link>
              </div>
              <div className="w-2/4">
                <span>{item.taken}</span>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="w-full py-10">
        <Pagination prevPage={1} currentPage={1} nextPage={3} totalPages={1} />
      </div>
    </BaseCard>
  );
};

export default SearchableTable;
