import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

export default function mail4ModalContent({ submitActions }) {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/S3Dpfyc15qQ?si=N2GptmP0A2d6GnLf"
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
            Breaking Video Watched
          </Button>
        </Link>
      </div>
    </>
  );
}
