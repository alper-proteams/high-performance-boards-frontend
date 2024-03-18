import React, { useState, useEffect } from "react";

import Button from "@/app/components/button";
import Image from "next/image";

export default function TaskForm3({ submitActions, submitText }) {
  const [isFormDisable, setIsFormDisable] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormDisable(false);
    }, 1560000); // 26 min 1560000 // 5000

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    submitActions();
    setIsFormDisable(true);
  };

  return (
    <div className="full-container bg-[#E9EBEF] mt-32 xl:px-12">
      <div className="container">
        <div className="py-8 xl:py-14 text-3xl font-semibold ">
          Extraordinary Meeting #3
        </div>
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
        <form className={`col-span-2 flex flex-col gap-4`}>
          <div className="flex bg-[#F6F6F7] p-6 gap-3">
            <label htmlFor="input1" className="">
              1
            </label>
            <textarea
              type="text"
              id="input1"
              className=" min-h-48"
              // disabled={isFormDisable}
              placeholder=""
            />
          </div>

          {/* <Button
            disabled={isFormDisable}
            onClick={handleClick}
            // onClick={() => {
            //   submitActions();
            //   setIsFormDisable(true);
            // }}
            // type="submit"
            className={"ml-auto w-full max-w-80"}
          >
            Proceed
          </Button> */}
        </form>
      </div>
    </div>
  );
}
