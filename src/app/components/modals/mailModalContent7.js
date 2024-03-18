import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

export default function mail7ModalContent({ submitActions }) {
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
        <p className="body-default-16 mb-5 text-primary-red !font-semibold">
          Summary of key remarks by Mr Willard, the CEO of WHSE Inc.
        </p>
        {/* <p className="body-default-16 mb-5 italic !font-light">
          "While we are disappointed by the rejection, we remain highly
          enthusiastic about the potential merger. We firmly believe that our
          proposal offers compelling advantages for your shareholders,
          delivering immediate and significant value."
        </p> */}
        <p className="body-default-16 mb-5 italic !font-light">
          “We remain highly enthusiastic about the potential merger. We firmly
          believe that our proposal offers compelling advantages for your
          shareholders, delivering immediate and significant value.”
        </p>
        <p className="body-default-16 mb-5 italic !font-light">
          "The current news surrounding South Africa has not dampened our
          interest. However, we do have concerns and are curious about what may
          come next. The recent 7% drop in the share price since the news
          emerged indicates a lack of investor confidence in the current
          leadership."
        </p>
        <p className="body-default-16 mb-5 italic !font-light">
          "We have engaged in extensive discussions with HPBM's key
          shareholders, and we are pleased to see that they share our excitement
          and fully embrace our vision."
        </p>
        <p className="body-default-16 mb-5 italic !font-light">
          "We urge the HPBM board to accept our offer. Our offer already
          accounts for both the upside potential of HPBM and its existing
          operational challenges. It is important to emphasize that we will not
          increase our offer."
        </p>
        <p className="body-default-16 mb-5 italic !font-light">
          "We strongly prefer working collaboratively with you to achieve a
          mutually beneficial transaction. We believe it is in the best interest
          of both companies and our respective shareholders to swiftly move
          forward and finalize this transaction."
        </p>
        <p className="body-default-16 mb-5 italic !font-light">
          "Regrettably, should our offer be rejected once again, we will be left
          with no alternative but to pursue a hostile takeover."
        </p>
      </div>

      {/* <div className="content-subheader text-center text-primary-red mb-6">
        Attachment
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
      /> */}

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
      </div>
    </>
  );
}
