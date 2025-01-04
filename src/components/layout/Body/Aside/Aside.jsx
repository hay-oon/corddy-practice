import { Avatar } from "./Avatar";
import "./Aside.css";

export function Aside() {
  const answerCount = 333;
  const commentCount = 368;

  const level = (answerCount + commentCount) / 10;

  const levelPercentage = Math.min(level, 100); //- Math.min은 주어진 숫자들 중 가장 작은 값을 반환

  // 아바타 레벨계산 (1~5)
  const avatarLevel = Math.floor(levelPercentage / 20);

  return (
    <div className="aside">
      {/* <div className="speechBalloon">Go complete ~</div> */}
      <Avatar level={avatarLevel} />
      <div className="learningLevel">
        <div>Corddy's Learning Level</div>
        <div className="level">
          <div
            className="levelFill"
            style={{ width: `${levelPercentage}%` }}
          ></div>
        </div>
        <div>{Math.floor(level)}/100p</div>
      </div>
      <div className="gap">
        <div className="asideContents">
          <div>Questions Answered</div>
          <div className="answerNumber">{answerCount}</div>
        </div>
        <div className="asideContents">
          <div>Comments Posted</div>
          <div className="commentNumber">{commentCount}</div>
        </div>
      </div>
    </div>
  );
}
