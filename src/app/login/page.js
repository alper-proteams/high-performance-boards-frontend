"use client";

import React, { useState, useRef } from "react";
import { useAuth } from "@/app/contexts/auth.context";
import Button from "@/app/components/button";

export default function Login() {
  const form = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginReq = await login(username, password);
    setFormMessage(loginReq);
  };
  return (
    <div className="login flex items-center min-h-[85vh]">
      <form
        onSubmit={handleLogin}
        ref={form}
        className="bg-primary-black w-full max-w-2xl mx-auto flex flex-col items-center gap-8 py-14 px-6 md:py-28 md:px-40 ml-4 mr-4 md:m-auto"
      >
        {/* <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label> */}
        <input
          type="text"
          id="username"
          className="text-white bg-transparent border-b border-[#363E5B] rounded-none text-sm  block w-full max-w-80 p-2.5 text-center"
          placeholder="username"
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        {/* <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label> */}
        <input
          type="password"
          id="password"
          placeholder="password"
          className="text-white bg-transparent border-b border-[#363E5B] rounded-none text-sm  block w-full max-w-80 p-2.5 text-center"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {formMessage && (
          <div className="p-4 text-sm text-blue-800 rounded-lg bg-blue-50 ">
            {formMessage}
          </div>
        )}
        <Button type="submit" className={`w-full max-w-80`}>
          Login
        </Button>
      </form>
    </div>
  );
}
