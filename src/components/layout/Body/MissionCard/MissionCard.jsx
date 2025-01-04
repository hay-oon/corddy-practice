import { useState } from "react";
import { CreateMission } from "../../../../common/Button/CreateMission";
import activeSB from "../../../../assets/images/activesb.png";
import inactiveSB from "../../../../assets/images/inactivesb.png";
import "./MissionCard.css";

export function MissionCard() {
  const [missions, setMissions] = useState([
    {
      id: 1,
      title: "Attendance Check Mission",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Reply to Topic\nMission",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Study Certification Mission",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Answer a Question Mission",
      isCompleted: true,
    },
  ]);

  const handleMissionClick = (id) => {
    setMissions(
      missions.map((mission) =>
        mission.id === id
          ? { ...mission, isCompleted: !mission.isCompleted }
          : mission
      )
    );
  };

  return (
    <div className="mission-container">
      <h2>
        Complete today's missions and earn points!
        <CreateMission />
      </h2>

      <div className="mission-list">
        {missions.map((mission) => (
          <button
            key={mission.id}
            onClick={() => handleMissionClick(mission.id)}
            className={`mission-card ${mission.isCompleted ? "active" : ""}`}
          >
            <img
              src={mission.isCompleted ? activeSB : inactiveSB}
              style={{ width: "40px" }}
              alt={mission.title}
            />
            <h3>{mission.title}</h3>
            <p className="description">
              {mission.isCompleted ? "+10 P Earned!" : "Not completed yet"}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
