import React from "react";
import "./GermanLangMob.scss";
import logo from "../../assets/logo.png";
import Boy from "../../assets/imgs/BoyImg.png";
import Bg1 from "../../assets/imgs/concentImg.png";
import Star from "../../assets/imgs/smoothStar.png";

const GermanLangMob = () => {
  return (
    <div className="german-main-mob">
      {/* <img className='boy-img-mb' src={Boy} alt="" /> */}
      <img className="bg1-img-shash-mb" src={Bg1} alt="" />
      <div className="cd-text-cont-mb">
        <h2 className="cd-text-h2-mb">
          German Language - <br /> A1 Course
        </h2>
        <p className="cd-text-p-mb">Your first steps to fluency!</p>
      </div>
      <div className="review-box-shash-mb">
        <div className="rbs-div1-mb">
          <div className="rbs1-mb">
            <p>Instructor</p>
            <h3>Jerome Bell</h3>
          </div>
          <div className="rbs2-mb">
            <p>Level</p>
            <h3>Beginner</h3>
          </div>
        </div>
        <div className="rbs-div2-mb">
          <div className="rbs3-mb">
            <p>Duration</p>
            <h3>60 Days</h3>
          </div>
          <div className="rbs3-mb">
            <p>Language</p>
            <h3>English</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanLangMob;
