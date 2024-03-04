"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/button";
import { useAuth } from "@/app/contexts/auth.context";
import Modal from "@/app/components/modal";

export default function Navbar() {
  const pathname = usePathname();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = React.useState(false);

  const handleScroll = () => {
    window.scrollY >= 39 ? setStickyNav(true) : setStickyNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavToggle = () => {
    // setIsNavOpen((prev) => !prev);
    setIsNavOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="hidden h-10"> </div>
      <header
        className={` ${
          stickyNav
            ? "h-[72px] xl:h-14 top-0 fixed"
            : "h-[72px] xl:h-24 top-10 absolute"
        } scroll-transition left-0 right-0 mx-auto w-full bg-white min-h-14 z-20 top-0`}
      >
        <nav className="flex flex-row justify-between container items-center h-full">
          <Link onClick={handleNavToggle} href="/">
            <Image
              src="/logo.svg"
              alt="HPB Logo"
              className={`scroll-transition w-auto ${
                stickyNav ? "h-8 xl:h-8" : "h-8 xl:h-16 "
              }`}
              width={205}
              height={52}
            />
          </Link>

          <ul
            className={`nav ${isNavOpen ? "flex" : "hidden xl:flex"}`}
            onClick={handleNavToggle}
          >
            {/* <li>
            <Link
              className={`nav-item ${
                pathname === "/" ? " text-red-400" : "text-white md:text-gray-700"
              }`}
              href="/"
            >
              Home
            </Link>
          </li> */}
            <li>
              <Link
                className={`nav-item ${
                  pathname === "/about"
                    ? " text-red-400"
                    : "text-white md:text-gray-700"
                }`}
                href="/about"
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link
                className={`nav-item ${
                  pathname === "/resources"
                    ? " text-red-400"
                    : "text-white md:text-gray-700"
                }`}
                href="/resources"
              >
                Resources
              </Link>
            </li> */}
            {/* <li>
              <Link
                className={`nav-item ${
                  pathname === "/testimonials"
                    ? " text-red-400"
                    : "text-white md:text-gray-700"
                }`}
                href="/testimonials"
              >
                Testimonials
              </Link>
            </li> */}
            <li>
              <Link
                className={`nav-item ${
                  pathname === "/contact"
                    ? " text-red-400"
                    : "text-white md:text-gray-700"
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="ml-auto md:ml-0 mr-4 md:mr-0">
            {user ? (
              <Button
                className={`scroll-transition items-center px-6 xl:px-20 ${
                  stickyNav ? "h-10" : "h-10 xl:h-12"
                }`}
                onClick={handleLogout}
              >
                {user.username} / Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button
                  className={`scroll-transition items-center px-6 xl:px-20 ${
                    stickyNav ? "h-10" : "h-10 xl:h-12"
                  }`}
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
          <div
            className={`flex xl:hidden items-center justify-center cursor-pointer ${
              isNavOpen ? "bg-primary-black is-active" : "bg-primary-red"
            }`}
          >
            <div
              className={`hamburger flex flex-col items-center justify-center h-10 w-10 space-y-2 md:hidden ${
                isNavOpen ? "is-active" : ""
              }`}
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="line block h-0.5 w-6 bg-white"></span>
              <span className="line block h-0.5 w-6 bg-white"></span>
              <span className="line block h-0.5 w-6 bg-white"></span>
            </div>
          </div>
        </nav>

        {/* Mail Modal */}
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          // title={"Take Over Letter"}
        >
          <div className="relative p-6 flex-auto">
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="text-primary-red max-w-[75px] col-span-1">TO</div>
              <div className="col-span-3">Members of the Supervisory Board</div>
              <div className="text-primary-red max-w-[75px] col-span-1">
                FROM
              </div>
              <div className="col-span-3">Chair of the Supervisory Board</div>
              <div className="text-primary-red max-w-[75px] col-span-1">
                DATE
              </div>
              <div className="col-span-3">10 April 2024 at 18:51 </div>
              <div className="text-primary-red max-w-[75px] col-span-1">
                SUBJECT
              </div>
              <div className="col-span-3">
                Call for an Extraordinary Meeting
              </div>
            </div>

            <p className="body-default-16 mb-5">Dear Directors,</p>
            <p className="body-default-16 mb-5">
              I hope you are well. I am writing to inform you about an important
              matter that requires our immediate attention. Earlier this
              morning, our company, HPBM AG, has received a friendly takeover
              letter from WHSE Inc. Given the significance of this development,
              I propose two consecutive extraordinary meetings to thoroughly
              discuss and address this situation.
            </p>
            <p className="body-default-16 mb-5">
              I propose the first meeting on 12 April 2024, from 08.00 to 11.00.
              This meeting will allow all directors to review the details of the
              takeover letter, its implications, and the potential opportunities
              and risks associated with such an offer. The primary objective of
              this meeting is to raise pertinent questions regarding the
              takeover offer, which will be addressed to the company's
              leadership team.
            </p>
            <p className="body-default-16 mb-5">
              I suggest a second meeting on 16 April 2024 (08:00-12:00). During
              this meeting, our CEO and CFO will join at the beginning to
              address the questions raised in the first meeting and convey the
              leadership team's opinion on the takeover offer. Their insights
              and guidance will be valuable as we collectively deliberate on the
              best course of action for our company. In this second meeting, it
              is crucial that we engage in a comprehensive and open discussion
              to formulate our response strategy, which aligns with our
              company’s best interests.
            </p>
            <p className="body-default-16 mb-5">
              I kindly request alldirectors to thoroughly review the takeover
              letter and any relevant supporting materials prior to the
              meetings. Please come prepared to share your perspectives,
              insights, and recommendations.
            </p>
            <p className="body-default-16 mb-5">
              Given the urgency and significance of this situation, it is
              crucial that we prioritize attendance and ensure all directors are
              available for these extraordinary meetings. Please confirm your
              availability promptly by replying to this email, including any
              scheduling conflicts you may have.
            </p>
            <p className="body-default-16 mb-5">
              I believe that by promptly addressing this issue and working
              collaboratively, we can navigate this potential takeover situation
              in the best interests of our company and its stakeholders. I
              greatly appreciate your commitment and dedication to the success
              of HPBM AG.
            </p>
            <p className="body-default-16 mb-5">Warm regards,</p>
            <p className="body-default-16 mb-5">
              Chair of the Supervisory
              <br />
              Board, HPBM AG.
            </p>
          </div>
          <div className="flex items-center justify-end p-6">
            <Button className={"w-full"} onClick={() => setShowModal(false)}>
              Proceed3
            </Button>
          </div>
        </Modal>
      </header>
    </>
  );
}
