"use client";

import React, { useState } from "react";
import Button from "@/app/components/button";

const AssessmentForm = () => {
  return (
    <form className="container">
      <div className="flex max-w-[650px] justify-center items-center mx-auto bg-secondary-gray p-4 gap-1">
        <div className="flex gap-1 text-sm mr-5">
          <label className="">Upload your file</label>
        </div>
        <div className="flex gap-1">
          <input
            className=""
            name="fileToUpload"
            id="fileToUpload"
            type="file"
          />
        </div>

        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};

export default AssessmentForm;
