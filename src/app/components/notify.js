"use client";

import { useState, useEffect, useCallback } from "react";
import Button from "@/app/components/button";
import Image from "next/image";

export default function Notify({
  showNotify,
  setShowNotify,
  children,
  recipient = "available",
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
            className={`fixed scroll-transition right-5 bg-primary-red z-50 p-5 ${
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

            <div className="bg-white p-6 text-primary-black flex flex-col items-start gap-5 md:min-w-80 font-semibold">
              Email from
              <br />
              {recipient}
              <Button
                // onClick={handleOpenCallback}
                onClick={() => {
                  handleOpenCallback();
                }}
                className="!bg-primary-black"
              >
                Open
              </Button>
            </div>
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
