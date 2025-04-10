import React, { useState } from "react";

//styles
import "./career-options.scss";

//data
import { CAREER_OPTIONS_DATA } from "./careerOptionsData";

//imgs
import Heading from "../../../assets/imgs/job-placement/career-option-heading.png";
import Rect from "../../../assets/imgs/job-placement/rect-bar.png";

import Circle1 from "../../../assets/imgs/language-learning/circle1.png";
import CircleFrame from "../../../assets/imgs/language-learning/circle-frame.png";
import PersonImg from "../../../assets/imgs/language-learning/person-img.png";
import BulletPoint from "../../../assets/imgs/job-placement/bullet-point.png";

export default function CareerOptions({ progress, query }) {
  return (
    <div className="career-options-main">
      <section className="top-section">
        <img src={Heading} alt="" className="heading-img" />
        <div className="circle-frame-main">
          <img src={CircleFrame} alt="" className="circle-frame" />
          <img src={Circle1} alt="" className="circle-vector" />
          <img src={PersonImg} alt="" className="person-img" />
        </div>
      </section>

      {/* --------------------------------------------- */}
      <section className="bottom-section">
        <div className="ellipse">
          <div className="inner-ellipse" />
        </div>

        <div className="card-slider">
          <div className="rect-bar">
            <img src={Rect} alt="" />
          </div>
          {!query ? (
            <div
              className="slides"
              style={{
                transform:
                  progress.Progress > 0.2 &&
                  `translate(-${Math.min(32, Math.max(0, progress.Progress * 80))}%)`,
                // transform: 'translate(-32%)'
              }}
            >
              {CAREER_OPTIONS_DATA.map((item, i) => {
                return <COCard key={i} ID={i} ITEM={item} />;
              })}
            </div>
          ) : (
            <div
              className="slides"
              style={{
                transform:
                  progress.Progress > 0.2 &&
                  `translateY(-${Math.min(72, Math.max(0, progress.Progress * 180))}%)`,
                // transform: 'translatey(-125%)'
              }}
            >
              {CAREER_OPTIONS_DATA.map((item, i) => {
                return <COCard key={i} ID={i} ITEM={item} query={query} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

const COCard = ({ ID, ITEM, query }) => {
  const [cardID, setCardID] = useState(0);

  const formattedNumber = (ID + 1).toString().padStart(2, "0");

  return (
    <div
      className={!query ? "co-card-main" : "co-card-main-mobile"}
      onMouseOver={() => setCardID(ID + 1)}
      onMouseOut={() => setCardID(0)}
      style={{
        backgroundColor: ID % 2 === 0 ? "#2B2E7C" : "#DDDEFF",
      }}
    >
      <div className="heading-section">
        <img
          src={ITEM.IconImg}
          alt=""
          className="icon-img"
          style={{
            transform:
              cardID === ID + 1 ? "translateY(-10%)" : "translateY(0%)",
          }}
        />
        <p
          className="heading-text"
          style={{
            transform:
              cardID === ID + 1 ? "translateY(-10%)" : "translateY(0%)",
            color: ID % 2 === 0 ? "#ffffff" : "#2B2E7C",
          }}
        >
          <span className="text-span">{ITEM.heading1}</span>
          <br />
          <span className="text-span2">{ITEM.heading2}</span>
        </p>
        <p className="card-no">
          <span
            className="span1"
            style={{
              fillColor: `#000000`,
              strokeWidth: `1px`,
              strokeColor: `#ffffff`,
              WebkitTextFillColor: ID % 2 === 0 ? `#000000` : "#2B2E7C",
              WebkitTextStrokeWidth: `1px`,
              WebkitTextStrokeColor: `#ffffff`,
              opacity: cardID === ID + 1 ? "0.2" : "0.08",
            }}
          >
            {formattedNumber}
          </span>
        </p>
      </div>

      <h3
        style={{
          color: ID % 2 === 0 ? `#2B2E7C` : "#ffffff",
          opacity: cardID === ID + 1 ? "0.2" : "0.12",
        }}
      >
        {ITEM.name}
      </h3>

      <div
        className="frame-sec"
        style={{
          backgroundColor: ID % 2 === 0 ? "#ffffff" : `#2B2E7C`,
          transform: cardID === ID + 1 ? "scale(1.015)" : "",
        }}
      >
        <div
          className="inner-frame"
          style={{
            backgroundColor: ID % 2 === 0 ? `#2B2E7C` : "#ffffff",
          }}
        >
          {ITEM.details.map((item, i) => {
            return (
              <div className="details" key={i}>
                <img src={BulletPoint} alt="" className="icon" />
                <p
                  style={{
                    color: ID % 2 === 0 ? "#ffffff" : `#2B2E7C`,
                  }}
                >
                  {item.txt}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
