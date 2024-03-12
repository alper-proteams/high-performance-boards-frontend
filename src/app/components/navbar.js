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
        className={`${
          stickyNav ? "xl:h-14 top-0 " : "xl:h-24 top-10"
        } scroll-transition left-0 right-0 mx-auto w-full bg-white min-h-14 z-20 top-0 fixed h-[72px]`}
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
      </header>
    </>
  );
}
