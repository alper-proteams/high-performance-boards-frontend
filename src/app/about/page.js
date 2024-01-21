import Image from "next/image";
export const metadata = {
  title: "HPB - About",
  description: "High Performance Board",
};

export default function About() {
  return (
    <section className="mt-32 mb-16 xl:px-12">
      <div className="page-header text-center">About</div>
      <div className="full-container bg-white">
        <div className="card flex flex-col xl:flex-row items-start p-4 xl:py-20 xl:px-36 gap-4 xl:gap-0">
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
                navigate complex situations with agility. Welcome to the "HPB
                Board Leadership Simulation," an on-site transformative
                experiential training workshop tailored for aspiring or recently
                appointed Board members across SMEs, family businesses, and
                listed companies alike. The workshop will sharpen their skills
                to help an organization achieve its purpose and targets over the
                long run. Developed by Professor Serden Ozcan from WHU Otto
                Beisheim School of Management and Professor Marc Sachon from
                IESE Business School, this simulation is based on rigorous
                academic research paired with relevant practitioner insights
                drawn from the feedback of many international senior executives.
              </p>

              <p className="body-default-18">
                The workshop will expose participants to immersive scenarios
                situations in which they will be able to apply their learnings
                about Boards as well as their previous experience in strategic
                decision-making, crisis management, leadership in complex
                situations, cross-border M&A, team-building, executive pitching,
                and ethical leadership – all to ensure the wellbeing of the
                company and its key stakeholders while experiencing first-hand
                the importance of Board governance and Board dynamics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
