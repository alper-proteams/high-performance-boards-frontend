import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

export default function mail6ModalContent({ submitActions }) {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="text-primary-red max-w-[75px] col-span-1">TO</div>
          <div className="col-span-3">Members of the Supervisory Board</div>
          <div className="text-primary-red max-w-[75px] col-span-1">FROM</div>
          <div className="col-span-3">Chair of the Supervisory Board</div>
          <div className="text-primary-red max-w-[75px] col-span-1">DATE</div>
          <div className="col-span-3">22 April 2024 at 09:03</div>
          <div className="text-primary-red max-w-[75px] col-span-1">
            SUBJECT
          </div>
          <div className="col-span-3">Call for an Extraordinary Meeting</div>
        </div>

        <p className="body-default-16 mb-5">Dear Directors,</p>
        <p className="body-default-16 mb-5">
          I hope this email finds you well. I am writing to inform you about a
          conference call I had this morning with Mr. Willard, the Chair,
          President & CEO of WHSE Inc., along with our General Counsel, Dr.
          Meier, WHSE's General Counsel, Mr. Shapiro, and WHSE's Board
          Secretary, Mr. Johansen.
        </p>
        <p className="body-default-16 mb-5">
          The conference call, initiated by Mr. Willard yesterday evening, took
          place from 06:30 to 08:15 this morning. Notably, Mr. Willard requested
          that no member of our leadership team participate in the call due to
          the current news flow surrounding South Africa. In the interest of
          prudence, I respected his request.
        </p>
        <p className="body-default-16 mb-5">
          I have attached the transcript of our conversation for your reference.
          It clearly illustrates Mr. Willard's unwavering commitment to
          completing the deal and his willingness to go the extra mile.
        </p>
        <p className="body-default-16 mb-5">
          Considering the insights gained from this conference call, I believe
          it is essential to convene another extraordinary meeting to discuss
          the way forward. I propose the following date and time for this
          meeting:
        </p>
        <p className="body-default-16 mb-5">
          Date: 24 April 2024 Time: 07.30-10.00
        </p>
        <p className="body-default-16 mb-5">
          During the meeting, we will delve deeper into the matters discussed
          during the call and strategize on the best course of action. Your
          valuable input and expertise as board members will be crucial in
          shaping our path ahead.
        </p>
        <p className="body-default-16 mb-5">
          Thank you for your attention to this matter. I look forward to meeting
          with you to chart our course forward.
        </p>
        <p className="body-default-16 mb-5">Best regards,</p>
        <p className="body-default-16 mb-5">
          Chair of the Supervisory
          <br />
          Board, HPBM AG.
        </p>
      </div>

      <div className="content-subheader text-center text-primary-red mb-6">
        Transcript
      </div>
      <Image
        className="mx-auto mb-12 cursor-pointer"
        src="/images/common/transcript.svg"
        alt="E-mail"
        width={250}
        height={250}
        onClick={() => {
          submitActions();
        }}
      />

      {/* 
      <div className="flex items-center justify-end p-6">
        <Link className={"w-full"} href="#">
          <Button
            className={"w-full"}
            onClick={() => {
              submitActions();
            }}
          >
            Proceed
          </Button>
        </Link>
      </div> */}
    </>
  );
}
