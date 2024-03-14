"use client";
import React, { useState, useEffect } from "react";

import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

import Modal from "@/app/components/modal";
import Notify from "@/app/components/notify";

import NotifyCard from "@/app/components/notify/notifyCard";
import SubmitModal from "@/app/components/modals/submitModal";
import MailModalContent1 from "@/app/components/modals/mailModalContent1";
import MailModalContent2 from "@/app/components/modals/mailModalContent2";
import MailModalContent3 from "@/app/components/modals/mailModalContent3";
import ShowMeetingModalPre1 from "@/app/components/modals/showMeetingModalPre1";
import ShowMeetingModalPre2 from "@/app/components/modals/showMeetingModalPre2";
import ShowMeetingModalPre3 from "@/app/components/modals/showMeetingModalPre3";
import ShowVideoContentModal from "@/app/components/modals/showVideoContentModal";

import TaskForm from "@/app/components/form/taskForm";

export default function Module3() {
  const [isHeroectionOpen, setIsHeroectionOpen] = useState(true);
  const [isPreSectionOpen, setIsPreSectionOpen] = useState(false);
  const [isExtraOrdinaryOpen, setIsExtraOrdinaryOpen] = useState(false);
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  const [showNotify1, setShowNotify1] = React.useState(false);
  const [showNotify2, setShowNotify2] = React.useState(false);
  const [showNotify3, setShowNotify3] = React.useState(false);
  const [showNotify4, setShowNotify4] = React.useState(false);

  //Olds:
  // const [isNotifyOpen1, setNotify1IsOpen] = useState(false);
  // const [isNotifyOpen2, setNotifyOpen2] = useState(false);
  // const [isNotifyOpen3, setNotifyIsOpen3] = useState(false);
  // const [isNotifyOpen4, setNotify4IsOpen] = useState(false);

  const [showMailModal1, setShowMailModal1] = React.useState(false);
  const [showMailModal2, setShowMailModal2] = React.useState(false);
  const [showMailModal3, setShowMailModal3] = React.useState(false);

  const [showMeetingModalPre1, setShowMeetingModalPre1] = React.useState(false);
  const [showMeetingModalPre2, setShowMeetingModalPre2] = React.useState(false);
  const [showMeetingModalPre3, setShowMeetingModalPre3] = React.useState(false);
  const [showVideoContentModal, setShowVideoContentModal] =
    React.useState(false);

  const [showEOMSubmitModal, setShowEOMSubmitModal] = React.useState(false);

  const [isEomSubmitted, setIsEomSubmitted] = useState(false);
  const videoSrc = "";

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
                style={{ width: "100%", height: "auto" }}
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

                  <Button onClick={() => setShowNotify1(true)}>
                    Proceed setShowNotify1
                  </Button>

                  {/* onClick={() => setShowNotify1(true)} */}
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
                // style={{ width: "100%", height: "auto" }}
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
                onClick={() => {
                  setShowVideoContentModal(true);
                  console.log("video1 watched");
                }}
              />
              {/* <Button
                className={"w-full mt-auto"}
                onClick={() => setShowVideoContentModal(true)}
              >
                Review
              </Button> */}
            </div>
          </div>
        </div>
      )}

      {/* Mail 1 Modal */}
      <Modal showModal={showMailModal1} setShowModal={setShowMailModal1}>
        <MailModalContent1
          submitActions={() => {
            console.log("mail modal 1 submit action");
            setShowMailModal1(false);
            // setNotify1IsOpen(false);
            setIsPreSectionOpen(true);
            setIsHeroectionOpen(false);
          }}
        />
      </Modal>

      {/* Mail 2 Modal */}
      <Modal showModal={showMailModal2} setShowModal={setShowMailModal2}>
        <MailModalContent2
          submitActions={() => {
            // setNotify2(false);
            console.log("mail modal 2 submit action");
            setShowMailModal2(false);
            setShowMailModal3(true);
          }}
        />
      </Modal>

      {/* Mail 3 Modal */}
      <Modal showModal={showMailModal3} setShowModal={setShowMailModal3}>
        <MailModalContent3
          submitActions={() => {
            setShowMailModal3(false);
            setShowNotify3(true);
          }}
        />
      </Modal>

      {/* showMeetingModalPre1 Modal */}
      <Modal
        showModal={showMeetingModalPre1}
        setShowModal={setShowMeetingModalPre1}
        title={"Take Over Letter"}
      >
        <ShowMeetingModalPre1
          submitActions={() => {
            setShowMeetingModalPre1(false);
          }}
        />
      </Modal>

      {/* showMeetingModalPre2 Modal */}
      <Modal
        showModal={showMeetingModalPre2}
        setShowModal={setShowMeetingModalPre2}
        title={"COMPANY DESCRIPTION: WHSE INC."}
      >
        <ShowMeetingModalPre2
          submitActions={() => {
            setShowMeetingModalPre2(false);
          }}
        />
      </Modal>

      {/* showMeetingModalPre3 Modal */}
      <Modal
        showModal={showMeetingModalPre3}
        setShowModal={setShowMeetingModalPre3}
        title={"COMPANY FINANCIAL DATA: WHSE INC."}
      >
        <ShowMeetingModalPre3
          submitActions={() => {
            setShowMeetingModalPre3(false);
          }}
        />
      </Modal>

      {/* showVideoContentModal Modal */}
      <Modal
        showModal={showVideoContentModal}
        setShowModal={setShowVideoContentModal}
        title={"WHSE Promotional Video"}
      >
        <ShowVideoContentModal
          videoSrc={
            "https://www.youtube.com/embed/feooCAynw4c?si=96S5LntH775k-RzF&amp;controls=0"
          }
          submitActions={() => {
            setShowVideoContentModal(false);
            setIsPreSectionOpen(false);
            setIsExtraOrdinaryOpen(true);
            console.log("isExtraOrdinaryOpened");
          }}
        />
      </Modal>

      {/* Show after ExtraOrdinary form submit */}
      <Modal
        showModal={showEOMSubmitModal}
        setShowModal={setShowEOMSubmitModal}
        // title={"WHSE Promotional Video"}
        hideClose={true}
      >
        <SubmitModal
          submitActions={() => {
            setShowEOMSubmitModal(false);

            setShowNotify2(true);
            console.log("isExtraOrdinary Submit modal opened");
          }}
          // onClick={() => setShowNotify1(true)}
          submitText={"Kindly proceed back to the lecture room for debriefing"}
        />
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
            <form
              className={`col-span-2 flex flex-col gap-4 ${
                isEomSubmitted ? "form-disabled" : ""
              }`}
            >
              <div className="flex bg-[#F6F6F7] p-6 gap-3">
                <label htmlFor="input1" className="">
                  1
                </label>
                <textarea type="text" id="input1" disabled={isEomSubmitted} />
              </div>
              <div className="flex bg-[#F6F6F7] p-6 gap-3">
                <label htmlFor="input2" className="">
                  2
                </label>
                <textarea type="text" id="input2" disabled={isEomSubmitted} />
              </div>
              <div className="flex bg-[#F6F6F7] p-6 gap-3">
                <label htmlFor="input3" className="">
                  3
                </label>
                <textarea type="text" id="input3" disabled={isEomSubmitted} />
              </div>
              <div className="flex bg-[#F6F6F7] p-6 gap-3">
                <label htmlFor="input4" className="">
                  4
                </label>
                <textarea type="text" id="input4" disabled={isEomSubmitted} />
              </div>
              <div className="flex bg-[#F6F6F7] p-6 gap-3">
                <label htmlFor="input5" className="">
                  5
                </label>
                <textarea type="text" id="input5" disabled={isEomSubmitted} />
              </div>
              <Button
                onClick={() => {
                  setShowEOMSubmitModal(true);
                  console.log("submit 1");
                  setIsEomSubmitted(true);
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

      {/* Show after video watch */}
      {isTaskFormOpen && (
        <TaskForm
          submitActions={() => {
            setShowNotify4(true);
            // setShowMailModal1(false);
            // setNotify1IsOpen(false);
            // setIsPreSectionOpen(true);
            // setIsHeroectionOpen(false);
          }}
        />
      )}

      {/* Notify1 */}
      <Notify
        showNotify={showNotify1}
        setShowNotshowNotify={setShowNotify1}
        recipient="Board Chair1"
        content="Meeting notes"
        handleOpen={() => {
          setShowMailModal1(true);
          setShowNotify1(false);
          console.log("Notify1 Handle");
        }}
      ></Notify>

      {/* Notify2 */}
      <Notify
        showNotify={showNotify2}
        setShowNotshowNotify={setShowNotify2}
        recipient="Board Chair2"
        content="Meeting notes"
        handleOpen={() => {
          setShowMailModal2(true);
          setShowNotify2(false);
          console.log("isNotifyOpen2");
        }}
      ></Notify>

      {/* Meeting 2 Mail Popup */}
      {/* {isNotifyOpen3 && (
        <>
          <NotifyCard
            recipient="xxxTask1"
            content="xxxTask2"
            handleOpen={() => {
              console.log("isNotifyOpen3");
              setIsTaskFormOpen(true);
              setIsExtraOrdinaryOpen(false);
              setNotifyIsOpen3(false);
            }}
          />
        </>
      )} */}

      {/* Notify3 */}
      <Notify
        showNotify={showNotify3}
        setShowNotshowNotify={setShowNotify3}
        recipient="Board Chair3"
        content="Meeting notes"
        handleOpen={() => {
          console.log("isNotifyOpen3");
          setIsTaskFormOpen(true);
          setIsExtraOrdinaryOpen(false);
          // setNotifyIsOpen3(false);
          setShowNotify3(false);
        }}
      ></Notify>

      {/* Notify4 */}
      <Notify
        showNotify={showNotify4}
        setShowNotshowNotify={setShowNotify4}
        recipient="Board Chair3"
        content="Meeting notes"
        handleOpen={() => {
          setShowVideoContentModal(true, {
            videoSrc:
              "https://www.youtube.com/embed/NRV3H_bO6oE?si=QOR6mo8FvJQadTb7",
          });
          setShowNotify4(false);
          console.log("isNotifyOpen4");
        }}
      ></Notify>
    </section>
  );
}
