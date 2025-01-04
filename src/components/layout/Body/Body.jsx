import { Aside } from "./Aside/Aside";
import { MissionCard } from "./MissionCard/MissionCard";

const mainContainer = {
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1080px",
  margin: "0px auto",
};

export function Body() {
  return (
    <div style={mainContainer}>
      <Aside />
      <MissionCard />
    </div>
  );
}
