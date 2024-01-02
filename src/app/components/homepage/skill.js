"use client";
import Image from "next/image";

export default function Skill({ className, content, ...props }) {
  return (
    <div className={`${className} ${"skill"}`} {...props}>
      <Image
        src="/images/icons/skill-icon-red.svg"
        alt="skill-icon"
        width={48}
        height={48}
      />
      {content}
    </div>
  );
}
