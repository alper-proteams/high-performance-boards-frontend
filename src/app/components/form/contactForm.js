'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

import PublicService from '@/app/services/public.service';

export default function ContactForm() {
  const router = useRouter();
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleForm = (e) => {
    e.preventDefault();

    // console.log('res contact', {
    //   name,
    //   email,
    //   subject: 'Contact Form',
    //   message,
    // });

    PublicService.postForm({
      name,
      email,
      subject: 'Contact Form',
      message,
    }).then(
      (res) => {
        // router.push('/contact');
        console.log('res contact', res);
        setFormMessage('Your form has been submitted successfully.');
      },
      (error) => {
        const resMessage = error.toString();

        // setLoading(false);
        setFormMessage(resMessage);
      }
    );
  };

  return (
    <div className="container my-8 mx-auto md:px-6 bg-neutral-100">
      <section className="bg-secondary-gray">
        <div className="py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Contact Form
          </h2>
          <form className="space-y-8" onSubmit={handleForm} ref={form}>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-90"
              >
                Your message
              </label>
              <textarea
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                id="message"
                rows="3"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            {formMessage && (
              <div className="p-4 text-sm text-blue-800 rounded-lg bg-blue-50 ">
                {formMessage}
              </div>
            )}

            <button
              type="submit"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-8 inline-block w-full rounded bg-red-500 border-2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
