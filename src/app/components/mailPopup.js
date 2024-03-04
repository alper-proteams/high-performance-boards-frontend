"use client";
import React, { useState, useEffect } from "react";

import Modal from "@/app/components/modal";
import Image from "next/image";
import Button from "@/app/components/button";
import Link from "next/link";

export default function MailPopup() {
  const [stickyNav, setStickyNav] = useState(false);
  const [showEmailModal, setShowEmailModal] = React.useState(false);
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
            onClick={() => setShowEmailModal(true)}
            className={"!bg-primary-black"}
          >
            Open
          </Button>
        </div>
      </div>

      {/* Mail Modal */}
      <Modal showModal={showEmailModal} setShowModal={setShowEmailModal}>
        <div className="relative p-6 flex-auto">
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="text-primary-red max-w-[75px] col-span-1">TO</div>
            <div className="col-span-3">Members of the Supervisory Board</div>
            <div className="text-primary-red max-w-[75px] col-span-1">FROM</div>
            <div className="col-span-3">Chair of the Supervisory Board</div>
            <div className="text-primary-red max-w-[75px] col-span-1">DATE</div>
            <div className="col-span-3">10 April 2024 at 18:51 </div>
            <div className="text-primary-red max-w-[75px] col-span-1">
              SUBJECT
            </div>
            <div className="col-span-3">Call for an Extraordinary Meeting</div>
          </div>

          <p className="body-default-16 mb-5">Dear Directors,</p>
          <p className="body-default-16 mb-5">
            I hope you are well. I am writing to inform you about an important
            matter that requires our immediate attention. Earlier this morning,
            our company, HPBM AG, has received a friendly takeover letter from
            WHSE Inc. Given the significance of this development, I propose two
            consecutive extraordinary meetings to thoroughly discuss and address
            this situation.
          </p>
          <p className="body-default-16 mb-5">
            I propose the first meeting on 12 April 2024, from 08.00 to 11.00.
            This meeting will allow all directors to review the details of the
            takeover letter, its implications, and the potential opportunities
            and risks associated with such an offer. The primary objective of
            this meeting is to raise pertinent questions regarding the takeover
            offer, which will be addressed to the company's leadership team.
          </p>
          <p className="body-default-16 mb-5">
            I suggest a second meeting on 16 April 2024 (08:00-12:00). During
            this meeting, our CEO and CFO will join at the beginning to address
            the questions raised in the first meeting and convey the leadership
            team's opinion on the takeover offer. Their insights and guidance
            will be valuable as we collectively deliberate on the best course of
            action for our company. In this second meeting, it is crucial that
            we engage in a comprehensive and open discussion to formulate our
            response strategy, which aligns with our company’s best interests.
          </p>
          <p className="body-default-16 mb-5">
            I kindly request alldirectors to thoroughly review the takeover
            letter and any relevant supporting materials prior to the meetings.
            Please come prepared to share your perspectives, insights, and
            recommendations.
          </p>
          <p className="body-default-16 mb-5">
            Given the urgency and significance of this situation, it is crucial
            that we prioritize attendance and ensure all directors are available
            for these extraordinary meetings. Please confirm your availability
            promptly by replying to this email, including any scheduling
            conflicts you may have.
          </p>
          <p className="body-default-16 mb-5">
            I believe that by promptly addressing this issue and working
            collaboratively, we can navigate this potential takeover situation
            in the best interests of our company and its stakeholders. I greatly
            appreciate your commitment and dedication to the success of HPBM AG.
          </p>
          <p className="body-default-16 mb-5">Warm regards,</p>
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
              onClick={() => setShowEmailModal(false)}
            >
              Proceed
            </Button>
          </Link>
        </div>
      </Modal>
    </>
  );
}
