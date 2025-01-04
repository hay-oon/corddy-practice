import "./MissionCard.css";

export function MissionCard() {
  return (
    <div className="mission-list">
      <h2>Complete today's missions and earn points!</h2>
      <div className="grid">
        <div className="mission-card">
          <h3>Attendance Check Mission</h3>
          <p className="description">+10 P Earned!</p>
        </div>

        <div className="mission-card">
          <h3>
            Reply to Topic
            <br /> Mission
          </h3>
          <p className="description">Not completed yet</p>
        </div>

        <div className="mission-card">
          <h3>Study Certification Mission</h3>
          <p className="description">Not completed yet</p>
        </div>

        <div className="mission-card">
          <h3>Answer a Question Mission</h3>
          <p className="description">+10 P Earned!</p>
        </div>
      </div>
    </div>
  );
}
