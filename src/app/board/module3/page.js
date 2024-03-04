"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/button";
import Modal from "@/app/components/modal";

export default function About() {
  // const [showModal2, setShowModal2] = React.useState(false);
  return (
    <section className="relative">
      {/* <Modal
        showModal={showModal2}
        setShowModal={setShowModal2}
        title={"Take Over Letter"}
      >
        <div className="relative p-6 flex-auto">
          In the upcoming phase of the simulation, you and your fellow board
          members will face a series of unexpected events demanding the Board's
          immediate involvement and governance. These hypothetical scenarios
          will intensify the pressure on the Board, compelling critical
          decisions.
        </div>
        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
          <Button onClick={() => setShowModal2(false)}>Proceed</Button>
        </div>
      </Modal> */}
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
                board members will face a series of unexpected events demanding
                the Board's immediate involvement and governance. These
                hypothetical scenarios will intensify the pressure on the Board,
                compelling critical decisions.
              </p>

              {/* <Button onClick={() => setShowModal2(true)}>Proceed2y</Button> */}
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
    </section>
  );
}
