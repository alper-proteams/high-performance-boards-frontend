import Image from "next/image";
import styles from "./board.module.css";
import Button from "@/app/components/button";

export default function Board() {
  const completed = true;
  return (
    <>
      <section className="h-screen px-12 bg-white flex items-center">
        <div className=" container grid grid-cols-4 gap-5 h-min">
          <div className={`${styles["completed"]} ${styles["phase"]}`}>
            {completed ? (
              <Image
                src="/images/icons/skill-icon-black.svg"
                alt="skill-icon"
                width={48}
                height={48}
              />
            ) : (
              <div
                className={`${styles["phase-number"]} rounded-full h-12 w-12 flex items-center justify-center`}
              >
                1
              </div>
            )}

            <div className={`${styles["phase-header"]} h5-bold`}>
              Pitch & Board <br />
              <span>Select Phase</span>
            </div>
            <div className="phase-desc">
              At simulation kick-off, participants will gob through a " Board
              Selection", pitching themselves as potential board members for
              HPBM AG to everyone in the session.
            </div>
            <Button className={`${styles["phase-action"]}`}>Start</Button>
          </div>
          <div className={`${styles["available"]} ${styles["phase"]}`}>
            <div
              className={`${styles["phase-number"]}  rounded-full h-12 w-12 flex items-center justify-center`}
            >
              2
            </div>
            <div className={`${styles["phase-header"]} h5-bold`}>
              Construction Phase
            </div>
            <div className="phase-desc">
              Once the Boards (teams) have been formed, they will go through a
              “construction” phase.
            </div>
            <Button disabled className={`${styles["phase-action"]}`}>
              Start
            </Button>
          </div>
          <div className={`${styles["phase"]}`}>
            <div
              className={`${styles["phase-number"]}  rounded-full h-12 w-12 flex items-center justify-center`}
            >
              3
            </div>
            <div className={`${styles["phase-header"]} h5-bold`}>
              Decision Phase
            </div>
            <div className="phase-desc">
              Once the Boards (teams) have been formed, they will go through a
              “construction” phase.
            </div>
            <Button disabled className={`${styles["phase-action"]}`}>
              Pending
            </Button>
          </div>
          <div className={`${styles["phase"]}`}>
            <div
              className={`${styles["phase-number"]}  rounded-full h-12 w-12 flex items-center justify-center`}
            >
              4
            </div>
            <div className={`${styles["phase-header"]} h5-bold`}>
              Post- Simulation
            </div>
            <div className="phase-desc">
              Once the Boards (teams) have been formed, they will go through a
              “construction” phase.
            </div>
            <Button disabled className={`${styles["phase-action"]}`}>
              Pending
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
