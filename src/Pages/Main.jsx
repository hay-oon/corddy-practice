import { useState } from "react";
import { Aside } from "../components/layout/Body/Aside/Aside";
import { MissionCard } from "../components/layout/Body/MissionCard/MissionCard";
import "./Main.css";

export function Main({ setPage }) {
  const [missionPoints, setMissionPoints] = useState(0);
  const answerCount = 331;
  const commentCount = 368;

  const level = (answerCount + commentCount) / 10 + missionPoints;

  const handleMissionComplete = (isCompleted) => {
    setMissionPoints(
      (currentPoints) => currentPoints + (isCompleted ? 10 : -10)
    );
  };

  return (
    <main className="main">
      <div className="mainContents">
        <MissionCard
          onMissionComplete={handleMissionComplete}
          setPage={setPage}
        />
      </div>
      <div className="sideContents">
        <Aside
          level={level}
          answerCount={answerCount}
          commentCount={commentCount}
        />
      </div>
    </main>
  );
}