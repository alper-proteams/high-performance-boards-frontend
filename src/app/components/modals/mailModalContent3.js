import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

export default function mail3ModalContent({ submitActions }) {
  return (
    <>
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
          I hope this email reaches you under the strictest confidence. I regret
          to inform you that the CEO of HPBM is behaving in a way that raises
          serious concerns about the CEO's ethical conduct, undermining our
          corporate compliance guidelines.
        </p>
        <p className="body-default-16 mb-5">
          This past weekend I happened to see his yacht pull into the port of
          Barcelona. At the time I was having a lunch with my friends. The
          restaurant was located next to the Marina, about 50 m from where the
          yacht docked.
        </p>
        <p className="body-default-16 mb-5">
          To my surprise, the only other passenger on board was Miss Maria D., a
          24-year old trainee who joined our company a year ago after completing
          her bachelor’s degree in marketing. Miss D. is currently participating
          in our HIPO program. As part of this program, she was assigned to the
          CEO’s office six months ago. She is the first and only trainee in the
          program's eight-year history to be assigned to the CEO.
        </p>
        <p className="body-default-16 mb-5">
          I also want to point out that Miss. D. financed her university studies
          by working as a model in the sports fashion industry.
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
        />
      </div>
      <div className="flex items-center justify-end p-6">
        <Link className={"w-full"} href="#">
          <Button
            className={"w-full"}
            onClick={() => {
              submitActions();
            }}
          >
            Proceed mail3
          </Button>
        </Link>
      </div>
    </>
  );
}
