import Image from "next/image";
import CardPerson from "./../../components/homepage/card-person";
import MemberForm from "./../../components/form/MemberForm";
export const CardPersonItems = [
  {
    personImage: "/images/members/01.jpg",
    personName: "Fred Hammerschmidt",
    personTitle: "Chief Executive Officer",
    personContent:
      "Dynamic and experienced CEO with more than 30 years of business experience and an impressive career in the automotive industry. Recognized for strong leadership, strategic vision, and expertise in automotive lighting solutions. Extensive experience in Europe and North America, with a desire to expand into emerging markets. Exceptional mechanical and electrical engineering background.",
  },
];

export default function Module1() {
  return (
    <>
      <section className="relative h-full flex items-center justify-center text-white">
        <div className="container z-10">
          <div className="w-1/2 pt-28 pb-12 pr-20">
            <h1 className="h1-headline my-12">
              Pitch & Board
              <br />
              <span>Select Phase</span>
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
        </div>

        <Image
          className="column-bg absolute right-0 top-0 bottom-0 -z-10 w-1/2 h-full object-cover"
          src="/images/detail/module1/featured.jpg"
          width={960}
          height={400}
          priority
          alt="image"
        />
        <Image
          className="section-bg absolute left-0 top-0 right-0 bottom-0 -z-20 w-full"
          src="/images/detail/module1/hero.jpg"
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
          <div className="content-header sticky top-36 bg-white">About</div>
          <div className="content-detail col-span-8 col-start-5">
            <p>
              High-Performance Bavarian Manufacturing AG (HPB), headquartered in
              Augsburg, is a Tier 1 supplier to the automotive industry. It was
              taken public in 2017 and is a member of the German mid-cap MDAX
              index with total sales of €3.375 billion in 2023.
            </p>
            <Image
              src="/images/detail/module1/image1.jpg"
              alt="content-image"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="/images/detail/module1/image2.jpg"
              alt="content-image"
              layout="responsive"
              width={100}
              height={100}
            />
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
            <p>
              Car manufacturers (“OEMs”), however, were under pressure to
              finance their costly transition to battery electric vehicles
              (BEV). Due to expensive batteries and power electronics (approx.
              30% of the cost of a new BEV), BEVs had a higher COGS than
              traditional cars. This cost differential was difficult to pass on
              to the market. OEMs leveraged their suppliers to generate savings
              in purchasing, resulting in margin squeeze for HPBM and others.
            </p>
            <Image
              src="/images/detail/module1/image3.jpg"
              alt="content-image"
              layout="responsive"
              width={100}
              height={100}
            />
            <p>
              It operates manufacturing and assembly facilities in Germany,
              Hungary, Mexico, and China. HPBM´s R&D activities were carried out
              in around 10 facilities worldwide. At its HQ in Germany the
              company operated two R&D centers, one for lighting, the other for
              power electronics. Additional major R&D hubs were located close to
              Chicago and Shanghai.
            </p>
            <p>
              Between 2014 and 2017 the company performed worse than the sector.
              The leadership had misjudged the development of the Chinese
              market, R&D projects did not deliver on schedule, and the company
              was not prepared for the fallout from the Diesel scandal of 2015
              (e.g., the shift towards electric mobility). To overcome this
              sub-par performance, in the summer of 2017 HPBM´s Board replaced
              the CEO and promoted the former COO to lead the company on a five
              year-contract. As part of this management shake-up, two executive
              committee members resigned. The Board also hired a new CFO, a
              former SVP from a leading OEM who had a lot of international and
              leadership experience. Over the past years the CEO and the CFO
              developed a good working relationship. She is known to be an
              ambitious person with CEO aspirations.
            </p>
            <p>
              The arrival of Covid in Q1 of 2020 posed a severe challenge to the
              automotive industry: government regulations and market
              uncertainties led to severe supply chain disruptions around the
              globe and subsequent factory shutdowns. For FY 2019/2020 HPBM
              recorded its worst financial results in a decade: Automotive
              Lighting suffered from the downward adjustment of production
              targets issues by OEM´s within days after governments around the
              world imposed lock-downs. Aftermarket suffered from a reduction in
              maintenance and repair demand due to lower traffic volumes and
              accidents. Electronics suffered from ruptured chip supply chains
              and until 2022, continued to face challenges stemming from the
              cancellation of orders to the chip fabs in Taiwan, Asia, and
              Europe (as a result of their reaction to Covid shutdowns). In
              2021, demand recovered but did not reach pre-Covid levels. In
              January 2022 the Board decided to prolong the contract of the CEO
              by 4 years until summer 2026.
            </p>
            <p>
              n the last earnings call for FY 2021/2022, top management
              predicted that the positive momentum would continue until 2026
              albeit at a slower rate. It expected rising cost pressures due to
              inflationary environment and continuing supply chain
              uncertainties. The company also plans to build a plant in South
              Africa to take advantage of favorable trade agreements (cars can
              be exported to Americas and Europe without any tariffs) and access
              its competitive labor market.
            </p>
            <p>
              At the annual shareholder meeting in October 2022, investors
              voiced concerns that HPBM was not prepared for the shift in the
              automotive sector towards China: OEMs like BYD were at the center
              of attention due to their significant production volumes, advanced
              digital capabilities, and aggressive growth targets for markets
              outside of China.
            </p>
          </div>
          <div className="content-header sticky top-36 bg-white">
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
          <div className="content-header mb-16">Corporate Video</div>
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
          <div className="content-header mb-16">
            HPBM Board Member Pitch Assessment
          </div>
          <div className="content-detail col-span-8 col-start-5">
            <MemberForm />
          </div>
        </div>
      </section>
    </>
  );
}
