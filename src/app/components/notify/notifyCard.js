import Button from "@/app/components/button";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function NotifyCard({
  recipient = "available",
  content = 1,
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
  // const handleOpenCallback = useCallback(() => {
  //   handleOpen();
  // }, [handleOpen]);

  const handleOpenCallback = () => {
    handleOpen();
  };

  return (
    <div
      className={`fixed scroll-transition right-5 bg-primary-red z-10 p-5 ${
        stickyNav ? "top-20" : "top-40"
      }`}
    >
      <div className="text-white flex gap-4 mb-5">
        <Image
          src="/images/common/envelope.svg"
          alt="E-mail"
          width={27}
          height={21}
        />
        Email
      </div>

      <div className="bg-white p-6 text-primary-black flex flex-col items-start gap-5 md:min-w-80 font-semibold">
        Email from
        <br />
        {recipient}
        <Button
          // onClick={() => handleOpenCallback()}
          onClick={handleOpenCallback}
          className="!bg-primary-black"
        >
          Open
        </Button>
      </div>
    </div>
  );
}
