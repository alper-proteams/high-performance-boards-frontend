"use client";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import hpmText from "/public/images/homepage/hpb-text.svg";

export default function Welcome() {
  return (
    <section className="welcome relative min-h-screen text-center flex flex-col justify-center overflow-hidden">
      <div className="container">
        <div className="text-5xl md:text-8xl font-medium text-white">
          Welcome to the
        </div>
        <div className="text-5xl md:text-8xl font-medium text-primary-red">
          HPB Simulation
        </div>
        <div className="text-5xl md:text-8xl font-light text-white">
          Experience
        </div>
      </div>
      <ParallaxProvider>
        <Parallax
          className="absolute -bottom-10 w-[180%] hidden xl:block"
          translateX={[20, -70]}
          translateY={[0, 0]}
        >
          <Image
            layout="responsive"
            width={200}
            height={40}
            src={hpmText}
            alt="image"
          />
        </Parallax>
      </ParallaxProvider>
    </section>
  );
}
