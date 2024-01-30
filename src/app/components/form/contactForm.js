'use client';

import React, { useState, useRef } from 'react';
import Button from '@/app/components/button';

import apiClient from '@/app/services/api.service';

export default function ContactForm() {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const req = await apiClient({
        method: 'POST',
        endpoint: '/contact-forms',
        data: {
          name,
          email,
          subject: 'Contact Form',
          message,
        },
      });
      setFormMessage('Your form has been submitted successfully.');
    } catch (error) {
      const resMessage = error.message || error.toString();
      // setLoading(false);
      setFormMessage(resMessage);
    }
  };

  return (
    <div className="container my-8 mx-auto md:px-6 bg-neutral-100">
      <section className="bg-secondary-gray">
        <div className="py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-8 text-2xl tracking-tight font-extrabold text-gray-900 ">
            Contact Form
          </h2>
          <form className="space-y-8" onSubmit={handleForm} ref={form}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                className="border-2 border-opacity-20 block w-full bg-white py-3 px-4"
                id="name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                className="border-2 border-opacity-20 block w-full bg-white py-3 px-4"
                id="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-90"
              >
                Your message
              </label>
              <textarea
                className="border-2 border-opacity-20 block w-full bg-white py-3 px-4"
                id="message"
                rows="3"
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            {formMessage && (
              <div className="p-4 text-sm text-blue-800 bg-blue-50 ">
                {formMessage}
              </div>
            )}

            <Button className="w-full" data-te-ripple-init type="submit">
              Send
            </Button>

            {/* <button
              type="submit"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-8 inline-block w-full bg-primary-red  text-white"
            >
              Send
            </button> */}
          </form>
        </div>
      </section>
    </div>
  );
}
