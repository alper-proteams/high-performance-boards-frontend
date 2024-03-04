"use client";
import React, { useState, useEffect } from "react";

import Modal from "@/app/components/modal";
import Image from "next/image";
import Button from "@/app/components/button";
import Link from "next/link";

export default function Meeting2Popup() {
  const [stickyNav, setStickyNav] = useState(false);
  const [showMeeting2Popup, setShowMeeting2Popup] = React.useState(false);
  const handleScroll = () => {
    window.scrollY >= 39 ? setStickyNav(true) : setStickyNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed scroll-transition right-5 bg-primary-red z-10 p-5 ${
          stickyNav ? "top-20" : "top-40"
        }`}
      >
        <div className="text-white flex gap-4 mb-5">
          <Image
            src="/images/common/envelope.svg"
            alt="E-mail"
            width={27}
            height={21}
          />
          Email
        </div>
        <div className="bg-white p-6 text-primary-black flex flex-col items-start gap-5 md:min-w-80 font-semibold">
          Email from
          <br />
          Board Chair
          <Button
            onClick={() => setShowMeeting2Popup(true)}
            className={"!bg-primary-black"}
          >
            Open
          </Button>
        </div>
      </div>

      {/* Mail Modal */}
      <Modal showModal={showMeeting2Popup} setShowModal={setShowMeeting2Popup}>
        <div className="relative p-6 flex-auto">
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="text-primary-red max-w-[75px] col-span-1">TO</div>
            <div className="col-span-3">Members of the Supervisory Board</div>
            <div className="text-primary-red max-w-[75px] col-span-1">FROM</div>
            <div className="col-span-3">Chair of the Supervisory Board</div>
            <div className="text-primary-red max-w-[75px] col-span-1">DATE</div>
            <div className="col-span-3">14 April 2024 at 14:31 </div>
            <div className="text-primary-red max-w-[75px] col-span-1">
              SUBJECT
            </div>
            <div className="col-span-3">Call for an Extraordinary Meeting</div>
          </div>

          <p className="body-default-16 mb-5">Dear Directors,</p>
          <p className="body-default-16 mb-5">
            I hope this message finds you well. Today, in the midst of delicate
            takeover proceedings, I received an anonymous whistleblower email
            regarding the CEO, implying potential personal misconduct with a
            member of the CEO's office (an intern). I have attached the email
            for your review.
          </p>
          <p className="body-default-16 mb-5">
            Given the sensitive nature of these concerns during these critical
            times for our company, I want to bring this matter to your attention
            urgently. We have an already scheduled meeting in two days, and
            during the second half, where the CEO and CFO won't participate, I
            propose allocating time to discuss and address this issue
            collectively.
          </p>
          <p className="body-default-16 mb-5">
            Your prompt attention to this matter is crucial. Please be prepared
            for a comprehensive discussion during the upcoming meeting.
          </p>
          <p className="body-default-16 mb-5">
            I kindly request alldirectors to thoroughly review the takeover
            letter and any relevant supporting materials prior to the meetings.
            Please come prepared to share your perspectives, insights, and
            recommendations.
          </p>

          <p className="body-default-16 mb-5">Best regards,</p>
          <p className="body-default-16 mb-5">
            Chair of the Supervisory
            <br />
            Board, HPBM AG.
          </p>
        </div>
        <div className="flex items-center justify-end p-6">
          <Link className={"w-full"} href="/board/module3/meeting1">
            <Button
              className={"w-full"}
              onClick={() => setShowMeeting2Popup(false)}
            >
              Proceed
            </Button>
          </Link>
        </div>
      </Modal>
    </>
  );
}
