"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

import AuthService from "@/app/services/auth.service";

export default function Login() {
  const router = useRouter();
  const form = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(
      (res) => {
        router.push("/board");
        // console.log('res user', res);
      },
      (error) => {
        const resMessage = error.toString();

        // setLoading(false);
        setMessage(resMessage);
      }
    );
  };
  return (
    <div className="login min-h-screen bg-primary-black flex items-center">
      <form
        onSubmit={handleLogin}
        ref={form}
        className="bg-primary-black w-full max-w-2xl mx-auto p-16"
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
            value={username}
            onChange={(e) => {
              const username = e.target.value;
              setUsername(username);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={password}
            onChange={(e) => {
              const password = e.target.value;
              setPassword(password);
            }}
          />
        </div>
        {message && <div className="flex items-start mb-5">{message}</div>}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
