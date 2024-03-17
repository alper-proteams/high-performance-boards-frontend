import React, { useState, useEffect } from "react";

import Button from "@/app/components/button";
import Image from "next/image";

export default function TaskForm3New({ submitActions, submitText }) {
  const [isTaskForm3NewSubmitted, setIsTaskForm3NewSubmitted] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  return (
    <div className="full-container bg-[#E9EBEF] mt-32 xl:px-12">
      <div className="container bg-primary-red text-white w-fit !ml-12 h-11 flex items-center text-base font-semibold">
        New
      </div>
      <div className="container flex flex-col md:grid grid-cols-3 gap-5 h-min bg-white p-12">
        <div>
          <div className="text-primary-red">Your task</div>
          <p>
            03NEW-Develop a comprehensive action plan to address the
            whistleblower situation.
          </p>
        </div>
        {/* <form className="col-span-2 flex flex-col gap-4"> */}
        <form
          className={`col-span-2 flex flex-col gap-4 ${
            isTaskForm3NewSubmitted ? "form-disabled" : ""
          }`}
        >
          <div className="flex bg-[#F6F6F7] p-6 gap-3">
            <label htmlFor="input1" className="">
              2
            </label>
            <textarea
              type="text"
              id="input1"
              className=" min-h-48"
              disabled={isTaskForm3NewSubmitted}
              placeholder="02"
            />
          </div>

          <Button
            disabled={isTaskForm3NewSubmitted}
            onClick={() => {
              submitActions();
              setIsTaskForm3NewSubmitted(true);
              setDisableButton(true);
              console.log("TaskForm3New Submitted");
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
