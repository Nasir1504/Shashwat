import React from "react";

//styles
import "./top-section.scss";

//imgs
import heroAvatar from "../../../assets/hero-avatar.png";
import BluredCircle from "../../../assets/imgs/language-learning/blured-circle.png";
import BluredCircle1 from "../../../assets/imgs/language-learning/blured-circle1.png";

import textVector from "../../../assets/imgs/language-learning/text-vector.png";

export default function TopSection({ query }) {
  return (
    <div className="jb-top-section-main">
      <section className="left-section">
        <img src={BluredCircle1} alt="" className="blured-circle3" />

        <p>
          <span
            className="img-span"
            style={{
              backgroundImage: `url(${textVector})`,
            }}
          />
          Join the German Healthcare System
        </p>
        <h3>
          Step Into a Fulfilling
          <br />
          <span>Nursing Career in Germany</span> <br />
          with Shashwat Sprachschule
          <br />
          <span className="hr-span" />
        </h3>
        <p>
          Germany offers great opportunities in healthcare, with high demand for
          <br />
          skilled nurses due to its aging population.
          <br />
          <br />
          Shashwat Sprachschule is your one-stop shop for launching your
          <br />
          successful nursing career in Germany.
        </p>
        {!query && (
          <div className="input-field-main">
            <input
              type="text"
              placeholder="Enter Your Email/Contact Number"
              className="input-field"
            />
            <button>Get Started</button>
          </div>
        )}
      </section>

      <section className="right-section">
        <img src={heroAvatar} alt="" className="avatar-img" />
        <img src={BluredCircle} alt="" className="blured-circle1" />
        <img src={BluredCircle} alt="" className="blured-circle2" />

        {query && (
          <div className="input-field-main">
            <input
              type="text"
              placeholder="Enter Your Email/Contact Number"
              className="input-field"
            />
            <button>Get Started</button>
          </div>
        )}
      </section>
    </div>
  );
}
