import React from "react";

//styles
import "./top-section.scss";

//imgs
import heroAvatar from "../../../assets/hero-avatar2.png";
import BluredCircle from "../../../assets/imgs/language-learning/blured-circle.png";
import BluredCircle1 from "../../../assets/imgs/language-learning/blured-circle1.png";

import textVector from "../../../assets/imgs/language-learning/text-vector.png";

export default function TopSection({ query }) {
  return (
    <div className="cs-top-section-main">
      <section className="left-section">
        <img src={BluredCircle1} alt="" className="blured-circle3" />

        <p className="main-heading">
          <span
            className="img-span"
            style={{
              backgroundImage: `url(${textVector})`,
            }}
          />
          Learn. Earn. Grow.
        </p>
        <h3>
          <span>With Ausbildung in Germany</span> <br />
          <span className="hr-span" />
        </h3>

        {!query ?
          <p>
            Germany offers Ausbildung, a unique 2–3 year vocational training
            <br />
            program where you learn both in the classroom and on the job. It’s
            <br />
            designed to build strong practical skills and is open to international
            <br />
            students looking for career-focused education.
            <br />
            <br />
            <br />
            <span className="text-span">
              <span>Shashwat Sprachschule</span> is here to guide you every step
              of the way.
            </span>
          </p>
          :
          <p>
            Germany offers Ausbildung, a unique 2–3 year vocational training program where you learn both in the classroom and on the job. It’s designed to build strong practical skills and is open to international students looking for career-focused education.
            <br />
            <br />
            <span className="text-span">
              <span>Shashwat Sprachschule</span> is here to guide you every step
              of the way.
            </span>
          </p>
        }

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
