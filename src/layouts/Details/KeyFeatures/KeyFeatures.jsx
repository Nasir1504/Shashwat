import React from "react";
import "./keyFeatures.scss";
import Feature1 from "../../../imgs/keyFeatures/liveLeacture.png";
import Feature2 from "../../../imgs/keyFeatures/lifeTimeAccess.png";
import Feature3 from "../../../imgs/keyFeatures/onlineCourses.png";
import Feature4 from "../../../imgs/keyFeatures/rec-button.png";
import Feature5 from "../../../imgs/keyFeatures/workshop.png";

const KeyFeatures = () => {
  return (
    <div className="detailKeyFeatures">
      <div className="dkfHeading">What Students can Expect?</div>
      <div className="dkfItems">
        <div className="dkfBox">
          <img src={Feature1} alt="" />
          <p>Live & Interactive Session</p>
        </div>
        <div className="dkfBox">
          <img src={Feature2} alt="" />
          <p>Lifetime Access to content</p>
        </div>
        <div className="dkfBox">
          <img src={Feature3} alt="" />
          <p>100% Online Learning</p>
        </div>
        <div className="dkfBox">
          <img src={Feature4} alt="" />
          <p>Recorded Sessions available</p>
        </div>
        <div className="dkfBox">
          <img src={Feature5} alt="" />
          <p>Cultural Sessions every week</p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
