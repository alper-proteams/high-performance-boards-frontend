import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

export default function mail2ModalContent({ submitActions }) {
  return (
    <>
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
          member of the CEO's office (an intern). I have attached the email for
          your review.
        </p>
        <p className="body-default-16 mb-5">
          Given the sensitive nature of these concerns during these critical
          times for our company, I want to bring this matter to your attention
          urgently. We have an already scheduled meeting in two days, and during
          the second half, where the CEO and CFO won't participate, I propose
          allocating time to discuss and address this issue collectively.
        </p>
        <p className="body-default-16 mb-5">
          Your prompt attention to this matter is crucial. Please be prepared
          for a comprehensive discussion during the upcoming meeting.
        </p>
        <p className="body-default-16 mb-5">
          I kindly request alldirectors to thoroughly review the takeover letter
          and any relevant supporting materials prior to the meetings. Please
          come prepared to share your perspectives, insights, and
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
              submitActions();
            }}
            // onClick={() => {
            //   {
            //     setNotify2IsOpen(false);
            //     setShowMail2Modal(false);
            //     setShowMail3Modal(true);
            //   }
            // }}
          >
            Proceed
          </Button>
        </Link>
      </div>
    </>
  );
}
