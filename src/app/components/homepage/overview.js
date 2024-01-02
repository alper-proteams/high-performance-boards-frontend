"use client";
import CardHomepage from "./card-homepage";
export const CardHomepageItems = [
  {
    cardImage: "/images/homepage/card1.jpg",
    cardTag: "Module 1",
    cardHeader: (
      <>
        Pitch & Board
        <br />
        <span>Select Phase</span>
      </>
    ),
    cardContent: (
      <>
        <p>
          At simulation kick-off, participants will gob through a " Board
          Selection", pitching themselves as potential board members for HPBM AG
          to everyone in the session.{" "}
        </p>

        <p>
          After thisphase the trainers will reveal the different “Boards” of HPB
          (each team will represent an HPB Board – enabling a comparison of
          approaches taken by the different Boards during the simulation).
        </p>
      </>
    ),
  },
  {
    cardImage: "/images/homepage/card2.jpg",
    cardTag: "Module 2",
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
          Once the Boards (teams) have been formed, they will go through a
          “construction” phase.
        </p>

        <p>
          They will receive additional information and must decide who will
          chair the Board and form the necessary committees.
        </p>
      </>
    ),
  },
  {
    cardImage: "/images/homepage/card3.jpg",
    cardTag: "Module 3",
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
          During this phase the teams will be confronted with a sequence of
          events which require the Board’s active involvement and governance.
          There will be several joint de-briefings where all teams will explain
          their decisions regarding the events that took place.
        </p>

        <p>
          They will learn from each other and receive feedback and
          recommendations before moving back to their meeting rooms (and the
          simulation continues).
        </p>
      </>
    ),
  },
  {
    cardImage: "/images/homepage/card4.jpg",
    cardTag: "Module 4",
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
          the material covered during the program and allow participants to
          clarify any doubts they have.
        </p>

        <p>
          Participants will receive a general “debriefing deck” which summarizes
          some of the most relevant points covered in the simulation and
          program.
        </p>
      </>
    ),
  },
];
export default function Overview() {
  return (
    <section className="bg-white">
      <div className="container grid grid-cols-12 py-24 gap-7">
        <div className="content-header">Simulation Overview</div>
        <div className="content-detail">
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
