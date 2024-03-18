import React, { useState, useEffect } from "react";

import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/modal";

export default function Mail1ModalContent({ submitActions }) {
  return (
    <>
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
          I propose the first meeting on 12 April 2024, from 08.00 to 11.00. The
          primary objective of this meeting is to raise pertinent questions
          regarding the takeover offer, which will be addressed to the company's
          leadership team.
        </p>
        <p className="body-default-16 mb-5">
          I suggest a second meeting on 16 April 2024 (08:00-12:00). During this
          meeting, our CEO and CFO will join at the beginning to address the
          questions raised in the first meeting and convey the leadership team's
          opinion on the takeover offer. Their insights and guidance will be
          valuable as we collectively deliberate on the best course of action
          for our company. In this second meeting, it is crucial that we engage
          in a comprehensive and open discussion to formulate our response
          strategy, which aligns with our company’s best interests.
        </p>
        <p className="body-default-16 mb-5 underline">
          I kindly request all directors to thoroughly review the takeover
          letter and any relevant supporting materials prior to the meetings.
          Please come prepared to share your perspectives, insights, and
          recommendations.
        </p>
        <p className="body-default-16 mb-5">
          Given the urgency and significance of this situation, it is crucial
          that we prioritize attendance and ensure all directors are available
          for these extraordinary meetings. Please confirm your availability
          promptly by replying to this email, including any scheduling conflicts
          you may have.
        </p>
        <p className="body-default-16 mb-5">
          I believe that by promptly addressing this issue and working
          collaboratively, we can navigate this potential takeover situation in
          the best interests of our company and its stakeholders. I greatly
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
          onClick={() => {
            submitActions();
          }}
        >
          Proceed
        </Button>
      </div>
    </>
  );
}
