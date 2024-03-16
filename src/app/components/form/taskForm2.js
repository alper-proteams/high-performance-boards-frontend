import React, { useState, useEffect } from "react";

import Button from "@/app/components/button";
import Image from "next/image";

export default function TaskForm2({ submitActions, submitText }) {
  const [isTaskForm2Submitted, setIsTaskForm2Submitted] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  return (
    <div className="full-container bg-[#E9EBEF] mb-16 pt-8 xl:px-12">
      <div className="container bg-primary-red text-white w-fit !ml-12 h-11 flex items-center text-base font-semibold">
        New
      </div>
      <div className="container flex flex-col md:grid grid-cols-3 gap-5 h-min bg-white p-12">
        <div>
          <div className="text-primary-red">Your task</div>
          <p>
            Formulate a strategic response plan in light of the now-publicized
            takeover offer.
          </p>
        </div>
        {/* <form className="col-span-2 flex flex-col gap-4"> */}
        <form
          className={`col-span-2 flex flex-col gap-4 ${
            isTaskForm2Submitted ? "form-disabled" : ""
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
              disabled={isTaskForm2Submitted}
              placeholder="02"
            />
          </div>

          <Button
            disabled={isTaskForm2Submitted}
            onClick={() => {
              submitActions();
              setIsTaskForm2Submitted(true);
              setDisableButton(true);
              console.log("TaskForm2 Submitted");
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
