"use client";

import Image from "next/image";
import withAuth from "@/app/lib/withAuth";
import CardPerson from "@/app/components/homepage/card-person";
import AssessmentForm from "@/app/components/form/assessmentForm";
import CardPersonItems from "@/app/data/cv.json";

const Module1 = () => {
  return (
    <>
      <section className="relative h-full flex flex-col md:flex-row items-center justify-center text-white">
        <Image
          className="column-bg md:absolute right-0 top-0 bottom-0 -z-10 w-full md:w-1/2 h-full object-cover"
          src="/images/detail/module1/featured.jpg"
          width={960}
          height={400}
          priority
          alt="image"
        />

        <div className="container z-10 relative">
          <div className="w-full md:w-1/2 md:pt-28 pb-12 md:pr-20">
            <h1 className="h1-headline my-12">
              Pitch & Board
              <br />
              <span>Phase</span>
            </h1>
            <p className="body-default-18 my-12">
              HPBM AG is a hypothetical Germany-based Tier 1 supplier to the
              automotive industry with a two-tier board structure. Please
              analyse the company throughly. Then reflect on your competencies
              and experiences and prepare a short draft for a pitch explaining
              'why you would be a strong candidate to join HPBM's Board.” You
              will pitch in front of your peers in class.Your peers will then
              provide feedback through an anonymous form, evaluating your
              suitability for the HPBM board and offering constructive
              suggestions to enhance your pitch.
            </p>
          </div>
          <div className="block md:hidden section-bg">
            <Image
              src="/images/detail/module1/featured.jpg"
              width={1920}
              height={1080}
              priority
              alt="image"
            />
          </div>
        </div>
        <div className="hidden md:block section-bg">
          <Image
            src="/images/detail/module1/featured.jpg"
            width={1920}
            height={1080}
            priority
            alt="image"
          />
        </div>
      </section>
      <section className="bg-primary-red py-10">
        <h2 className="container h2-bold text-white ">HPBM AG</h2>
      </section>
      <section className="bg-white">
        <div className="container md:grid grid-cols-12 py-12 md:py-24 gap-7">
          <div className="content-header md:sticky top-36 bg-white">About</div>
          <div className="content-detail col-span-8 col-start-5">
            <p>
              High-Performance Bavarian Manufacturing AG (HPBM), headquartered
              in Augsburg, is a Tier 1 supplier to the automotive industry. It
              was taken public in 2017 and is a member of the German mid-cap
              MDAX index with total sales of €3.375 billion in 2023.
            </p>
            <p>
              HPBM AG employs 19,365 people globally. It operates manufacturing
              and assembly facilities in Germany, Hungary, Mexico, and China.
              HPBM´s R&D activities are carried out in around 10 facilities
              worldwide. At its HQ in Germany the company operates two R&D
              centres, one for lighting, the other for power electronics.
              Additional major R&D hubs are located close to Chicago and
              Shanghai.
            </p>
            <p>
              HPBM operates through three divisions designated as Automotive
              Lighting, Automotive Electronics, and Aftermarket. Automotive
              Lighting designs, produces, and commercializes premium light
              elements and sells to premium and luxury OEMs. The Automotive
              Electronics division develops and manufactures power electronics
              for electric vehicles (e.g., for managing the battery in BEVs) and
              sells to leading OEMs. The Aftermarket division sells lighting and
              electronic products to the aftermarket, i.e., key accounts (e.g.,
              chains of repair shops) and distributors. The trend of having more
              advanced headlights (from LED to Laser), more LED/OLED light
              styling elements (both in and outside of the car) and more and
              more driver support systems (electronics) led the business units
              of HPBM to experience double digit unit volume growth in all three
              divisions.
            </p>
            <Image
              src="/images/detail/module1/image1.jpg"
              alt="content-image"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="/images/detail/module1/image3.jpg"
              alt="content-image"
              layout="responsive"
              width={100}
              height={100}
            />
            {/* <Image
              src="/images/detail/module1/image2.jpg"
              alt="content-image"
              layout="responsive"
              width={100}
              height={100}
            /> */}

            {/* <p>
              Car manufacturers (“OEMs”), however, were under pressure to
              finance their costly transition to battery electric vehicles
              (BEV). Due to expensive batteries and power electronics (approx.
              30% of the cost of a new BEV), BEVs had a higher COGS than
              traditional cars. This cost differential was difficult to pass on
              to the market. OEMs leveraged their suppliers to generate savings
              in purchasing, resulting in margin squeeze for HPBM and others.
            </p>
            <p>
              It operates manufacturing and assembly facilities in Germany,
              Hungary, Mexico, and China. HPBM´s R&D activities were carried out
              in around 10 facilities worldwide. At its HQ in Germany the
              company operated two R&D centers, one for lighting, the other for
              power electronics. Additional major R&D hubs were located close to
              Chicago and Shanghai.
            </p> */}
            <p>
              Between 2014 and 2017, HPBM's performance lagged behind its sector
              peers, plagued by misjudgments in the Chinese market, delays in
              R&D projects, and fallout from the Diesel scandal. To address
              these challenges, a management overhaul took place in the summer
              of 2017, with the CEO being replaced and a new leadership team
              brought in. Despite these efforts, the onset of the Covid-19
              pandemic in Q1 of 2020 dealt a severe blow to the automotive
              industry as a whole, leading to widespread supply chain
              disruptions and factory shutdowns.
            </p>
            <p>
              For HPBM, this translated into its worst financial results in a
              decade during the fiscal year 2019/2020. Automotive Lighting and
              Aftermarket segments were particularly affected by production
              adjustments and reduced demand, while Electronics struggled with
              disrupted chip supply chains that persisted until 2022. Although
              demand showed signs of recovery in 2021, it did not fully rebound
              to pre-Covid levels.
            </p>
            <p>
              Recognizing the challenges ahead, the Board extended the CEO's
              contract until summer 2026 in January 2022, demonstrating
              confidence in the leadership's ability to navigate the company
              through uncertain times. Despite projections of continued growth,
              albeit at a slower pace, management remains cautious due to
              anticipated rising costs and ongoing supply chain disruptions.
            </p>
            <p>
              In pursuit of strategic expansion, HPBM plans to establish a
              manufacturing plant in South Africa, capitalizing on favorable
              trade agreements and access to a competitive labor market.
              However, investor concerns have emerged regarding the company's
              readiness for the automotive sector's shifting dynamics,
              particularly towards China, where competitors like BYD are rapidly
              gaining ground with their advanced capabilities and ambitious
              growth plans. Addressing these concerns will be crucial for HPBM
              as it charts its course in an evolving industry landscape.
            </p>
          </div>
          <div className="content-header md:sticky mt-7 md:mt-0 top-36 bg-white">
            Top Management
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
      <section className="bg-primary-black py-20">
        <div className="container text-center text-white">
          <div className="content-header">Corporate Video</div>
          <div className="content-detail col-span-8 col-start-5">
            <iframe
              className="mx-auto"
              width="100%"
              height="630"
              src="https://www.youtube.com/embed/feooCAynw4c?si=96S5LntH775k-RzF&amp;controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container text-center">
          <div className="content-header text-center">
            HPBM Board Construction Presentation
          </div>
          <div className="content-detail col-span-8 col-start-5">
            <div className="content-subheader text-center">Candidates:</div>

            <AssessmentForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(Module1);
