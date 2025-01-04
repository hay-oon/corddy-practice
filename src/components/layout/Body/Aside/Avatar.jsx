import corddy from "../../../../assets/images/corddy1.png";
import "./Avatar.css";

const imageStyle = {
  width: "211px",
  height: "170px",
};

export function Avatar() {
  return (
    <aside className="avatar">
      <img src={corddy} style={imageStyle} alt="Avatar"></img>
      <p>Lv.1 Baby Corddy Status</p>
    </aside>
  );
}
