"use client";
import React, { useState, useEffect } from "react";

import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

import Modal from "@/app/components/modal";
import CardPerson from "@/app/components/homepage/card-person";
import CardPersonItems from "@/app/data/cv.json";
import NotifyCard from "@/app/components/notify/notifyCard";
// import MailCard from "@/app/components/mail/mailCard";

export default function Module3() {
  const Notify1 = () => {
    setNotify1IsOpen(true);
  };

  const Notify2 = () => {
    setNotify2IsOpen(true);
  };

  const [isHeroectionOpen, setIsHeroectionOpen] = useState(true);
  const [isPreSectionOpen, setIsPreSectionOpen] = useState(false);
  const [isExtraOrdinaryOpen, setIsExtraOrdinaryOpen] = useState(false);

  const [isNotify1Open, setNotify1IsOpen] = useState(false);
  const [isNotify2Open, setNotify2IsOpen] = useState(false);

  const [showMail1Modal, setShowMail1Modal] = React.useState(false);
  const [showMail2Modal, setShowMail2Modal] = React.useState(false);
  const [showMail3Modal, setShowMail3Modal] = React.useState(false);

  const [showMeetingModalPre1, setShowMeetingModalPre1] = React.useState(false);
  const [showMeetingModalPre2, setShowMeetingModalPre2] = React.useState(false);
  const [showMeetingModalPre3, setShowMeetingModalPre3] = React.useState(false);
  const [showMeetingModalPre4, setShowMeetingModalPre4] = React.useState(false);
  const [showEOMSubmitModal, setShowEOMSubmitModal] = React.useState(false);

  const [showNotify, setShowNotify] = useState(false);

  return (
    <section className="relative">
      {isHeroectionOpen && (
        <>
          <div className="full-container ">
            <div className="card container flex flex-col xl:flex-row-reverse items-start p-4 xl:pt-52 xl:pb-20 gap-4 xl:gap-0">
              <Image
                src="/images/detail/module3/hero.jpg"
                width={500}
                height={300}
                priority
                alt="image"
                className="ml-16"
              />

              <div className="card-body">
                <div className="page-header">Decision Phase</div>
                <div className="card-content text-white">
                  <p className="body-default-20">
                    In the upcoming phase of the simulation, you and your fellow
                    board members will face a series of unexpected events
                    demanding the Board's immediate involvement and governance.
                    These hypothetical scenarios will intensify the pressure on
                    the Board, compelling critical decisions.
                  </p>

                  <Button onClick={Notify1}>Proceed</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="block section-bg">
            <Image
              src="/images/detail/module3/hero.jpg"
              width={1920}
              height={1080}
              priority
              alt="image"
            />
          </div>
        </>
      )}

      {/* Hide after video watch */}
      {isPreSectionOpen && (
        <div className="full-container bg-[#E9EBEF] mt-32 mb-16 xl:px-12">
          <div className="container">
            <div className="py-8 xl:py-14 text-3xl font-semibold ">
              Preperation Material for Extraordinary Meeting #1
            </div>
          </div>
          <div className="container flex flex-col md:grid grid-cols-3 gap-5 h-min">
            <div className="meeting-card flex flex-col py-8 px-8 bg-white">
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
                onClick={() => setShowMeetingModalPre1(true)}
              >
                Review
              </Button>
            </div>
            <div className="meeting-card flex flex-col py-8 px-8 bg-white">
              <div className="h5-bold text-primary-red text-center m-11">
                WHSE Inc.
              </div>
              <Image
                className="mx-auto my-1 cursor-pointer"
                src="/images/common/meeting-whse-1.svg"
                alt="E-mail"
                width={350}
                height={250}
                onClick={() => setShowMeetingModalPre2(true)}
              />
              <Image
                className="mx-auto my-1 cursor-pointer"
                src="/images/common/meeting-whse-2.svg"
                alt="E-mail"
                width={350}
                height={250}
                onClick={() => setShowMeetingModalPre3(true)}
              />
              {/* <Button className={"w-full mt-auto"}>Review</Button> */}
            </div>
            <div className="meeting-card flex flex-col py-8 px-8 bg-white">
              <div className="h5-bold text-primary-red text-center m-11">
                WHSE Promotional Video
              </div>
              <Image
                className="mx-auto"
                src="/images/common/meeting-video.svg"
                alt="E-mail"
                width={350}
                height={250}
                onClick={() => setShowMeetingModalPre4(true)}
              />
              {/* <Button
                className={"w-full mt-auto"}
                onClick={() => setShowMeetingModalPre4(true)}
              >
                Review
              </Button> */}
            </div>
          </div>
        </div>
      )}

      {/* Mail 1 Modal */}
      {/* <MailCard
        showModal={showMail1Modal}
        setShowModal={setShowMail1Modal}
        // handleOpen={() => setShowMail1Modal(true)}
      /> */}
      <Modal
        showModal={showMail1Modal}
        setShowModal={setShowMail1Modal}
        // title={"Take Over Letter"}
      >
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
            <div className="col-span-3">
              MAIL1 Call for an Extraordinary Meeting
            </div>
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
            onClick={() => {
              {
                setShowMail1Modal(false);
                setNotify1IsOpen(false);
                setIsPreSectionOpen(true);
                setIsHeroectionOpen(false);
              }
            }}
          >
            Proceed
          </Button>
        </div>
      </Modal>

      {/* Mail 2 Modal */}
      <Modal showModal={showMail2Modal} setShowModal={setShowMail2Modal}>
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

          <p className="body-default-16 mb-5">MAIL2 Dear Directors,</p>
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
          <Link className={"w-full"} href="#">
            <Button
              className={"w-full"}
              onClick={() => {
                {
                  setNotify2IsOpen(false);
                  setShowMail2Modal(false);
                  setShowMail3Modal(true);
                }
              }}
            >
              Proceed
            </Button>
          </Link>
        </div>
      </Modal>

      {/* Mail 3 Modal */}
      <Modal showModal={showMail3Modal} setShowModal={setShowMail3Modal}>
        <div className="relative p-6 flex-auto">
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="text-primary-red max-w-[75px] col-span-1">TO</div>
            <div className="col-span-3">anonymous23587@gmail.com</div>
            <div className="text-primary-red max-w-[75px] col-span-1">FROM</div>
            <div className="col-span-3">Chair of the Supervisory Board</div>
            <div className="text-primary-red max-w-[75px] col-span-1">DATE</div>
            <div className="col-span-3">April 14th, 2024 at 10.18 </div>
            <div className="text-primary-red max-w-[75px] col-span-1">
              SUBJECT
            </div>
            <div className="col-span-3">Misconduct by CEO of HPBM</div>
          </div>

          <p className="body-default-16 mb-5">
            MAIL3 Esteemed member of Supervisory Board of HPBM,
          </p>
          <p className="body-default-16 mb-5">
            I hope this email reaches you under the strictest confidence. I
            regret to inform you that the CEO of HPBM is behaving in a way that
            raises serious concerns about the CEO's ethical conduct, undermining
            our corporate compliance guidelines.
          </p>
          <p className="body-default-16 mb-5">
            This past weekend I happened to see his yacht pull into the port of
            Barcelona. At the time I was having a lunch with my friends. The
            restaurant was located next to the Marina, about 50 m from where the
            yacht docked.
          </p>
          <p className="body-default-16 mb-5">
            To my surprise, the only other passenger on board was Miss Maria D.,
            a 24-year old trainee who joined our company a year ago after
            completing her bachelor’s degree in marketing. Miss D. is currently
            participating in our HIPO program. As part of this program, she was
            assigned to the CEO’s office six months ago. She is the first and
            only trainee in the program's eight-year history to be assigned to
            the CEO.
          </p>
          <p className="body-default-16 mb-5">
            I also want to point out that Miss. D. financed her university
            studies by working as a model in the sports fashion industry.
          </p>

          <p className="body-default-16 mb-5">
            I feel compelled to bring these facts to your attention, and I trust
            you will handle the matter appropriately.
          </p>
          <p className="body-default-16 mb-5">Sincerely,</p>
          <p className="body-default-16 mb-5">
            Anonymous
            <br />
            PS: I attach a snapshot I took. Apologies for the poor quality.{" "}
          </p>
          <Image
            className="mx-auto mb-9"
            src="/images/detail/module3/port.jpg"
            alt="WHSE Inc"
            width={793}
            height={500}
            responsive
          />
        </div>
        <div className="flex items-center justify-end p-6">
          <Link className={"w-full"} href="#">
            <Button
              className={"w-full"}
              onClick={() => {
                {
                  setShowMail3Modal(false);
                  // setNotify2IsOpen(false);
                }
              }}
            >
              Proceed
            </Button>
          </Link>
        </div>
      </Modal>

      {/* showMeetingModalPre1 Modal */}
      <Modal
        showModal={showMeetingModalPre1}
        setShowModal={setShowMeetingModalPre1}
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
            onClick={() => setShowMeetingModalPre1(false)}
          >
            Proceed
          </Button>
        </div>
      </Modal>

      {/* showMeetingModalPre2 Modal */}
      <Modal
        showModal={showMeetingModalPre2}
        setShowModal={setShowMeetingModalPre2}
        title={"COMPANY DESCRIPTION: WHSE INC."}
      >
        <div className="relative p-6 flex-auto">
          <Image
            className="mx-auto mb-9"
            src="/images/detail/module3/builds.jpg"
            alt="WHSE Inc"
            width={1224}
            height={418}
            responsive
          />
          <p className="body-default-16 mb-5">
            WHSE Inc. is a prominent US-based company with a strong presence in
            both the automotive and non-automotive industries. Headquartered in
            Detroit, Michigan, WHSE Inc. is listed on the New York Stock
            Exchange (NYSE), boasting a substantial market capitalization of $16
            billion. The company operates through four distinct operating
            segments, each catering to the evolving needs of its diverse
            customer base.
          </p>
          <p className="body-default-16 mb-5">
            With approximately 35,000 dedicated employees worldwide, WHSE Inc.
            harnesses the collective expertise and talent of its workforce to
            drive innovation and deliver exceptional products and services. WHSE
            Inc. has established a global presence with a network of 30
            facilities and innovation centers strategically located across Asia,
            the Americas, Europe, and Africa. These facilities serve as hubs for
            research and development, manufacturing, and customer support,
            enabling WHSE Inc. to effectively serve its global clientele.
          </p>
          <p className="body-default-16 mb-5">
            WHSE Inc.'s subsidiaries, including Lightstar International Inc. and
            AutoSense Inc., are key players in the automotive sector. Lightstar
            International Inc. is renowned as a tier 1 supplier, recognized for
            its intelligent lighting solutions. Meanwhile, AutoSense Inc.
            specializes in innovative sensor technologies for autonomous driving
            and advanced vehicle safety features.
          </p>
          <p className="body-default-16 mb-5">
            In the non-automotive industry segment, WHSE Inc. leverages its
            expertise through subsidiaries such as Advanced Logistics Solutions
            (ALS) and Industrial Lighting Solutions (ILS). ALS offers
            intelligent warehousing and logistics solutions tailored to the
            specific needs of manufacturers, while ILS focuses on efficient and
            effective lighting solutions for warehouses and manufacturing
            plants. These subsidiaries highlight WHSE Inc.'s commitment to
            delivering comprehensive solutions that optimize operational
            efficiency and safety across various industries.
          </p>
          <p className="body-default-16 mb-5">
            In recent years, WHSE Inc. has pursued an active acquisition
            strategy, aiming to expand its market reach and diversify its
            portfolio. The company has successfully completed several
            acquisitions, primarily on a smaller scale. However, some industry
            observers have raised questions regarding the effectiveness of WHSE
            Inc.'s acquisition strategy and its ability to seamlessly integrate
            acquired companies.
          </p>
          <p className="body-default-16 mb-5">
            Notably, WHSE Inc. made two significant acquisitions in the
            automotive industry, each surpassing the $1 billion mark in value.
            Unfortunately, these acquisitions did not yield the anticipated
            results, prompting discussions about the company's integration
            capabilities. WHSE Inc. remains committed to driving growth and
            fostering innovation across its operating segments.
          </p>
          <h2>Lightstar</h2>
          <p className="body-default-16 mb-5">
            Lghstar International Inc., a prominent lighting solutions company
            headquartered in Detroit, Michigan, specializes in providing
            cutting-edge intelligent lighting solutions for the automotive
            industry. With a strong focus on this sector, the company operates
            two manufacturing plants in the United States, with one situated in
            Detroit and the other in Tennessee. Approximately 38% of Lighstar's
            revenues are generated from the North American market.
          </p>
          <p className="body-default-16 mb-5">
            In addition to its operations in North America, Lighstar Inc. has
            strategically expanded its reach in Latin America with production
            plants in Mexico and Brazil. Furthermore, Lighstar operates a
            manufacturing facility in the Czech Republic in Europe, further
            solidifying its commitment to providing lighting solutions for the
            automotive sector on a global scale. Additionally, the company's
            innovation center near Stuttgart, Germany, drives research and
            development efforts in Europe to stay at the forefront of
            intelligent lighting technology in the automotiveindustry.
          </p>
          <p className="body-default-16 mb-5">
            Lightstar has a limited presence in Asia. In 2015, Lightstar opened
            its first manufacturing plant in Indonesia as part of its efforts to
            tap into the growing Asian market. This facility serves as a
            strategic base for the company to meet the demand for its lighting
            solutions in the region. In 2018, Lighstar established an innovation
            center in Singapore. In the last fiscal year, Asia accounted for
            approximately 13% of Lightstar's global revenues.
          </p>
          <p className="body-default-16 mb-5">
            Lightstar has encountered several challenges in recent times.
            Firstly, the company has faced mounting pressure from
            well-established players in its key markets. Furthermore, the
            automotive lighting industry is witnessing a transformative trend
            towards intelligent, efficient, environmentally friendly, and
            personalized lighting solutions. This shift in customer preferences
            has created a growing demand for innovative, high-quality, and
            visually appealing lighting solutions, encompassing both exterior
            beams and interior applications.
          </p>
          <p className="body-default-16 mb-5">
            Lightstar has, in general, not been widely acknowledged as a
            technological leader with premium products. Despite recent efforts,
            the company has faced challenges in successfully reorienting itself
            towards the premium segments that require more sophisticated and
            advanced solutions. European manufacturers currently dominate these
            segments.
          </p>
          <p className="body-default-16 mb-5">
            The global automotive lighting market is projected to experience
            substantial growth, with an estimated increase from USD 21.9 billion
            in 2022 to USD 28.5 billion in 2027, reflecting a compound annual
            growth rate (CAGR) of 5.3% (Source: Markets & Markets 2023)). The
            increasing demand for premium vehicles is expected to be a
            significant driver for the growth of advanced lighting systems in
            the automotive industry. Customers seeking premium vehicles
            increasingly prioritize advanced lighting features that offer
            improved aesthetics, functionality, and energy efficiency.
          </p>
          {CardPersonItems.map((card, index) => (
            <CardPerson
              className={"mb-10"}
              key={index}
              personImage={card.personImage}
              personTitle={card.personTitle}
              personName={card.personName}
              personContent={card.personContent}
            />
          ))}
        </div>
        <div className="flex items-center justify-end p-6">
          <Button
            className={"w-full"}
            onClick={() => setShowMeetingModalPre2(false)}
          >
            Proceed
          </Button>
        </div>
      </Modal>

      {/* showMeetingModalPre3 Modal */}
      <Modal
        showModal={showMeetingModalPre3}
        setShowModal={setShowMeetingModalPre3}
        title={"COMPANY FINANCIAL DATA: WHSE INC."}
      >
        <div className="relative p-6 flex-auto">
          <p className="body-default-16 mb-5">
            Below, you'll find the latest financial information for the company.
          </p>
          <h2>Financials</h2>
          <Image
            className="mx-auto"
            src="/images/detail/module3/finance-table.jpg"
            alt="E-mail"
            width={700}
            height={300}
            responsive
          />
        </div>
        <div className="flex items-center justify-end p-6">
          <Button
            className={"w-full"}
            onClick={() => setShowMeetingModalPre3(false)}
          >
            Proceed
          </Button>
        </div>
      </Modal>

      {/* showMeetingModalPre4 Modal */}
      <Modal
        showModal={showMeetingModalPre4}
        setShowModal={setShowMeetingModalPre4}
        title={"WHSE Promotional Video"}
      >
        <div className="relative p-6 flex-auto">
          <div class="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/feooCAynw4c?si=96S5LntH775k-RzF&amp;controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <div className="flex items-center justify-end p-6">
          <Button
            className={"w-full"}
            onClick={() => {
              setShowMeetingModalPre4(false);
              setIsPreSectionOpen(false);
              setIsExtraOrdinaryOpen(true);
            }}
          >
            Proceed
          </Button>
        </div>
      </Modal>

      {/* Show after ExtraOrdinary form submit */}
      <Modal
        showModal={showEOMSubmitModal}
        setShowModal={setShowEOMSubmitModal}
        // title={"WHSE Promotional Video"}
        hideClose={true}
      >
        <div className="meeting-card flex flex-col py-8 px-8 bg-white">
          <Image
            className="mx-auto my-auto"
            src="/images/common/meeting-envelope.svg"
            alt="E-mail"
            width={250}
            height={250}
          />
          <div className="h5-bold text-primary-red text-center my-11">
            Kindly proceed back to the lecture room for debriefing
          </div>
          <Button
            className={"w-full mt-auto"}
            onClick={() => {
              setShowEOMSubmitModal(false);
              Notify2();
            }}
          >
            Review
          </Button>
        </div>
      </Modal>

      {/* Show after video watch */}
      {isExtraOrdinaryOpen && (
        <div className="full-container bg-[#E9EBEF] mt-32 mb-16 xl:px-12">
          <div className="container">
            <div className="py-8 xl:py-14 text-3xl font-semibold ">
              Extraordinary Meeting #1
            </div>
          </div>
          <div className="container flex flex-col md:grid grid-cols-3 gap-5 h-min bg-white p-12">
            <div>
              <div className="text-primary-red">Your task</div>
              <p>
                Prepare a list of five questions to ask your CEO and CFO in the
                next Extraordinary Meeting
              </p>
            </div>
            <form className="col-span-2 flex flex-col gap-4">
              <div className="flex bg-[#F6F6F7] p-6 gap-3">
                <label htmlFor="input1" className="">
                  1
                </label>
                <textarea type="text" id="input1" />
              </div>
              <div className="flex bg-[#F6F6F7] p-6 gap-3">
                <label htmlFor="input2" className="">
                  2
                </label>
                <textarea type="text" id="input2" />
              </div>
              <div className="flex bg-[#F6F6F7] p-6 gap-3">
                <label htmlFor="input3" className="">
                  3
                </label>
                <textarea type="text" id="input3" />
              </div>
              <div className="flex bg-[#F6F6F7] p-6 gap-3">
                <label htmlFor="input4" className="">
                  4
                </label>
                <textarea type="text" id="input4" />
              </div>
              <div className="flex bg-[#F6F6F7] p-6 gap-3">
                <label htmlFor="input5" className="">
                  5
                </label>
                <textarea type="text" id="input5" />
              </div>
              <Button
                onClick={() => {
                  setShowEOMSubmitModal(true);
                }}
                // type="submit"
                className={"ml-auto w-full max-w-80"}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Meeting 1 Notify Popup */}
      {isNotify1Open && (
        <NotifyCard
          recipient="Board Chair"
          content="Meeting notes"
          handleOpen={() => setShowMail1Modal(true)}
        />
      )}

      {/* Show after video watch */}
      {/* Meeting 2 Mail Popup */}
      {isNotify2Open && (
        <>
          <NotifyCard
            recipient="Board Chair"
            content="Meeting notes"
            handleOpen={() => setShowMail2Modal(true)}
          />
        </>
      )}
    </section>
  );
}
