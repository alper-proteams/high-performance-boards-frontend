import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

export default function showMeetingModalPre4({ submitActions }) {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <div class="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/feooCAynw4c?si=96S5LntH775k-RzF&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="flex items-center justify-end p-6">
        <Button
          className={"w-full"}
          onClick={() => {
            setShowMeetingModalPre4(false);
            setIsPreSectionOpen(false);
            setIsExtraOrdinaryOpen(true);
          }}
        >
          Proceed
        </Button>
      </div>
    </>
  );
}
