"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/button";
import Modal from "@/app/components/modal";
import MailPopup from "@/app/components/mailPopup";

export default function Module3() {
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleScroll = () => {
    window.scrollY >= 39 ? setStickyNav(true) : setStickyNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative">
      {isOpen && <MailPopup />}

      <div className="full-container ">
        <div className="card container flex flex-col xl:flex-row-reverse items-start p-4 xl:pt-52 xl:pb-20 gap-4 xl:gap-0">
          <Image
            src="/images/detail/module3/hero.jpg"
            width={500}
            height={300}
            priority
            alt="image"
            className="ml-16"
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

              <Button onClick={handleClick}>Proceed</Button>
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
    </section>
  );
}
