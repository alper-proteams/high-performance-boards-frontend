import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";
import CardPerson from "@/app/components/homepage/card-person";
import CardPersonItems from "@/app/data/cv.json";

export default function showMeetingModalPre2({ submitActions }) {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <Image
          className="mx-auto mb-9"
          src="/images/detail/module3/builds.jpg"
          alt="WHSE Inc"
          width={1224}
          height={418}
        />
        <p className="body-default-16 mb-5">
          WHSE Inc. is a prominent US-based company with a strong presence in
          both the automotive and non-automotive industries. Headquartered in
          Detroit, Michigan, WHSE Inc. is listed on the New York Stock Exchange
          (NYSE), boasting a substantial market capitalization of $16 billion.
          The company operates through four distinct operating segments, each
          catering to the evolving needs of its diverse customer base.
        </p>
        <p className="body-default-16 mb-5">
          With approximately 35,000 dedicated employees worldwide, WHSE Inc.
          harnesses the collective expertise and talent of its workforce to
          drive innovation and deliver exceptional products and services. WHSE
          Inc. has established a global presence with a network of 30 facilities
          and innovation centers strategically located across Asia, the
          Americas, Europe, and Africa. These facilities serve as hubs for
          research and development, manufacturing, and customer support,
          enabling WHSE Inc. to effectively serve its global clientele.
        </p>
        <p className="body-default-16 mb-5">
          WHSE Inc.'s subsidiaries, including Lightstar International Inc. and
          AutoSense Inc., are key players in the automotive sector. Lightstar
          International Inc. is renowned as a tier 1 supplier, recognized for
          its intelligent lighting solutions. Meanwhile, AutoSense Inc.
          specializes in innovative sensor technologies for autonomous driving
          and advanced vehicle safety features.
        </p>
        <p className="body-default-16 mb-5">
          In the non-automotive industry segment, WHSE Inc. leverages its
          expertise through subsidiaries such as Advanced Logistics Solutions
          (ALS) and Industrial Lighting Solutions (ILS). ALS offers intelligent
          warehousing and logistics solutions tailored to the specific needs of
          manufacturers, while ILS focuses on efficient and effective lighting
          solutions for warehouses and manufacturing plants. These subsidiaries
          highlight WHSE Inc.'s commitment to delivering comprehensive solutions
          that optimize operational efficiency and safety across various
          industries.
        </p>
        <p className="body-default-16 mb-5">
          In recent years, WHSE Inc. has pursued an active acquisition strategy,
          aiming to expand its market reach and diversify its portfolio. The
          company has successfully completed several acquisitions, primarily on
          a smaller scale. However, some industry observers have raised
          questions regarding the effectiveness of WHSE Inc.'s acquisition
          strategy and its ability to seamlessly integrate acquired companies.
        </p>
        <p className="body-default-16 mb-5">
          Notably, WHSE Inc. made two significant acquisitions in the automotive
          industry, each surpassing the $1 billion mark in value. Unfortunately,
          these acquisitions did not yield the anticipated results, prompting
          discussions about the company's integration capabilities. WHSE Inc.
          remains committed to driving growth and fostering innovation across
          its operating segments.
        </p>
        <h2>Lightstar</h2>
        <p className="body-default-16 mb-5">
          Lghstar International Inc., a prominent lighting solutions company
          headquartered in Detroit, Michigan, specializes in providing
          cutting-edge intelligent lighting solutions for the automotive
          industry. With a strong focus on this sector, the company operates two
          manufacturing plants in the United States, with one situated in
          Detroit and the other in Tennessee. Approximately 38% of Lighstar's
          revenues are generated from the North American market.
        </p>
        <p className="body-default-16 mb-5">
          In addition to its operations in North America, Lighstar Inc. has
          strategically expanded its reach in Latin America with production
          plants in Mexico and Brazil. Furthermore, Lighstar operates a
          manufacturing facility in the Czech Republic in Europe, further
          solidifying its commitment to providing lighting solutions for the
          automotive sector on a global scale. Additionally, the company's
          innovation center near Stuttgart, Germany, drives research and
          development efforts in Europe to stay at the forefront of intelligent
          lighting technology in the automotiveindustry.
        </p>
        <p className="body-default-16 mb-5">
          Lightstar has a limited presence in Asia. In 2015, Lightstar opened
          its first manufacturing plant in Indonesia as part of its efforts to
          tap into the growing Asian market. This facility serves as a strategic
          base for the company to meet the demand for its lighting solutions in
          the region. In 2018, Lighstar established an innovation center in
          Singapore. In the last fiscal year, Asia accounted for approximately
          13% of Lightstar's global revenues.
        </p>
        <p className="body-default-16 mb-5">
          Lightstar has encountered several challenges in recent times. Firstly,
          the company has faced mounting pressure from well-established players
          in its key markets. Furthermore, the automotive lighting industry is
          witnessing a transformative trend towards intelligent, efficient,
          environmentally friendly, and personalized lighting solutions. This
          shift in customer preferences has created a growing demand for
          innovative, high-quality, and visually appealing lighting solutions,
          encompassing both exterior beams and interior applications.
        </p>
        <p className="body-default-16 mb-5">
          Lightstar has, in general, not been widely acknowledged as a
          technological leader with premium products. Despite recent efforts,
          the company has faced challenges in successfully reorienting itself
          towards the premium segments that require more sophisticated and
          advanced solutions. European manufacturers currently dominate these
          segments.
        </p>
        <p className="body-default-16 mb-5">
          The global automotive lighting market is projected to experience
          substantial growth, with an estimated increase from USD 21.9 billion
          in 2022 to USD 28.5 billion in 2027, reflecting a compound annual
          growth rate (CAGR) of 5.3% (Source: Markets & Markets 2023)). The
          increasing demand for premium vehicles is expected to be a significant
          driver for the growth of advanced lighting systems in the automotive
          industry. Customers seeking premium vehicles increasingly prioritize
          advanced lighting features that offer improved aesthetics,
          functionality, and energy efficiency.
        </p>
        {CardPersonItems.map((card, index) => (
          <CardPerson
            className={"mb-10"}
            key={index}
            personImage={card.personImage}
            personTitle={card.personTitle}
            personName={card.personName}
            personContent={card.personContent}
          />
        ))}
      </div>
      <div className="flex items-center justify-end p-6">
        <Button
          className={"w-full"}
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
