"use client";
import Image from "next/image";

export default function CardHomepage({
  cardTag,
  cardHeader,
  cardContent,
  className,
  cardImage,
  ...props
}) {
  return (
    <div className={`${className} ${"card-homepage md:flex"}`} {...props}>
      <Image
        className="w-2/5"
        src={cardImage}
        alt="card1"
        width={430}
        height={600}
        priority
      />
      <div className="card-body">
        {cardTag && <div className="card-tag">{cardTag}</div>}
        {cardHeader && <div className="card-header">{cardHeader}</div>}
        {cardContent && <div className="card-content">{cardContent}</div>}
      </div>
    </div>
  );
}
