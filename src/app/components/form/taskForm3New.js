import React, { useState, useEffect } from "react";

import Button from "@/app/components/button";
import Image from "next/image";

export default function TaskForm3New({ submitActions, submitText }) {
  const [isFormDisable, setIsFormDisable] = useState(false);

  return (
    <div className="full-container bg-[#E9EBEF] pt-12 pb-24">
      <div className="container bg-primary-red text-white w-fit !ml-24 h-11 flex items-center text-base font-semibold">
        New
      </div>
      <div className="container flex flex-col md:grid grid-cols-3 gap-5 h-min bg-white p-12">
        <div>
          <div className="text-primary-red">Your task</div>
          <p>
            Create a strategic response plan in response to the corruption news.
          </p>
        </div>
        {/* <form className="col-span-2 flex flex-col gap-4"> */}
        <form
          className={`col-span-2 flex flex-col gap-4 ${
            isFormDisable ? "form-disabled" : ""
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
              disabled={isFormDisable}
              placeholder=""
            />
          </div>

          <Button
            disabled={isFormDisable}
            onClick={() => {
              submitActions();
              setIsFormDisable(true);
            }}
            // type="submit"
            className={"ml-auto w-full max-w-80"}
          >
            Proceed
          </Button>
        </form>
      </div>
    </div>
  );
}
