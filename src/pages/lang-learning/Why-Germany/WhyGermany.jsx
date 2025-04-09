import React, { useState } from "react";

//styles
import "./why-germany.scss";

//data
import { WHY_GERMANY_DATA } from "./whyGermanyData";

//imgs
import Icon from "../../../assets/imgs/language-learning/aeroplane-icon.png";
// import frameImg from '../../../assets/imgs/language-learning/frame-img1.png';

export default function WhyGermany({ progress, query }) {
  // const sValue = progress.Progress + (progress.Page - 1.2)

  return (
    <div className="why-germany-main">
      <section className="top-section">
        <h3>
          Why Germany?
          <span
            className="img-span"
            style={{
              backgroundImage: `url(${Icon})`,
            }}
          />
        </h3>
        <p>
          What makes Germany the ideal destination for world-class education and
          limitless opportunities?
          <br />
          There are a plethora of reasons why it’s one of the favorite
          destinations of international students, some <br />
          of which are:
        </p>
        <button>Explore Now</button>
      </section>
      <section className="bottom-section">
        <div className="ellipse" />

        <div className="card-slider">
          {!query ? (
            <div
              className="slides"
              style={{
                transform:
                  progress.Progress > 0.2
                    ? `translate(-${Math.min(140, Math.max(0, progress.Progress * 180))}%)`
                    : "",
              }}
            >
              {WHY_GERMANY_DATA.map((item, i) => {
                return <WGCard key={i} ID={i} ITEM={item} />;
              })}
            </div>
          ) : (
            <div
              className="slides"
              style={{
                transform:
                  progress.Progress > 0.05
                    ? `translateY(-${Math.min(230, Math.max(0, progress.Progress * 260))}%)`
                    : "",
              }}
            >
              {WHY_GERMANY_DATA.map((item, i) => {
                return <WGCard key={i} ID={i} ITEM={item} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// -------------------------- WG CARD ---------------------------------
const WGCard = ({ ID, ITEM }) => {
  const [cardID, setCardID] = useState(0);

  const formattedNumber = (ID + 1).toString().padStart(2, "0");

  return (
    <div
      className="wg-card-main"
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
        }}
      >
        <div className="inner-frame">
          <img
            src={ITEM.coverImg}
            alt=""
            className="frame-img"
            style={{
              transform: cardID === ID + 1 ? "scale(1.1)" : "scale(1)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
