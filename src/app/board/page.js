"use client";

import BoardCard from "@/app/components/boardCard";
import withAuth from "@/app/lib/withAuth";
import AuthService from "@/app/services/auth.service";
import { useEffect, useState } from "react";

const Board = () => {
  const [userModule, setUserModule] = useState(null);
  const [phases, setPhases] = useState([
    {
      phase: "pending",
      roleName: "PitchAndBoardPhase",
      order: 1,
      title: "Pitch & Board Select Phase",
      description:
        'At simulation kick-off, participants will go through a " Board Selection", pitching themselves as potential board members for HPBM AG to everyone in the session.',
    },
    {
      phase: "pending",
      roleName: "ConstructionPhase",
      order: 2,
      title: "Construction Phase",
      description:
        "Once the Boards have been formed, they will go through a “construction” phase.",
    },
    {
      phase: "pending",
      roleName: "DecisionPhase",
      order: 3,
      title: "Decision Phase",
      description:
        "During this phase the Boards will be confronted with a sequence of events which require the Board’s active involvement and governance. There will be several joint de-briefings where all teams will explain their decisions regarding the events that took place.",
    },
    {
      phase: "pending",
      roleName: "PostSimulationPhase",
      order: 4,
      title: "Post Simulation",
      description:
        "After the conclusion of the simulation, there will be a general debriefing for all teams. It will put the simulation into context of the material covered during the workshop and allow participants to clarify any doubts they have.",
    },
  ]);
  useEffect(() => {
    async function getCurrrentModule() {
      const currentModule = await AuthService.getCurrrentModule();
      setUserModule(currentModule);

      const completedIndex = phases.findIndex(
        (x) => x.roleName === currentModule?.RoleName
      );
      setPhases(
        phases.map((phase, index) => {
          if (index < completedIndex) {
            phase.phase = "completed";
          } else if (index === completedIndex) {
            phase.phase = "available";
          } else {
            phase.phase = "pending";
          }
          return phase;
        })
      );
    }
    getCurrrentModule();
  }, []);

  return (
    <>
      <section className="h-screen px-12 bg-white flex items-center">
        <div className="grid grid-cols-4 gap-5 h-min container md:grid py-24">
          {phases.map((phase) => (
            <BoardCard
              key={phase.order}
              phase={phase.phase}
              order={phase.order}
              title={phase.title}
              description={phase.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default withAuth(Board);
