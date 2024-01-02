"use client";
import Skill from "@/app/components/homepage/skill";

export default function Welcome() {
  return (
    <section className="bg-primary-black py-24">
      <div className="container flex flex-col gap-32">
        <div className="content-header text-white text-center">
          As you navigate the immersive HPB Simulation,
          <br />
          <span>
            you will cultivate essential leadership skills, fostering both your
            professional acumen and personal growth
          </span>
        </div>

        <div className="skills grid grid-cols-3">
          <div>
            <Skill
              content="Develop a sharper instinct for navigating complex scenarios in
              real-time."
            />
            <Skill
              content="Gain the confidence and skills to initiate and guide
              transformative changes within the organization"
            />
            <Skill content="Master the intricacies of boardroom dynamics" />
          </div>

          <div>
            <Skill
              content="Refine your communication skills to effectively convey complex
              ideas and strategies"
            />
            <Skill
              content="Cultivate a mindset for innovative problem-solving, addressing
              challenges with creativity and strategic thinking."
            />
            <Skill
              content="Deepen your understanding of governance structures for optimal
              board performance."
            />
          </div>

          <div>
            <Skill
              content="Equip yourself with the skills needed to lead effectively during
              times of crisis"
            />

            <Skill content="Acquire proficiency in navigating and resolving conflicts within both the board and leadership teams." />

            <Skill
              content="Learn to manage diverse stakeholder interests effectively for
              organizational success."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
