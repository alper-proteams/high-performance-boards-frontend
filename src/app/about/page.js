import Image from "next/image";

export default function About() {
  return (
    <section className="mt-32 mb-16 px-12">
      <div className="page-header text-center">About</div>
      <div className="full-container bg-white">
        <div className="card flex items-start py-20 px-36">
          <Image
            src="/images/common/about.jpg"
            width={500}
            height={300}
            priority
            alt="image"
            className="mr-16"
          />

          <div className="card-body">
            <div className="card-content">
              <p className="body-default-24">
                In the fast-paced and ever-evolving landscape of modern
                business, effective board leadership demands a unique blend of
                strategic thinking, crisis management, and the ability to
                navigate complex situations with agility.
              </p>

              <p className="body-default-18">
                Welcome to the "HPBM AG Board Leadership Simulation," an
                on-campus transformative training program meticulously crafted
                for aspiring or fresh Supervisory Board members, designed to
                sharpen their skills to help an organization achieve its purpose
                and targets over the long run. Developed by professors,
                Professor Marc Sachon from IESE Business School and Professor
                Serden Ozcan from WHU Otto Beisheim School of Management, this
                simulation has been refined through extensive engagement, having
                been played by hundreds of senior executives and board members
                from across the world.
              </p>
              <p className="body-default-18">
                The simulation will expose participants to immersive scenarios
                situations in which they will be able to apply their learnings
                about Boards as well as their previous experience in strategic
                decision-making, crisis management, leadership in complex
                situations, cross-border M&A, team-building, executive pitching,
                and ethical leadership – all to ensure the wellbeing of the
                company and its key stakeholders.
              </p>

              <p className="body-default-18">
                For instructors, the simulation comes with an extensive support
                package, including comprehensive materials, detailed facilitator
                guides, interactive functionalities and continuous updates to
                ensure a seamless and enriching learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
