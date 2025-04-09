import React, { useRef, useState, useEffect } from "react";

//styles
import "./sprachschule.scss";

//card data
import { CARD_DATA } from "./cardData";

//imgs
import Circle1 from "../../../assets/imgs/language-learning/circle1.png";
import CircleFrame from "../../../assets/imgs/language-learning/circle-frame.png";
import PersonImg from "../../../assets/imgs/language-learning/person-img.png";
import FrameCard from "../../../assets/imgs/language-learning/card-frame.png";
import HRImg from "../../../assets/imgs/consultancy-solution/hr-line.png";

export default function Sprachschule({ progress, query }) {
  const [isVisible, setIsVisible] = useState(false);
  const SprachschuleSupportRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set isVisible if it hasn't been triggered before
        if (SprachschuleSupportRef.current && entry.isIntersecting) {
          setIsVisible(true);
          SprachschuleSupportRef.current = true; // Mark as triggered
        }
      },
      {
        threshold: 0.8, // Trigger when 50% of the target is visible
      },
    );

    const target = SprachschuleSupportRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div
      className={!query ? "sprachschule-main" : "sprachschule-main-mobile"}
      ref={SprachschuleSupportRef}
    >
      <section className="top-section">
        <h3>
          Why Shashwat Sprachschule <br /> <span>for Ausbildung ?</span>
        </h3>
        <p className="sub-heading">
          At Shashwat Sprachschule, we simplify your Ausbildung journey by
          providing.
        </p>

        {!query ?
          <div className="circle-frame-main">
            <img src={CircleFrame} alt="" className="circle-frame" />
            <img src={Circle1} alt="" className="circle-vector" />
            <img src={PersonImg} alt="" className="person-img" />
          </div>
          :
          <div className="circle-frame-main-mobile">
            <img src={CircleFrame} alt="" className="circle-frame" />
            <img src={Circle1} alt="" className="circle-vector" />
            <img src={PersonImg} alt="" className="person-img" />
          </div>
        }
      </section>

      {!query ? (
        <section
          className="middle-section"
          style={{
            transform: !isVisible && "translateX(100vw)",
          }}
        >
          {CARD_DATA.map((item, i) => {
            return (
              <div className="frame-card-main" key={i}>
                <img src={FrameCard} alt="" className="main-frame" />
                <div className="top-part">
                  <p className="heading">{item.heading}</p>
                  <p className="sub-heading">By {item.name}</p>
                </div>

                <div className="bottom-part">
                  <p>{item.details}</p>
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        <section
          className="middle-section"
          style={{
            transform: !isVisible && "translateX(100vw)",
          }}
        >
          <div
            className="inner"
          // style={{
          //     transform:
          //         progress.Progress > 0.1 ? `translateY(-${Math.min(150, (Math.max(0, progress.Progress * 180)))}%)` : "",
          //     // "translateY(-160%)",
          // }}
          >
            {CARD_DATA.map((item, i) => {
              return (
                <div className="frame-card-main" key={i}>
                  <img src={FrameCard} alt="" className="main-frame" />
                  <div className="top-part">
                    <p className="heading">{item.heading}</p>
                    <p className="sub-heading">By {item.name}</p>
                  </div>

                  <div className="bottom-part">
                    <p>{item.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
      <section className="bottom-section">
        <p>
          We’re with you at every step, ensuring a seamless transition to life
          and work in Germany.
        </p>
        <img src={HRImg} alt="" className="hr-line-img" />
      </section>
    </div>
  );
}
