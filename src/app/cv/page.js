import Image from "next/image";

export default function About() {
  return (
    <section className="mt-32 mb-16 px-12">
      <div className="container md:grid grid-cols-12 py-24 gap-7">
        <div className="cv-sidebar bg-white">
          <Image
            className="mb-6"
            src="/images/members/01.jpg"
            alt="skill-icon"
            layout="responsive"
            width={100}
            height={100}
          />
          <div className="cv-box-subheader">Marie Bellois</div>
          <p className="cv-box-subdesc">Chief Financial Officer</p>
          <hr className="opacity-50 my-6" />

          <div className="cv-box">
            <div className="cv-box-header">Professional Experience</div>
            <div className="cv-subbox">
              {/* <div className="cv-icon">H</div> */}
              <div>
                <div className="cv-box-subheader">Professional Experience</div>
                <div className="cv-box-title">Chief Financial Officer</div>
                <div className="cv-box-silent">2017 - Present</div>
                <p className="cv-box-subdesc">
                  Married, Mother of two adult children, Avid competitive sports
                  enthusiast, fostering discipline and determination (former
                  member of Spanish Olympic sailing team)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cv-detail">
          <div className="cv-box">
            <div className="cv-box-header">Professional Summary</div>
            <p>
              At simulation kick-off, participants will gob through a " Board
              Selection", pitching themselves as potential board members for
              HPBM AG to everyone in the session.
            </p>
          </div>

          <div className="cv-box">
            <div className="cv-box-header">Professional Experience</div>
            <div className="cv-subbox">
              <div className="cv-icon">H</div>
              <div>
                <div className="cv-box-subheader">Professional Experience</div>
                <div className="cv-box-title">Chief Financial Officer</div>
                <div className="cv-box-silent">2017 - Present</div>
                <p className="cv-box-subdesc">
                  Spearheaded the financial strategy and execution. Led a
                  cross-functional team to optimize the cost structure,
                  resulting in a reduction in operational expenses while
                  maintaining product quality. Implemented a comprehensive risk
                  management framework, ensuring business continuity in an
                  ever-evolving industry. Fostered a collaborative and
                  innovative corporate culture, resulting in improved employee
                  satisfaction and retention.
                </p>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="cv-subbox">
              <div className="cv-icon">H</div>
              <div>
                <div className="cv-box-subheader">Professional Experience</div>
                <div className="cv-box-title">Chief Financial Officer</div>
                <div className="cv-box-silent">2017 - Present</div>
                <p className="cv-box-subdesc">
                  Spearheaded the financial strategy and execution. Led a
                  cross-functional team to optimize the cost structure,
                  resulting in a reduction in operational expenses while
                  maintaining product quality. Implemented a comprehensive risk
                  management framework, ensuring business continuity in an
                  ever-evolving industry. Fostered a collaborative and
                  innovative corporate culture, resulting in improved employee
                  satisfaction and retention.
                </p>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="cv-subbox">
              <div className="cv-icon">H</div>
              <div>
                <div className="cv-box-subheader">Professional Experience</div>
                <div className="cv-box-title">Chief Financial Officer</div>
                <div className="cv-box-silent">2017 - Present</div>
                <p className="cv-box-subdesc">
                  Spearheaded the financial strategy and execution. Led a
                  cross-functional team to optimize the cost structure,
                  resulting in a reduction in operational expenses while
                  maintaining product quality. Implemented a comprehensive risk
                  management framework, ensuring business continuity in an
                  ever-evolving industry. Fostered a collaborative and
                  innovative corporate culture, resulting in improved employee
                  satisfaction and retention.
                </p>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="cv-subbox">
              <div className="cv-icon">H</div>
              <div>
                <div className="cv-box-subheader">Professional Experience</div>
                <div className="cv-box-title">Chief Financial Officer</div>
                <div className="cv-box-silent">2017 - Present</div>
                <p className="cv-box-subdesc">
                  Spearheaded the financial strategy and execution. Led a
                  cross-functional team to optimize the cost structure,
                  resulting in a reduction in operational expenses while
                  maintaining product quality. Implemented a comprehensive risk
                  management framework, ensuring business continuity in an
                  ever-evolving industry. Fostered a collaborative and
                  innovative corporate culture, resulting in improved employee
                  satisfaction and retention.
                </p>
              </div>
            </div>
          </div>

          <div className="cv-box">
            <div className="cv-box-header">Education</div>
            <div className="cv-subbox">
              {/* <div className="cv-icon">H</div> */}
              <div>
                <div className="cv-box-subheader">Professional Experience</div>
                <div className="cv-box-title">Chief Financial Officer</div>
                <div className="cv-box-silent">2017 - Present</div>
                {/* <p className="cv-box-subdesc">
                  Spearheaded the financial strategy and execution. Led a
                  cross-functional team to optimize the cost structure,
                  resulting in a reduction in operational expenses while
                  maintaining product quality. Implemented a comprehensive risk
                  management framework, ensuring business continuity in an
                  ever-evolving industry. Fostered a collaborative and
                  innovative corporate culture, resulting in improved employee
                  satisfaction and retention.
                </p> */}
              </div>
            </div>
          </div>

          <div className="cv-box">
            <div className="cv-box-header">Skills</div>
            <ul className="cv-tags">
              <li>Financial Strategy</li>
              <li>Mergers and Acquisitions</li>
              <li>International Business</li>
              <li>Financial Analysis and Modeling</li>
              <li>Risk Management</li>
              <li>Team Leadership and Collaboration</li>
              <li>Negotiation and Contract Management</li>
            </ul>
          </div>

          <div className="cv-box">
            <div className="cv-box-header">Education</div>
            <div className="cv-subbox">
              {/* <div className="cv-icon">H</div> */}
              <div>
                <div className="cv-box-subheader">Professional Experience</div>
                {/* <div className="cv-box-title">Chief Financial Officer</div> */}
                <div className="cv-box-silent">2017 - Present</div>
                {/* <p className="cv-box-subdesc">
                  Spearheaded the financial strategy and execution. Led a
                  cross-functional team to optimize the cost structure,
                  resulting in a reduction in operational expenses while
                  maintaining product quality. Implemented a comprehensive risk
                  management framework, ensuring business continuity in an
                  ever-evolving industry. Fostered a collaborative and
                  innovative corporate culture, resulting in improved employee
                  satisfaction and retention.
                </p> */}
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="cv-subbox">
              {/* <div className="cv-icon">H</div> */}
              <div>
                <div className="cv-box-subheader">Professional Experience</div>
                {/* <div className="cv-box-title">Chief Financial Officer</div> */}
                <div className="cv-box-silent">2017 - Present</div>
                {/* <p className="cv-box-subdesc">
                  Spearheaded the financial strategy and execution. Led a
                  cross-functional team to optimize the cost structure,
                  resulting in a reduction in operational expenses while
                  maintaining product quality. Implemented a comprehensive risk
                  management framework, ensuring business continuity in an
                  ever-evolving industry. Fostered a collaborative and
                  innovative corporate culture, resulting in improved employee
                  satisfaction and retention.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
