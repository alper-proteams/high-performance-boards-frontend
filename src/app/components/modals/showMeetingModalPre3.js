import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

export default function showMeetingModalPre3({ submitActions }) {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <p className="body-default-16 mb-5">
          Below, you'll find the latest financial information for the company.
        </p>
        <h2>Financials</h2>
        <Image
          className="mx-auto w-auto h-auto"
          src="/images/detail/module3/finance-table.jpg"
          alt="E-mail"
          width={700}
          height={300}
        />
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
