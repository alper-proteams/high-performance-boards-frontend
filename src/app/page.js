import Image from "next/image";
import Hero from "@/app/components/homepage/hero";
import Welcome from "@/app/components/homepage/welcome";
import Overview from "@/app/components/homepage/overview";
import Skills from "@/app/components/homepage/skills";
export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Overview />
      <Skills />
    </>
  );
}
