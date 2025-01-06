import corddy1 from "../../../../assets/images/corddy1.png";
import corddy2 from "../../../../assets/images/corddy2.png";
import corddy3 from "../../../../assets/images/corddy3.png";
import corddy4 from "../../../../assets/images/corddy4.png";
import corddy5 from "../../../../assets/images/corddy5.png";
import "./Avatar.css";

const imageStyle = {
  width: "211px",
};

const avatarImages = [corddy1, corddy2, corddy3, corddy4, corddy5];
const avatarStatus = ["Baby", "Junior", "Senior", "Master", "Expert"];

export function Avatar({ level }) {
  const safeLevel = Math.min(level, avatarImages.length - 1);

  return (
    <aside className="avatar">
      <img
        src={avatarImages[safeLevel]}
        style={imageStyle}
        alt={`Avatar Level ${safeLevel + 1}`}
      ></img>
      <p>
        Lv.{safeLevel + 1} {avatarStatus[safeLevel]} Corddy Status
      </p>
    </aside>
  );
}
