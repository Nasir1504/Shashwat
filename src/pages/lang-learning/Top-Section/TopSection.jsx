import React from "react";

//styles
import "./top-section.scss";

//imgs
import heroAvatar from "../../../assets/hero-avatar.png";
import BluredCircle from "../../../assets/imgs/language-learning/blured-circle.png";
import BluredCircle1 from "../../../assets/imgs/language-learning/blured-circle1.png";

import textVector from "../../../assets/imgs/language-learning/text-vector.png";

export default function TopSection({ query }) {
  return <>{query ? <TopSectionMobile /> : <TopSectionPC />}</>;
}

const TopSectionPC = () => {
  return (
    <div className="top-section-main-pc">
      <section className="left-section">
        <img src={BluredCircle1} alt="" className="blured-circle3" />

        <p>
          <span
            className="img-span"
            style={{
              backgroundImage: `url(${textVector})`,
            }}
          />
          Top Universities, Affordable Education
        </p>
        <h3>
          Get ready to <br />
          <span>Study in Germany with</span> <br />
          Shashwat Sprachschule <br />
          <div className="hr-span" />
        </h3>
        <p>
          Achieve your dream career in Germany with Shashwat Sprachschule.{" "}
          <br />
          Our expert-led language programs and consultancy services equip you{" "}
          <br />
          with the skills to succeed in education and professional environments.
        </p>

        <div className="input-field-main">
          <input
            type="text"
            placeholder="Enter Your Email/Contact Number"
            className="input-field"
          />
          <button>Get Started</button>
        </div>
      </section>

      <section className="right-section">
        <img src={heroAvatar} alt="" className="avatar-img" />
        <img src={BluredCircle} alt="" className="blured-circle1" />
        <img src={BluredCircle} alt="" className="blured-circle2" />
      </section>
    </div>
  );
};

const TopSectionMobile = () => {
  return (
    <div className="top-section-main-mobile">
      <section className="top-part">
        <p>
          <span
            className="img-span"
            style={{
              backgroundImage: `url(${textVector})`,
            }}
          />
          Top Universities, Affordable Education
        </p>
        <h3>
          Get ready to <br />
          <span>Study in Germany with</span> <br />
          Shashwat Sprachschule <br />
          <div className="hr-span" />
        </h3>
        <p>
          Achieve your dream career in Germany with Shashwat Sprachschule.{" "}
          <br />
          Our expert-led language programs and consultancy services equip you{" "}
          <br />
          with the skills to succeed in education and professional environments.
        </p>
      </section>

      <section className="bottom-part">
        <img src={heroAvatar} alt="" className="avatar-img" />
        <img src={BluredCircle} alt="" className="blured-circle1" />
        <img src={BluredCircle} alt="" className="blured-circle2" />
      </section>

      <div className="input-field-main">
        <input
          type="text"
          placeholder="Enter Your Email/Contact Number"
          className="input-field"
        />
        <button>Get Started</button>
      </div>
    </div>
  );
};
