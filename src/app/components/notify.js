"use client";

import { useState, useEffect, useCallback } from "react";
import Button from "@/app/components/button";
import Image from "next/image";

export default function Notify({
  showNotify,
  setShowNotify,
  children,
  recipient = "available",
  imageLink,
  handleOpen,
}) {
  const [stickyNav, setStickyNav] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 39) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleOpenCallback = () => {
    handleOpen();
  };
  return (
    <>
      {showNotify ? (
        <>
          <div
            className={`fixed scroll-transition w-full left-4 right-0 md:right-5 md:left-auto bg-primary-red max-w-[360px] z-50 p-5 ${
              stickyNav ? "top-20" : "top-40"
            }`}
          >
            {children}
            <div className="text-white flex gap-4 mb-5">
              <Image
                src="/images/common/envelope.svg"
                alt="E-mail"
                width={27}
                height={21}
                className=" w-auto h-auto"
                // style={{ width: "auto", height: "auto" }}
                // style={{ objectFit: "contain" }}
              />
              Email
            </div>

            {imageLink && (
              <div className="bg-white p-4 text-primary-black flex flex-col items-start gap-5 md:min-w-80 font-semibold">
                <Image
                  onClick={() => {
                    handleOpenCallback();
                  }}
                  src={imageLink}
                  width={500}
                  height={300}
                  priority
                  alt="image"
                  className="cursor-pointer"
                  style={{ width: "100%", height: "auto" }}
                />
                <Button
                  onClick={() => {
                    handleOpenCallback();
                  }}
                  className="!bg-primary-black w-full"
                >
                  Watch MNBC Video
                </Button>
              </div>
            )}

            {!imageLink && (
              <div className="bg-white p-6 text-primary-black flex flex-col items-start gap-5 md:min-w-80 font-semibold">
                Email from
                <br />
                {recipient}
                {!imageLink && (
                  <Button
                    onClick={() => {
                      handleOpenCallback();
                    }}
                    className="!bg-primary-black"
                  >
                    Open
                  </Button>
                )}
              </div>
            )}
          </div>
          <div
            onClick={() => {
              setShowNotify(false);
              console.log("Notify modal click");
            }}
            className=" opacity-25 fixed inset-0 z-40 bg-primary-black"
          ></div>
        </>
      ) : null}
    </>
  );
}
