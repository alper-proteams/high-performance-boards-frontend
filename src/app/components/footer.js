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

  useEffect(() => {
    setUser(AuthService.getCurrentUser());
  }, []);

  const handleLogout = () => {
    AuthService.logout().then(() => {
      setUser(null);
      router.refresh();
    });
  };

  return (
    <footer className="bg-primary-black text-white py-7">
      <div className="container flex justify-between items-center">
        <div>
          © 2023 High Performance Boards
          <ul className="flex gap-6 mt-4">
            <li>Privacy</li>
            <li>Imprint</li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-9">
            <li>
              <Link href="/">
                <Image
                  src="/images/icons/instagram.svg"
                  alt="skill-icon"
                  width={24}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src="/images/icons/x.svg"
                  alt="skill-icon"
                  width={24}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src="/images/icons/youtube.svg"
                  alt="skill-icon"
                  width={24}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src="/images/icons/in.svg"
                  alt="skill-icon"
                  width={24}
                  height={20}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
