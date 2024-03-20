"use client";

import { useState, useEffect, useCallback } from "react";
import Button from "@/app/components/button";
import Image from "next/image";

export default function Module3Landing({ handleOpen }) {
  const handleOpenCallback = () => {
    handleOpen();
  };

  return (
    <>
      <div className="full-container ">
        <div className="card container flex flex-col xl:flex-row-reverse items-start p-4 xl:pt-52 xl:pb-20 gap-4 xl:gap-0">
          <Image
            src="/images/detail/module3/hero.jpg"
            width={500}
            height={300}
            priority
            alt="image"
            className="md:ml-16 mt-32 md:mt-0"
            style={{ width: "100%", height: "auto" }}
          />

          <div className="card-body">
            <div className="page-header">Decision Phase</div>
            <div className="card-content text-white">
              <p className="body-default-20">
                In the upcoming phase of the simulation, you and your fellow
                board members will face a series of unexpected events demanding
                the Board's immediate involvement and governance. These
                hypothetical scenarios will intensify the pressure on the Board,
                compelling critical decisions.
              </p>

              <Button
                // onClick={() => {
                //   console.log("000");
                //   setShowNotify1(true);
                // }}

                onClick={() => {
                  handleOpenCallback();
                }}
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="block section-bg">
        <Image
          src="/images/detail/module3/hero.jpg"
          width={1920}
          height={1080}
          priority
          alt="image"
        />
      </div>
    </>
  );
}
