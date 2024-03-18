import React, { useState, useEffect } from "react";

import Button from "@/app/components/button";
import Image from "next/image";

export default function TaskForm01({ submitActions, submitText }) {
  const [isFormDisable, setIsFormDisable] = useState(false);

  return (
    <div className="full-container bg-[#E9EBEF] mt-32 mb-16 xl:px-12">
      <div className="container">
        <div className="py-8 xl:py-14 text-3xl font-semibold ">
          Extraordinary Meeting #1
        </div>
      </div>
      <div className="container flex flex-col md:grid grid-cols-3 gap-5 h-min bg-white p-12">
        <div>
          <div className="text-primary-red">Your task</div>
          <p>
            Prepare a list of five questions to ask your CEO and CFO in the next
            Extraordinary Meeting
          </p>
        </div>
        <form
          className={`col-span-2 flex flex-col gap-4 ${
            isFormDisable ? "form-disabled" : ""
          }`}
        >
          <div className="flex bg-[#F6F6F7] p-6 gap-3">
            <label htmlFor="input1" className="">
              1
            </label>
            <textarea type="text" id="input1" disabled={isFormDisable} />
          </div>
          <div className="flex bg-[#F6F6F7] p-6 gap-3">
            <label htmlFor="input2" className="">
              2
            </label>
            <textarea type="text" id="input2" disabled={isFormDisable} />
          </div>
          <div className="flex bg-[#F6F6F7] p-6 gap-3">
            <label htmlFor="input3" className="">
              3
            </label>
            <textarea type="text" id="input3" disabled={isFormDisable} />
          </div>
          <div className="flex bg-[#F6F6F7] p-6 gap-3">
            <label htmlFor="input4" className="">
              4
            </label>
            <textarea type="text" id="input4" disabled={isFormDisable} />
          </div>
          <div className="flex bg-[#F6F6F7] p-6 gap-3">
            <label htmlFor="input5" className="">
              5
            </label>
            <textarea type="text" id="input5" disabled={isFormDisable} />
          </div>
          <Button
            onClick={() => {
              console.log("008");
              submitActions();
              // setShowEOMSubmitModal(true);
              // setIsEomSubmitted(true);
              // setIsFormDisable(true);
            }}
            className={"ml-auto w-full max-w-80"}
          >
            Proceed
          </Button>
        </form>
      </div>
    </div>
  );
}
