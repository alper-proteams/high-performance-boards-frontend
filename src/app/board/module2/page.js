"use client";
import Image from "next/image";
import withAuth from "@/app/lib/withAuth";
import CardPerson from "./../../components/homepage/card-person";
import DocForm from "./../../components/form/docForm";
export const CardPersonItems = [
  {
    personImage: "/images/members/01.jpg",
    personName: "Fred Hammerschmidt",
    personTitle: "Chief Executive Officer",
    personContent:
      "Dynamic and experienced CEO with more than 30 years of business experience and an impressive career in the automotive industry. Recognized for strong leadership, strategic vision, and expertise in automotive lighting solutions. Extensive experience in Europe and North America, with a desire to expand into emerging markets. Exceptional mechanical and electrical engineering background.",
  },
];

const Module2 = () => {
  return (
    <>
      <section className="relative h-full flex flex-col md:flex-row items-center justify-center text-white">
        <Image
          className="column-bg md:absolute right-0 top-0 bottom-0 -z-10 w-full md:w-1/2 h-full object-cover"
          src="/images/detail/module2/featured.jpg"
          width={960}
          height={400}
          priority
          alt="image"
        />

        <div className="container z-10 relative">
          <div className="w-full md:w-1/2 md:pt-28 pb-12 md:pr-20">
            <h1 className="h1-headline my-12">
              Construction
              <br />
              <span>Select Phase</span>
            </h1>
            <p className="body-default-18 my-12">
              Following your successful navigation of the Board Pitch and
              Selection Phase, you are now in a pivotal position to shape the
              future of HPBM AG by constructing a dynamic and effective board.
              With the names of your fellow board members already determined in
              the first module, your task is to define roles, outline
              responsibilities, establish committees tailored to the unique
              needs of HPBM AG and appoint fellow board members to them. This
              module serves as the linchpin for translating strategic vision
              into actionable governance, where each of you plays a crucial role
              in building a board that seamlessly aligns with HPBM AG's strategy
              and mission. As the culmination, you will present your board
              construction and rationale to your peers.
            </p>
          </div>
          <Image
            className="block md:hidden section-bg absolute left-0 top-0 right-0 bottom-0 -z-20 w-full h-full"
            src="/images/detail/module2/hero.jpg"
            width={1920}
            height={1080}
            priority
            alt="image"
          />
        </div>

        <Image
          className="hidden md:block section-bg absolute left-0 top-0 right-0 bottom-0 -z-20 w-full"
          src="/images/detail/module2/hero.jpg"
          width={1920}
          height={1080}
          priority
          alt="image"
        />
      </section>

      <section className="bg-primary-red py-10">
        <h2 className="container h2-bold text-white ">HPBM AG</h2>
      </section>
      <section className="bg-white">
        <div className="container md:grid grid-cols-12 py-24 gap-7">
          <div className="content-header md:sticky top-36 bg-white">
            Employee Representatives
          </div>

          <div className="content-detail col-span-8 col-start-5">
            <p>
              The company's core leadership team consists of the following
              individuals, accompanied by their CVs.
            </p>
          </div>
          <div className="content-detail col-span-8 col-start-5">
            {CardPersonItems.map((card, index) => (
              <CardPerson
                key={index}
                personImage={card.personImage}
                personTitle={card.personTitle}
                personName={card.personName}
                personContent={card.personContent}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container text-center">
          <div className="content-header text-center">
            HPBM Board Member Pitch Assessment
          </div>
          <div className="content-detail col-span-8 col-start-5">
            <DocForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(Module2);
