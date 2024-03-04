"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Button from "@/app/components/button";
import Modal from "@/app/components/modal";

export default function Meeting() {
  const [showMeetingModal1, setShowMeetingModal1] = React.useState(false);
  const [showMeetingModal2, setShowMeetingModal2] = React.useState(false);
  const [showMeetingModal3, setShowMeetingModal3] = React.useState(false);

  return (
    <section className="mt-32 mb-16 xl:px-12 flex flex-col items-center">
      {/* <div className="">Preperation Material for Extraordinary Meeting #1 </div> */}
      <div className="container">
        <div className="py-8 xl:py-14 text-3xl font-semibold ">
          Preperation Material for Extraordinary Meeting #1
        </div>
      </div>
      <div className="container flex flex-col md:grid grid-cols-3 gap-5 h-min">
        <div className="meeting-card flex flex-col pb-8 px-8 bg-white">
          <div className="h5-bold text-primary-red text-center m-11">
            Take-Over Letter
          </div>
          <Image
            className="mx-auto my-auto"
            src="/images/common/meeting-envelope.svg"
            alt="E-mail"
            width={250}
            height={250}
          />
          <Button
            className={"w-full mt-auto"}
            onClick={() => setShowMeetingModal1(true)}
          >
            Review
          </Button>
        </div>
        <div className="meeting-card flex flex-col pb-8 px-8 bg-white">
          <div className="h5-bold text-primary-red text-center m-11">
            WHSE Inc.
          </div>
          <Image
            className="mx-auto my-1"
            src="/images/common/meeting-whse-1.svg"
            alt="E-mail"
            width={350}
            height={250}
          />
          <Image
            className="mx-auto my-1"
            src="/images/common/meeting-whse-2.svg"
            alt="E-mail"
            width={350}
            height={250}
          />
          <Button
            className={"w-full mt-auto"}
            onClick={() => setShowMeetingModal2(true)}
          >
            Review
          </Button>
        </div>
        <div className="meeting-card flex flex-col pb-8 px-8 bg-white">
          <div className="h5-bold text-primary-red text-center m-11">
            WHSE Promotional Video
          </div>
          <Image
            className="mx-auto"
            src="/images/common/meeting-video.svg"
            alt="E-mail"
            width={350}
            height={250}
          />
          <Button
            className={"w-full mt-auto"}
            onClick={() => setShowMeetingModal3(true)}
          >
            Review
          </Button>
        </div>
      </div>
      <Modal
        showModal={showMeetingModal1}
        setShowModal={setShowMeetingModal1}
        title={"Take Over Letter"}
      >
        <div className="relative p-6 flex-auto">
          <p className="body-default-16 mb-5">April 10, 2024</p>
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="text-primary-red max-w-[75px] col-span-1">FROM</div>
            <div className="col-span-3">
              Fred Hammerschmidt CEO (Chairman of the Management Board) HPBM AG
              Industriestrasse 1, Schwabing-West, 80796 Germany
            </div>
            <div className="text-primary-red max-w-[75px] col-span-1">CC</div>
            <div className="col-span-3">
              Chair of the Supervisory Board, HPBM AG
            </div>

            <div className="text-primary-red max-w-[75px] col-span-1">
              SUBJECT
            </div>
            <div className="col-span-3">
              Acquisition of HPBM AG by WHSE Inc.
            </div>
          </div>
          <p className="body-default-16 mb-5">Dear Mr. Hammerschmidt</p>
          {/* <p className="body-default-16 mb-5">lorem</p> */}
          <p className="body-default-16 mb-5">
            I hope this letter finds you in good health and high spirits. I am
            writing to you today as the CEO, President, and Chair of WHSE Inc.,
            a leading US-based company in the automotive industry. Our company
            has been highly successful in providing cutting-edge solutions and
            delivering value to our customers worldwide.
          </p>
          <p className="body-default-16 mb-5">
            I am pleased to inform you that WHSE Inc. has formulated a
            well-considered proposal for the acquisition of the entire share
            capital of HPBM AG. Our offer represents a significant opportunity
            for both WHSE Inc. and HPBM AG to combine our strengths, expand our
            market presence, and create enhanced value for our stakeholders.
          </p>
          <p className="body-default-16 mb-5">
            The terms of our all-cash takeover offer reflect our deep
            appreciation for the value and potential of HPBM AG. We are pleased
            to propose a premium of 20% based on the 30-day volume weighted
            average closing price of HPBM. This premium demonstrates our
            commitment to recognizing and valuing the hard work and achievements
            of HPBM AG's management, employees, and shareholders.
          </p>
          <p className="body-default-16 mb-5">
            I would like to emphasize that WHSE Inc. is genuinely interested in
            fostering a collaborative and constructive relationship with HPBM
            AG's management throughout the acquisition process. We believe it is
            crucial to engage in open and transparent discussions to explore the
            feasibility of this combination and ensure the long-term success of
            our joint venture.
          </p>
          <p className="body-default-16 mb-5">
            Moreover, I am pleased to inform you that the financing required for
            this transaction has already been secured. Our financial strength,
            combined with our extensive industry expertise, positions us
            favorably to support HPBM AG's growth aspirations and realize our
            shared vision.
          </p>
          <p className="body-default-16 mb-5">
            Upon a successful acquisition, WHSE Inc. intends to merge HPBM AG
            with our renowned division, LightStar Inc. This strategic
            integration will leverage the strengths of both organizations,
            capitalize on synergies, and drive sustainable growth in the global
            auto components market.
          </p>
          <p className="body-default-16 mb-5">
            I kindly request your consideration of our proposal and welcome the
            opportunity to initiate discussions with you and your team at the
            earliest convenience. We believe that through open dialogue, we can
            address any concerns, align our objectives, and develop a mutually
            beneficial path forward.
          </p>
          <p className="body-default-16 mb-5">
            To proceed with the next steps, I propose scheduling a meeting at a
            time and location convenient for you. This meeting will enable us to
            discuss the details of our offer, share insights about our strategic
            plans, and exchange views on the potential synergies between our
            companies.
          </p>
          <p className="body-default-16 mb-5">
            Please feel free to reach out to me directly. I am available to
            provide any further information or address any queries you may have.
          </p>
          <p className="body-default-16 mb-5">
            Thank you for considering our proposal. We look forward to the
            opportunity of working together and creating a powerful,
            industry-leading organization that will shape the future of the
            automotive components sector.
          </p>
          <p className="body-default-16 mb-5">Yours sincerely,</p>
          <p className="body-default-16 mb-5">
            /s/ Michael S. Willard
            <br /> Michael S. Willard
            <br /> CEO, President, and Chair WHSE Inc.
          </p>
          <p className="body-default-16 mb-5">
            123 Main Street
            <br /> Detroit, MI 12345
            <br /> United States
          </p>
        </div>
        <div className="flex items-center justify-end p-6">
          <Button
            className={"w-full"}
            onClick={() => setShowMeetingModal1(false)}
          >
            setShowMeetingModal1
          </Button>
        </div>
      </Modal>
      <Modal
        showModal={showMeetingModal2}
        setShowModal={setShowMeetingModal2}
        title={"WHSE Promotional Video"}
      >
        <div className="relative p-6 flex-auto">
          <iframe
            className="mx-auto"
            width="100%"
            height="630"
            src="https://www.youtube.com/embed/feooCAynw4c?si=96S5LntH775k-RzF&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="flex items-center justify-end p-6">
          <Button
            className={"w-full"}
            onClick={() => setShowMeetingModal2(false)}
          >
            setShowMeetingModal2
          </Button>
        </div>
      </Modal>
      <Modal showModal={showMeetingModal3} setShowModal={setShowMeetingModal3}>
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
          <Button
            className={"w-full"}
            onClick={() => setShowMeetingModal3(false)}
          >
            setShowMeetingModal3
          </Button>
        </div>
      </Modal>
    </section>
  );
}
