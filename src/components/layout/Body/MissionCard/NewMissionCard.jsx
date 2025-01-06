import { CreateMissionButton } from "../../../../common/Button/CreateMissionButton";
import "./NewMissionCard.css";

export function NewMissionCard({ setPage }) {
  return (
    <div className="mission-container">
      <h2>
        Complete today's missions and earn points !
        <CreateMissionButton setPage={setPage}>
          Create Mission
        </CreateMissionButton>
      </h2>

      <div className="mission-list">새로운 미션 이름</div>
    </div>
  );
}
