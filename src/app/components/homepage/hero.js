"use client";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-content--master">
          <span className="text-5xl xl:text-[140px] font-extralight w-max">
            Experience
          </span>
          <span className=" text-[43px] xl:text-[104px] leading-none font-medium w-max mb-7 xl:mb-14">
            Learn and Lead
          </span>
        </div>
        <div className="flex flex-col gap-9 xl:gap-16">
          <div className="hero-box">
            HPB AG is an
            <br /> immersive Board <br />
            <strong>Leadership Simulation</strong>
          </div>
          <div className="hero-box">
            It is your
            <br /> Gateway to
            <br />
            <strong>Board Excellence</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
