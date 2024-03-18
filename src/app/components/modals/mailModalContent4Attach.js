import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

export default function mail4ModalContentAttach({ submitActions }) {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/B6zysk1eFwk?si=N2GptmP0A2d6GnLf"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
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