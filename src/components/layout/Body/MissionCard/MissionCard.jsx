import { useState } from "react";
import { CreateMissionButton } from "../../../../common/Button/CreateMissionButton";
import activeSB from "../../../../assets/images/activesb.png";
import inactiveSB from "../../../../assets/images/inactivesb.png";
import "./MissionCard.css";

export function MissionCard({ onMissionComplete, setPage }) {
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
      missions.map((mission) => {
        if (mission.id === id) {
          const newCompleted = !mission.isCompleted;
          onMissionComplete(newCompleted);
          return { ...mission, isCompleted: newCompleted };
        }
        return mission;
      })
    );
  };

  return (
    <div className="mission-container">
      <h2>
        Complete today's missions and earn points!
        <CreateMissionButton setPage={setPage}>
          Create Mission
        </CreateMissionButton>
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
              width={40}
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
