import { useState } from "react";
import { Aside } from "../components/layout/Body/Aside/Aside";
import { CreateMissionButton } from "../common/Button/CreateMissionButton";
import "./CreateMission.css";

export function CreateMission({ setPage }) {
  const [missionPoints, setMissionPoints] = useState(0);
  const answerCount = 331;
  const commentCount = 368;

  const level = (answerCount + commentCount) / 10 + missionPoints;

  return (
    <main className="main">
      <div className="mainContents">
        <h2>
          Create Today's Mission !
          <CreateMissionButton setPage={() => setPage("main")}>
            Back to Main
          </CreateMissionButton>
        </h2>
        <div className="inputNewMission">
          <h3 style={{ fontSize: "28px", marginBottom: "0" }}>
            새로운 미션 이름
          </h3>
          <p style={{ fontSize: "20px", color: "#acacb3" }}>40 Points</p>
        </div>
        <button className="createMissionBtn">Create Mission</button>
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
