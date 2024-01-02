"use client";
import Image from "next/image";
import Link from "next/link";

export default function CardPerson({
  personImage,
  personTitle,
  personName,
  personContent,
  className,
  ...props
}) {
  return (
    <div className={`${className} ${"card-person flex"}`} {...props}>
      {personImage && (
        <Image
          src={personImage}
          alt="card1"
          width={430}
          height={600}
          priority
        />
      )}
      <div className="card-body">
        {personName && (
          <div className="card-header">
            {personName}
            {personTitle && <div className="card-subheader">{personTitle}</div>}
          </div>
        )}

        {personContent && <div className="card-content">{personContent}</div>}
        <Link className="text-primary-red" href="#">
          See Full CV
        </Link>
      </div>
    </div>
  );
}
