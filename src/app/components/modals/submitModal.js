import React, { useState, useEffect } from "react";

import Button from "@/app/components/button";
import Image from "next/image";

export default function SubmitModal({ submitActions, submitText }) {
  return (
    <>
      <div className="meeting-card flex flex-col py-8 px-8 bg-white">
        <Image
          className="mx-auto my-auto w-auto h-auto"
          src="/images/common/meeting-envelope.svg"
          alt="E-mail"
          width={250}
          height={250}
        />
        <div className="h5-bold text-primary-red text-center my-11 max-w-[400px] mx-auto">
          {submitText}
        </div>
        <Button
          className={"w-full mt-auto"}
          onClick={() => {
            submitActions();
          }}
        >
          Review
        </Button>
      </div>
    </>
  );
}
