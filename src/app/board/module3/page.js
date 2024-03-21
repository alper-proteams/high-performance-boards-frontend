"use client";
import React, { useState, useEffect } from "react";

import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

import Modal from "@/app/components/modal";
import Notify from "@/app/components/notify";

import SubmitModal from "@/app/components/modals/submitModal";
import MailModalContent1 from "@/app/components/modals/mailModalContent1";
import MailModalContent2 from "@/app/components/modals/mailModalContent2";
import MailModalContent3 from "@/app/components/modals/mailModalContent3";
import MailModalContent4 from "@/app/components/modals/mailModalContent4";
import MailModalContent4Attach from "@/app/components/modals/mailModalContent4Attach";
import MailModalContent5 from "@/app/components/modals/mailModalContent5";
import MailModalContent6 from "@/app/components/modals/mailModalContent6";
import MailModalContent7 from "@/app/components/modals/mailModalContent7";
import ShowMeetingModalPre1 from "@/app/components/modals/showMeetingModalPre1";
import ShowMeetingModalPre2 from "@/app/components/modals/showMeetingModalPre2";
import ShowMeetingModalPre3 from "@/app/components/modals/showMeetingModalPre3";
import ShowVideoContentModal from "@/app/components/modals/showVideoContentModal";

import Landing from "./landing.js";
import TaskForm1 from "@/app/components/form/taskForm1";
import TaskForm2 from "@/app/components/form/taskForm2";
import TaskForm3 from "@/app/components/form/taskForm3";
import TaskForm3New from "@/app/components/form/taskForm3New";
import TaskForm4 from "@/app/components/form/taskForm4";

export default function Module3() {
  const [isLandingOpen, setIsLandingOpen] = useState(true);
  const [isPreSectionOpen, setIsPreSectionOpen] = useState(false);
  const [isExtraOrdinaryOpen, setIsExtraOrdinaryOpen] = useState(false);
  const [isTaskForm2Open, setIsTaskForm2Open] = useState(false);
  const [isTaskForm3Open, setIsTaskForm3Open] = useState(false);
  const [isTaskForm3NewOpen, setIsTaskForm3NewOpen] = useState(false);
  const [isTaskForm4Open, setIsTaskForm4Open] = useState(false);

  const [showNotify1, setShowNotify1] = React.useState(false);
  const [showNotify2, setShowNotify2] = React.useState(false);
  const [showNotify3, setShowNotify3] = React.useState(false);
  const [showNotify4, setShowNotify4] = React.useState(false);
  const [showNotify5, setShowNotify5] = React.useState(false);

  const [showMailModal1, setShowMailModal1] = React.useState(false);
  const [showMailModal2, setShowMailModal2] = React.useState(false);
  const [showMailModal3, setShowMailModal3] = React.useState(false);
  const [showMailModal4, setShowMailModal4] = React.useState(false);
  const [showMailModal4Attach, setShowMailModal4Attach] = React.useState(false);

  const [showMailModal5, setShowMailModal5] = React.useState(false);
  const [showMailModal6, setShowMailModal6] = React.useState(false);
  const [showMailModal7, setShowMailModal7] = React.useState(false);

  const [showMeetingModalPre1, setShowMeetingModalPre1] = React.useState(false);
  const [showMeetingModalPre2, setShowMeetingModalPre2] = React.useState(false);
  const [showMeetingModalPre3, setShowMeetingModalPre3] = React.useState(false);
  const [showVideoContentModal, setShowVideoContentModal] =
    React.useState(false);

  const [showTask0SubmitModal, setShowTask0SubmitModal] = React.useState(false);
  const [showTask1SubmitModal, setShowTask1SubmitModal] = React.useState(false);
  const [showTask2SubmitModal, setShowTask2SubmitModal] = React.useState(false);
  const [showTask3SubmitModal, setShowTask3SubmitModal] = React.useState(false);
  const [showTask4SubmitModal, setShowTask4SubmitModal] = React.useState(false);

  const [disableButton, setDisableButton] = useState(false);

  const [videoUrl, setVideoUrl] = useState("");

  return (
    <section className="relative">
      {/* 000 */}
      {isLandingOpen && (
        <>
          <Landing
            handleOpen={() => {
              console.log("000");
              setShowNotify1(true);
            }}
          />
          {/* 001 */}
          {/* Notify1 */}
          <Notify
            showNotify={showNotify1}
            setShowNotshowNotify={setShowNotify1}
            recipient="Board Chair"
            content="Meeting notes"
            handleOpen={() => {
              console.log("001");
              setShowMailModal1(true);
              setShowNotify1(false);
            }}
          ></Notify>
          {/* 002 */}
          {/* Mail 1 Modal */}
          <Modal showModal={showMailModal1} setShowModal={setShowMailModal1}>
            <MailModalContent1
              submitActions={() => {
                console.log("002 ");
                setShowMailModal1(false);
                setIsPreSectionOpen(true);
                setIsLandingOpen(false);
              }}
            />
          </Modal>
        </>
      )}

      {/* 003 */}
      {/* showMeetingModalPre1 Modal */}
      <Modal
        showModal={showMeetingModalPre1}
        setShowModal={setShowMeetingModalPre1}
        title={"Take Over Letter"}
      >
        <ShowMeetingModalPre1
          submitActions={() => {
            setShowMeetingModalPre1(false);
            console.log("003");
          }}
        />
      </Modal>
      {/* 004 */}
      {/* showMeetingModalPre2 Modal */}
      <Modal
        showModal={showMeetingModalPre2}
        setShowModal={setShowMeetingModalPre2}
        title={"COMPANY DESCRIPTION: WHSE INC."}
      >
        <ShowMeetingModalPre2
          submitActions={() => {
            console.log("004");
            setShowMeetingModalPre2(false);
          }}
        />
      </Modal>
      {/* 005 */}
      {/* showMeetingModalPre3 Modal */}
      <Modal
        showModal={showMeetingModalPre3}
        setShowModal={setShowMeetingModalPre3}
        title={"COMPANY FINANCIAL DATA: WHSE INC."}
      >
        <ShowMeetingModalPre3
          submitActions={() => {
            console.log("005");
            setShowMeetingModalPre3(false);
          }}
        />
      </Modal>

      {/* 006 */}
      {/* Hide after video watch */}
      {isPreSectionOpen && (
        <div className="full-container bg-[#E9EBEF] mt-32 mb-16 xl:px-12">
          <div className="container">
            <div className="py-8 xl:py-14 text-3xl font-semibold ">
              Preparation Material for Extraordinary Meeting #1
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
                disabled={disableButton}
                onClick={() => {
                  setShowMeetingModalPre1(true);
                  setDisableButton(true);
                  console.log("006-1");
                }}
              >
                Review
              </Button>
            </div>
            <div className="meeting-card flex flex-col py-8 px-8 bg-white">
              <div className="h5-bold text-primary-red text-center m-11">
                WHSE Inc.
              </div>
              <Image
                className="mx-auto my-1 cursor-pointer w-auto h-auto"
                src="/images/common/meeting-whse-1.svg"
                alt="E-mail"
                width={350}
                height={250}
                onClick={() => setShowMeetingModalPre2(true)}
              />
              <Image
                className="mx-auto my-1 cursor-pointer w-auto h-auto"
                src="/images/common/meeting-whse-2.svg"
                alt="E-mail"
                width={350}
                height={250}
                onClick={() => setShowMeetingModalPre3(true)}
              />
            </div>
            <div className="meeting-card flex flex-col py-8 px-8 bg-white">
              <div className="h5-bold text-primary-red text-center m-11">
                WHSE Promotional Video
              </div>
              <Image
                className="mx-auto w-auto h-auto cursor-pointer"
                src="/images/common/meeting-video.svg"
                alt="E-mail"
                width={350}
                height={250}
                onClick={() => {
                  console.log("006-2");
                  setShowVideoContentModal(true);
                  setVideoUrl(
                    "https://www.youtube.com/embed/hLMMUwzB3pg?si=96S5LntH775k-RzF&controls=0"
                  );
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 007 */}
      {/* showVideoContentModal Modal */}
      <Modal
        showModal={showVideoContentModal}
        setShowModal={setShowVideoContentModal}
        title={"WHSE Promotional Video"}
      >
        <ShowVideoContentModal
          videoSrc={videoUrl}
          submitActions={() => {
            console.log("007");
            setShowVideoContentModal(false);
            setIsPreSectionOpen(false);
            setIsExtraOrdinaryOpen(true);
            setVideoUrl("");
          }}
        />
      </Modal>

      {/* 008 */}
      {isExtraOrdinaryOpen && (
        <TaskForm1
          submitActions={() => {
            console.log("taskform1 action");
            setShowTask0SubmitModal(true);
          }}
        />
      )}
      {/* 009 */}
      {/* Show after ExtraOrdinary form submit */}
      <Modal
        showModal={showTask0SubmitModal}
        setShowModal={setShowTask0SubmitModal}
        hideClose={true}
      >
        <SubmitModal
          submitActions={() => {
            console.log("009");
            setShowTask0SubmitModal(false);
            setShowNotify2(true);
          }}
          submitText={"Kindly proceed back to the lecture room for debriefing"}
        />
      </Modal>
      {/* 010 */}
      {/* Notify2 */}
      <Notify
        showNotify={showNotify2}
        setShowNotshowNotify={setShowNotify2}
        recipient="Board Chair"
        content="Meeting notes"
        handleOpen={() => {
          console.log("010");
          setShowMailModal2(true);
          setShowNotify2(false);
        }}
      ></Notify>
      {/* 011 */}
      {/* Mail 2 Modal */}
      <Modal showModal={showMailModal2} setShowModal={setShowMailModal2}>
        <MailModalContent2
          submitActions={() => {
            console.log("011");
            setShowMailModal2(false);
            setShowMailModal3(true);
          }}
        />
      </Modal>
      {/* 012 */}
      {/* Mail 3 Modal */}
      <Modal showModal={showMailModal3} setShowModal={setShowMailModal3}>
        <MailModalContent3
          submitActions={() => {
            console.log("012");
            setShowMailModal3(false);
            setIsTaskForm2Open(true);
            setIsExtraOrdinaryOpen(false);
          }}
        />
      </Modal>
      {/* 013 */}
      {isTaskForm2Open && (
        <TaskForm2
          submitActions={() => {
            console.log("013");
            setShowTask1SubmitModal(true);
          }}
        />
      )}
      {/* 014 new */}
      <Modal
        showModal={showTask1SubmitModal}
        setShowModal={setShowTask1SubmitModal}
        hideClose={true}
      >
        <SubmitModal
          submitActions={() => {
            console.log("014");
            setShowTask1SubmitModal(false);
            setShowNotify3(true);
          }}
          submitText={"Kindly proceed back to the lecture room for debriefing"}
        />
      </Modal>
      {/* 015 */}
      <Notify
        showNotify={showNotify3}
        setShowNotshowNotify={setShowNotify3}
        recipient="Board Chair"
        content="Meeting notes"
        handleOpen={() => {
          console.log("015");
          setShowMailModal4(true);
          setShowNotify3(false);
          // Meeting3
        }}
      ></Notify>
      {/* 016 */}
      <Modal showModal={showMailModal4} setShowModal={setShowMailModal4}>
        <MailModalContent4
          submitActions={() => {
            console.log("016");
            setShowMailModal4(false);
            setShowMailModal4Attach(true);
          }}
        />
      </Modal>
      {/* 017 */}
      <Modal
        showModal={showMailModal4Attach}
        setShowModal={setShowMailModal4Attach}
      >
        <MailModalContent4Attach
          submitActions={() => {
            console.log("017");
            setShowMailModal4Attach(false);
            setIsTaskForm2Open(false);
            setIsTaskForm3Open(true);
            setTimeout(() => {
              setShowNotify4(true);
              console.log("breaking notify triggered");
            }, 3000); //1500000 for 25min // 3000
          }}
        />
      </Modal>

      {/* 19-2 breaking notify*/}
      <Notify
        showNotify={showNotify4}
        setShowNotshowNotify={setShowNotify4}
        recipient="BREAKING NEWS"
        content="Meeting notes"
        imageLink="/images/common/breaking.jpg"
        handleOpen={() => {
          console.log("19-2 breaking notify show");
          setShowMailModal5(true);
          setShowNotify4(false);
        }}
      ></Notify>

      {/* 018 */}
      {isTaskForm3Open && (
        <TaskForm3
          submitActions={() => {
            console.log("018");
            // setShowTask2SubmitModal(true);
          }}
        />
      )}

      {/* 019 */}
      <Modal
        showModal={showTask2SubmitModal}
        setShowModal={setShowTask2SubmitModal}
        hideClose={true}
      >
        <SubmitModal
          submitActions={() => {
            setShowTask2SubmitModal(false);
            console.log("019");
          }}
          submitText={"Kindly proceed back to the lecture room for debriefing"}
        />
      </Modal>
      {/* 019-2 here */}

      {/* 020 Breaking News Video */}
      <Modal showModal={showMailModal5} setShowModal={setShowMailModal5}>
        <MailModalContent5
          submitActions={() => {
            console.log("020 breaking video closed and show new3 task");
            setShowMailModal5(false);
            setIsTaskForm3NewOpen(true);
          }}
        />
      </Modal>

      {/* 021 */}
      {isTaskForm3NewOpen && (
        <TaskForm3New
          submitActions={() => {
            console.log("021 TaskForm3New Submitted");
            setShowTask3SubmitModal(true);
          }}
        />
      )}

      {/* 022 */}
      <Modal
        showModal={showTask3SubmitModal}
        setShowModal={setShowTask3SubmitModal}
        hideClose={true}
      >
        <SubmitModal
          submitActions={() => {
            setShowTask3SubmitModal(false);
            setIsTaskForm3NewOpen(false);
            console.log("022 Task3 submitModal closed");
            console.log("Noftify 6 opened");
            setShowNotify5(true);
          }}
          submitText={"Kindly proceed back to the lecture room for debriefing"}
        />
      </Modal>

      {/* 023 */}
      <Notify
        showNotify={showNotify5}
        setShowNotshowNotify={setShowNotify5}
        recipient="Board Chair"
        content="Meeting notes"
        handleOpen={() => {
          setShowNotify5(false);
          console.log("Noftify 6 closed");
          console.log("024 Meet mail 6 opener");
          setShowMailModal6(true);
        }}
      ></Notify>

      {/* 024 Mail Modal 6 */}
      <Modal showModal={showMailModal6} setShowModal={setShowMailModal6}>
        <MailModalContent6
          submitActions={() => {
            console.log("024 mail openedm notify 6 closed, 7 opened  ");
            console.log("buraya kadar ok mi");
            setShowMailModal6(false);
            setShowMailModal7(true);
          }}
        />
      </Modal>

      {/* 023 Mail Modal 7 */}
      <Modal showModal={showMailModal7} setShowModal={setShowMailModal7}>
        <MailModalContent7
          submitActions={() => {
            console.log("mail7 closed");
            setShowMailModal7(false);
            setIsTaskForm2Open(false);
            setIsTaskForm3Open(false);
            setIsTaskForm4Open(true);
            console.log("task form 4 opened");
          }}
        />
      </Modal>
      {/* 026 */}
      {isTaskForm4Open && (
        <TaskForm4
          submitActions={() => {
            console.log("task form 4 clicked");
            setShowTask4SubmitModal(true);
          }}
        />
      )}

      {/* 027 */}
      <Modal
        showModal={showTask4SubmitModal}
        setShowModal={setShowTask4SubmitModal}
        hideClose={true}
      >
        <SubmitModal
          submitActions={() => {
            console.log("027");
            setShowTask4SubmitModal(false);
            console.log("027 Finito Task4 submitModal");
          }}
          submitText={"Kindly proceed back to the lecture room for debriefing"}
        />
      </Modal>
    </section>
  );
}
