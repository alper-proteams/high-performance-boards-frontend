'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/contexts/auth.context';
// import AuthService from '@/app/services/auth.service';

export default function Login() {
  const router = useRouter();
  const form = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const error = await login(username, password);
    setFormMessage(error);
  };
  return (
    <div className=" min-h-screen bg-primary-black flex items-center">
      <form
        onSubmit={handleLogin}
        ref={form}
        className=" w-full max-w-2xl mx-auto"
      >
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {formMessage && (
          <div className="p-4 text-sm text-blue-800 rounded-lg bg-blue-50 ">
            {formMessage}
          </div>
        )}
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
