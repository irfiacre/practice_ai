"use client";
import React, { useState } from "react";
import BaseInput from "../../components/base/BaseInput";

interface CreateUserState {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  cooperative: string;
}

const CreateUser = ({
  onFormSubmit,
}: {
  defaultDescription?: string;
  onFormSubmit: (obj: CreateUserState) => void;
}) => {
  const [state, setState] = useState<CreateUserState>({
    first_name: "",
    last_name: "",
    email: "",
    role: "officer",
    cooperative: "",
  });

  const handleInputChange = (e: any) => {
    e.preventDefault();

    setState((prevState: any) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    onFormSubmit(state);
  };
  return (
    <form className="w-full">
      <div>
        <div className="w-full flex flex-row justify-between">
          <div className="w-full">
            <BaseInput
              label="First Name"
              value={state.first_name}
              placeholder="First Name"
              onInputChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <BaseInput
              label="Last Name"
              value={state.last_name}
              placeholder="Last Name"
              onInputChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="w-full">
            <BaseInput
              label="Email"
              value={state.email}
              placeholder="Email"
              onInputChange={handleInputChange}
            />
          </div>

          <div className="w-full p-3.5">
            <label
              htmlFor="role"
              className="block mb-2 text-base text-black-500 font-bold"
            >
              Choose Role
            </label>
            <select
              id="role"
              className="block w-full p-2 h-14 bg-background_color border border-border_light focus:bg-white focus:border-border_light text-md rounded-md  focus:outline-none disabled:bg-background_color2"
              onChange={handleInputChange}
            >
              <option value="officer">Officer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        <BaseInput
          label="Cooperative"
          value={state.cooperative}
          placeholder="Cooperative (Optional)"
          onInputChange={handleInputChange}
        />
      </div>
      <div className="p-3.5">
        <button
          type="submit"
          onClick={handleSubmitForm}
          className="w-full h-16 text-white bg-primary hover:bg-primaryDark focus:outline-none  font-medium rounded-md text-md text-center py-3"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateUser;
