"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/button";
import AuthService from "@/app/services/auth.service";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    setUser(AuthService.getCurrentUser());
  }, []);

  const handleScroll = () => {
    window.scrollY >= 39 ? setStickyNav(true) : setStickyNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    AuthService.logout().then(() => {
      setUser(null);
      router.refresh();
    });
  };

  return (
    <>
      <div className="hidden h-10"> </div>
      <header
        className={` ${
          stickyNav ? "h-14 top-0 fixed" : "h-24 top-10 absolute"
        } scroll-transition left-0 right-0 mx-auto w-full bg-white min-h-14 z-20`}
      >
        <nav className="flex flex-row justify-between container items-center h-full">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="HPB Logo"
              className={`scroll-transition w-auto ${
                stickyNav ? "h-8" : "h-16 "
              }`}
              width={205}
              height={52}
            />
          </Link>

          <ul
            className={`nav transition-opacity ${
              isNavOpen ? " opacity-100" : "opacity-0 md:opacity-100"
            }`}
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
            <li>
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
            </li>
            <li>
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
            </li>
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
                className={`scroll-transition items-center py-0 ${
                  stickyNav ? "h-8" : "h-12"
                }`}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button
                  className={`scroll-transition items-center py-0 ${
                    stickyNav ? "h-8" : "h-12"
                  }`}
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
          <div
            className="space-y-2 md:hidden"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
        </nav>
      </header>
    </>
  );
  // return (
  //   <nav className="bg-white border-gray-200 ">
  //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  //       <Link
  //         className="flex items-center space-x-3 rtl:space-x-reverse"
  //         href="/"
  //       >
  //         <Image
  //           src="/logo.svg"
  //           alt="HPB Logo"
  //           className="h-8"
  //           width={100}
  //           height={38}
  //           priority
  //         />
  //       </Link>
  //       <div className="hidden w-full md:block md:w-auto" id="navbar-default">
  //         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
  //           <li>
  //             <Link
  //               className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-400 md:p-0 ${
  //                 pathname === '/' ? ' text-red-400' : 'text-gray-700'
  //               }`}
  //               href="/"
  //             >
  //               Home
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-400 md:p-0 ${
  //                 pathname === '/about' ? ' text-red-400' : 'text-gray-700'
  //               }`}
  //               href="/about"
  //             >
  //               About
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-400 md:p-0 ${
  //                 pathname === '/resources' ? ' text-red-400' : 'text-gray-700'
  //               }`}
  //               href="/resources"
  //             >
  //               Resources
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-400 md:p-0 ${
  //                 pathname === '/testimonials'
  //                   ? ' text-red-400'
  //                   : 'text-gray-700'
  //               }`}
  //               href="/testimonials"
  //             >
  //               Testimonials
  //             </Link>
  //           </li>
  //         </ul>
  //       </div>
  //       <div className="hidden w-full md:block md:w-auto">
  //         {user ? (
  //           <Button onClick={handleLogout}>Logout</Button>
  //         ) : (
  //           <Link href="/login">
  //             <Button>Login</Button>
  //           </Link>
  //         )}
  //       </div>
  //     </div>
  //   </nav>
  // );
}
