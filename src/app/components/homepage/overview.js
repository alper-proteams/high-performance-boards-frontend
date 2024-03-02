"use client";
import CardHomepage from "./card-homepage";
export const CardHomepageItems = [
  {
    cardImage: "/images/homepage/card1.jpg",
    cardTag: "Phase 1",
    cardHeader: (
      <>
        Pitch & Board
        <br />
        <span>Phase</span>
      </>
    ),
    cardContent: (
      <>
        <p>
          During the workshop kick-off, participants will engage in a "Board
          Selection" process, where they'll present themselves as prospective
          board members for HPBM AG, a fictional tier one supplier in the
          automotive industry. Each participant will have the opportunity to
          pitch their qualifications and suitability to the entire session.
        </p>
      </>
    ),
  },
  {
    cardImage: "/images/homepage/card2.jpg",
    cardTag: "Phase 2",
    cardHeader: (
      <>
        Construction
        <br />
        <span>Phase</span>
      </>
    ),
    cardContent: (
      <>
        <p>
          After the Boards have been formed, they will proceed to a
          "construction" phase, where they must decide on the Board Chair and
          establish the necessary committees.
        </p>
      </>
    ),
  },
  {
    cardImage: "/images/homepage/card3.jpg",
    cardTag: "Phase 3",
    cardHeader: (
      <>
        Decision
        <br />
        <span>Phase</span>
      </>
    ),
    cardContent: (
      <>
        <p>
          During this phase the Boards will be confronted with a sequence of
          events which require the Board’s active involvement and governance.
          There will be several joint de-briefings where all teams will explain
          their decisions regarding the events that took place.
        </p>
      </>
    ),
  },
  {
    cardImage: "/images/homepage/card4.jpg",
    cardTag: "Phase 4",
    cardHeader: (
      <>
        Post-
        <br />
        <span>Simulation</span>
      </>
    ),
    cardContent: (
      <>
        <p>
          After the conclusion of the simulation, there will be a general
          debriefing for all teams. It will put the simulation into context of
          the material covered during the workshop and allow participants to
          clarify any doubts they have.
        </p>
      </>
    ),
  },
];
export default function Overview() {
  return (
    <section className="bg-white">
      <div className="container md:grid grid-cols-12 py-24 gap-7">
        <div className="content-header xl:sticky top-36 bg-white">
          Simulation Overview
        </div>
        <div className="content-detail col-span-9 col-start-4">
          {CardHomepageItems.map((card, index) => (
            <CardHomepage
              key={index}
              cardImage={card.cardImage}
              cardTag={card.cardTag}
              cardHeader={card.cardHeader}
              cardContent={card.cardContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
