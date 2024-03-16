import React, { useState, useEffect } from "react";

import Button from "@/app/components/button";
import Image from "next/image";

export default function TaskForm3({ submitActions, submitText }) {
  const [isTaskForm3Submitted, setIsTaskForm3Submitted] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  return (
    <div className="full-container bg-[#E9EBEF] mt-32 xl:px-12">
      <div className="container">
        <div className="py-8 xl:py-14 text-3xl font-semibold ">
          Extraordinary Meeting #2
        </div>
      </div>
      <div className="container flex flex-col md:grid grid-cols-3 gap-5 h-min bg-white p-12">
        <div>
          <div className="text-primary-red">Your task</div>
          <p>
            Develop a comprehensive action plan to address the whistleblower
            situation.
          </p>
        </div>
        {/* <form className="col-span-2 flex flex-col gap-4"> */}
        <form
          className={`col-span-2 flex flex-col gap-4 ${
            isTaskForm3Submitted ? "form-disabled" : ""
          }`}
        >
          <div className="flex bg-[#F6F6F7] p-6 gap-3">
            <label htmlFor="input1" className="">
              1
            </label>
            <textarea
              type="text"
              id="input1"
              className=" min-h-48"
              disabled={isTaskForm3Submitted}
              placeholder="03"
            />
          </div>

          <Button
            disabled={isTaskForm3Submitted}
            onClick={() => {
              submitActions();
              setIsTaskForm3Submitted(true);
              setDisableButton(true);
              console.log("TaskForm3 Submitted");
            }}
            // type="submit"
            className={"ml-auto w-full max-w-80"}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
