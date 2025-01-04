import { Avatar } from "./Avatar";
import "./Aside.css";

export function Aside() {
  return (
    <div className="aside">
      <div className="speechBalloon">Go complete ~</div>
      <Avatar />
      <div className="learningLevel">
        <div>Corddy's Learning Level</div>
        <div className="level"></div>
        <div>10/100p</div>
      </div>
      <div className="gap">
        <div className="asideContents">
          <div>Questions Answered</div>
          <div>12</div>
        </div>
        <div className="asideContents">
          <div>Comments Posted</div>
          <div>34</div>
        </div>
      </div>
    </div>
  );
}
