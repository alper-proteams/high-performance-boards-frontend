import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

export default function mail4ModalContent({ submitActions }) {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="text-primary-red max-w-[75px] col-span-1">TO</div>
          <div className="col-span-3">Members of the Supervisory Board</div>
          <div className="text-primary-red max-w-[75px] col-span-1">FROM</div>
          <div className="col-span-3">Chair of the Supervisory Board</div>
          <div className="text-primary-red max-w-[75px] col-span-1">DATE</div>
          <div className="col-span-3">18 April 2024 at 09:51</div>
          <div className="text-primary-red max-w-[75px] col-span-1">
            SUBJECT
          </div>
          <div className="col-span-3">Call for an Extraordinary Meeting</div>
        </div>

        <p className="body-default-16 mb-5">Dear Directors,</p>
        <p className="body-default-16 mb-5">
          As you may already be aware, this morning at 08:24, the news of the
          WHSE takeover offer was broken by MNBC, a prominent business channel.
          Consequently, the offer is now public knowledge, and we find ourselves
          in a situation that requires our immediate attention.
        </p>
        <p className="body-default-16 mb-5">
          I would like to inform you that we have been contacted by several
          media outlets seeking comments regarding the takeover offer. As per
          our established policy, we have refrained from making any statements
          at this time. I believe it is crucial that we maintain this "no
          comment" stance, and from our understanding, WHSE intends to follow
          our lead in this matter.
        </p>
        <p className="body-default-16 mb-5">
          However, it is not just the media that has taken a keen interest in
          our company's affairs. Since the news broke this morning, our head of
          investor relations has been approached by two institutional investors
          who have requested meetings with us. We anticipate that there will be
          more such requests in the coming days as the situation unfolds.
        </p>
        <p className="body-default-16 mb-5">
          Considering the rapidly evolving nature of events and the need for us
          to stay informed and proactive, I propose the convening of an
          extraordinary board meeting. This meeting will provide us with an
          opportunity to update one another comprehensively on the current
          situation and collectively review the recent developments. It is
          crucial that we act swiftly and efficiently to navigate through this
          critical period.
        </p>

        <p className="body-default-16 mb-5">
          I suggest scheduling an extraordinary board meeting for 20th April
          2024, from 16:30 to 19:30.
        </p>
        <p className="body-default-16 mb-5">
          I look forward to your prompt response and to gathering as a board to
          navigate this situation together.
        </p>
        <p className="body-default-16 mb-5">Best regards,</p>
        <p className="body-default-16 mb-5">
          Chair of the Supervisory
          <br />
          Board, HPBM AG.
        </p>
      </div>

      <div className="content-subheader text-center text-primary-red mb-6">
        Attachment
      </div>
      <Image
        className="mx-auto mb-12 cursor-pointer"
        src="/images/common/attachment.svg"
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
