import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

export default function showMeetingModalPre1({ submitActions }) {
  return (
    <>
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
          <div className="col-span-3">Acquisition of HPBM AG by WHSE Inc.</div>
        </div>
        <p className="body-default-16 mb-5">Dear Mr. Hammerschmidt</p>
        <p className="body-default-16 mb-5">
          I hope this letter finds you in good health and high spirits. I am
          writing to you today as the CEO, President, and Chair of WHSE Inc., a
          leading US-based company in the automotive industry. Our company has
          been highly successful in providing cutting-edge solutions and
          delivering value to our customers worldwide.
        </p>
        <p className="body-default-16 mb-5">
          I am pleased to inform you that WHSE Inc. has formulated a
          well-considered proposal for the acquisition of the entire share
          capital of HPBM AG. Our offer represents a significant opportunity for
          both WHSE Inc. and HPBM AG to combine our strengths, expand our market
          presence, and create enhanced value for our stakeholders.
        </p>
        <p className="body-default-16 mb-5">
          The terms of our all-cash takeover offer reflect our deep appreciation
          for the value and potential of HPBM AG. We are pleased to propose a
          premium of 20% based on the 30-day volume weighted average closing
          price of HPBM. This premium demonstrates our commitment to recognizing
          and valuing the hard work and achievements of HPBM AG's management,
          employees, and shareholders.
        </p>
        <p className="body-default-16 mb-5">
          I would like to emphasize that WHSE Inc. is genuinely interested in
          fostering a collaborative and constructive relationship with HPBM AG's
          management throughout the acquisition process. We believe it is
          crucial to engage in open and transparent discussions to explore the
          feasibility of this combination and ensure the long-term success of
          our joint venture.
        </p>
        <p className="body-default-16 mb-5">
          Moreover, I am pleased to inform you that the financing required for
          this transaction has already been secured. Our financial strength,
          combined with our extensive industry expertise, positions us favorably
          to support HPBM AG's growth aspirations and realize our shared vision.
        </p>
        <p className="body-default-16 mb-5">
          Upon a successful acquisition, WHSE Inc. intends to merge HPBM AG with
          our renowned division, LightStar Inc. This strategic integration will
          leverage the strengths of both organizations, capitalize on synergies,
          and drive sustainable growth in the global auto components market.
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
