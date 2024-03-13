import Button from '@/app/components/button';
import Image from 'next/image';
import Link from 'next/link';

export default function showVideoContentModal({ submitActions, videoSrc }) {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={videoSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="flex items-center justify-end p-6">
        <Button
          className={'w-full'}
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
