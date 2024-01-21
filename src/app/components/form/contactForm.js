"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/button";

import PublicService from "@/app/services/public.service";

export default function ContactForm() {
  const router = useRouter();
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState("");

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
      subject: "Contact Form",
      message,
    }).then(
      (res) => {
        // router.push('/contact');
        console.log("res contact", res);
        setFormMessage("Your form has been submitted successfully.");
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
