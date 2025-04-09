import React, { useState, useMemo, useRef, useEffect } from "react";

//styles
import "./guide-to-eduction.scss";

//imgs
import EductionIcon from "../../../assets/imgs/language-learning/icon11.png";
import GTEHeading1 from "../../../assets/imgs/language-learning/guide-to-education.png";
import GTEHeading2 from "../../../assets/imgs/language-learning/guide-to-education2.png";
import GTEHeading3 from "../../../assets/imgs/language-learning/guide-to-education3.png";
import YouCursor from "../../../assets/imgs/language-learning/you-cursor-icon.png";
import AbstractMarbleTexture from "../../../assets/imgs/language-learning/abstract-marble-texture.png";
import BachelorsFrame from "../../../assets/imgs/language-learning/bachelors-frame.png";
import hrLine from "../../../assets/imgs/language-learning/hr-vector.png";
import BottomHeading from "../../../assets/imgs/language-learning/heading1.png";
import Frame1 from "../../../assets/imgs/language-learning/img-frame1.png";
import UniversityList from "../../../assets/imgs/language-learning/university-list.png";

export default function GuideToEducation({ progress, query }) {
  const [degree, setDegree] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const sValue = progress.Progress + (progress.Page - 1.2);

  useMemo(() => {
    progress.Progress > 0 && setTrigger(true);
  }, [progress]);

  const [isVisible, setIsVisible] = useState(false);
  const GTEMobileRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set isVisible if it hasn't been triggered before
        if (entry.isIntersecting) {
          setIsVisible(true);
          // setTrigger(true)
        }
      },
      {
        threshold: 0.4, // Trigger when 50% of the target is visible
      },
    );

    const target = GTEMobileRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  // console.log(isVisible)
  return (
    <div className="guide-to-eduction-main" ref={GTEMobileRef}>
      {query ? (
        // ------------------MOBILE--------------------------
        <section className="left-section">
          <div className="heading-main">
            <img
              src={GTEHeading1}
              alt=""
              className="heading-text"
              style={{
                opacity: trigger && "0",
                transitionDelay: trigger && "0.88s",
              }}
            />
            <img
              src={GTEHeading2}
              alt=""
              className="heading-text"
              style={{
                opacity: !trigger && "0",
                transitionDelay: trigger && "0.88s",
                display: degree > 0 && "none",
              }}
            />
            <img
              src={GTEHeading2}
              alt=""
              className="heading-text"
              style={{
                opacity: degree === 1 ? "1" : "0",
              }}
            />
            <img
              src={GTEHeading3}
              alt=""
              className="heading-text"
              style={{
                opacity: degree === 2 ? "1" : "0",
              }}
            />
          </div>
          <p>
            Germany offers exceptional opportunities for students pursuing{" "}
            <br />
            Bachelor's and Master's degrees. Whether you’re planning to <br />
            begin your higher education or advance your career with a <br />
            postgraduate degree, here’s a detailed overview:
          </p>

          <div className="btn-main">
            <p className="bachelors">
              <span
                className="text-span"
                onClick={() => {
                  setDegree(0);
                }}
              >
                Bachelor's Degree
              </span>
              <span
                className="btn-span"
                onClick={() => {
                  setDegree(1);
                }}
                style={{
                  backgroundColor:
                    degree === 0 && trigger
                      ? "#FFC537"
                      : degree === 1
                        ? "#FFC537"
                        : "#D9D9D9",

                  transitionDelay: degree < 1 && "0.88s",
                }}
              >
                Steps To Follow
              </span>
            </p>
            <p className="masters">
              <span className="text-span">Master's Degree</span>
              <span
                className="btn-span"
                onClick={() => {
                  setDegree(2);
                }}
                style={{
                  backgroundColor: degree === 2 ? "#FFC537" : "#D9D9D9",
                }}
              >
                Steps To Follow
              </span>
            </p>

            <div
              className="cursor-icon-mob"
              style={{
                backgroundImage: `url(${YouCursor})`,
                transform:
                  degree === 0 && trigger
                    ? `translate(0vw, 0vh)`
                    : degree === 1 && trigger
                      ? `translate(8vw, 0vw)`
                      : degree === 2 && trigger && `translate(40vw, 0vw)`,

                transition: degree < 1 && "0.6s ease-in-out 0.2s",
              }}
            />
          </div>
        </section>
      ) : (
        // ------------------PC------------------------------

        <section
          className="left-section"
          style={{
            transform:
              progress.Progress > 0.2 &&
              `translate(-${Math.min(100, Math.max(0, progress.Progress * 180))}%)`,
          }}
        >
          <div className="heading-main">
            <img
              src={GTEHeading1}
              alt=""
              className="heading-text"
              style={{
                opacity: trigger && "0",
                transitionDelay: trigger && "0.88s",
              }}
            />
            <img
              src={GTEHeading2}
              alt=""
              className="heading-text"
              style={{
                opacity: !trigger && "0",
                transitionDelay: trigger && "0.88s",
                display: degree > 0 && "none",
              }}
            />
            <img
              src={GTEHeading2}
              alt=""
              className="heading-text"
              style={{
                opacity: degree === 1 ? "1" : "0",
              }}
            />
            <img
              src={GTEHeading3}
              alt=""
              className="heading-text"
              style={{
                opacity: degree === 2 ? "1" : "0",
              }}
            />
          </div>
          <p>
            Germany offers exceptional opportunities for students pursuing{" "}
            <br />
            Bachelor's and Master's degrees. Whether you’re planning to <br />
            begin your higher education or advance your career with a <br />
            postgraduate degree, here’s a detailed overview:
          </p>

          <div className="btn-main">
            <p className="bachelors">
              <span
                className="text-span"
                onClick={() => {
                  setDegree(0);
                }}
              >
                Bachelor's Degree
              </span>
              <span
                className="btn-span"
                onClick={() => {
                  setDegree(1);
                }}
                style={{
                  backgroundColor:
                    degree === 0 && trigger
                      ? "#FFC537"
                      : degree === 1
                        ? "#FFC537"
                        : "#D9D9D9",

                  transitionDelay: degree < 1 && "0.88s",
                }}
              >
                Steps To Follow
              </span>
            </p>
            <p className="masters">
              <span className="text-span">Master's Degree</span>
              <span
                className="btn-span"
                onClick={() => {
                  setDegree(2);
                }}
                style={{
                  backgroundColor: degree === 2 ? "#FFC537" : "#D9D9D9",
                }}
              >
                Steps To Follow
              </span>
            </p>
            <div
              className="cursor-icon"
              style={{
                backgroundImage: `url(${YouCursor})`,
                transform:
                  degree === 0 && trigger
                    ? `translate(8vw, 0vh)`
                    : degree === 1 && trigger
                      ? `translate(8vw, 0vw)`
                      : degree === 2 && trigger
                        ? `translate(20vw, 0vw)`
                        : "",

                transition: degree < 1 && "0.6s ease-in-out 0.2s",
              }}
            />
          </div>
        </section>
      )}

      {query ? (
        // ------------------MOBILE--------------------------

        <section className="right-section">
          <div
            className="rect1"
            style={{
              backgroundImage: `url(${AbstractMarbleTexture})`,
            }}
          />

          <img src={hrLine} alt="" className="hr-vector" />
          <img
            src={BachelorsFrame}
            alt=""
            className="bachelor-frame"
            style={{
              transform:
                degree === 1
                  ? "translateY(0%)"
                  : degree === 2
                    ? "translateY(-105%)"
                    : "translateY(0%)",
              opacity: degree === 1 ? "1" : degree === 2 ? "0.2" : "1",
            }}
          />
          <img
            src={BachelorsFrame}
            alt=""
            className="master-frame"
            style={{
              transform: degree === 2 ? "translateY(-100%)" : "translateY(0%)",
              opacity: degree === 2 ? "1" : "0.2",
            }}
          />
        </section>
      ) : (
        // ------------------PC------------------------------

        <section
          className="right-section"
          style={{
            transform:
              progress.Progress > 0.2 &&
              `translate(${Math.min(100, Math.max(0, progress.Progress * 180))}%)`,
          }}
        >
          <div
            className="rect1"
            style={{
              backgroundImage: `url(${AbstractMarbleTexture})`,
            }}
          />

          <img src={hrLine} alt="" className="hr-vector" />
          <img
            src={BachelorsFrame}
            alt=""
            className="bachelor-frame"
            style={{
              transform:
                degree === 1
                  ? "translateY(0%)"
                  : degree === 2
                    ? "translateY(-105%)"
                    : "translateY(0%)",
              opacity: degree === 1 ? "1" : degree === 2 ? "0.2" : "1",
            }}
          />
          <img
            src={BachelorsFrame}
            alt=""
            className="master-frame"
            style={{
              transform: degree === 2 ? "translateY(-100%)" : "translateY(0%)",
              opacity: degree === 2 ? "1" : "0.2",
            }}
          />
        </section>
      )}

      {/* =================================================== */}

      {query ? (
        // ------------------MOBILE--------------------------
        <section className="bottom-section-mob">
          <img src={BottomHeading} alt="" className="bottom-heading-img" />
          <img src={Frame1} alt="" className="frame-img" />
          <img src={UniversityList} alt="" className="university-list-img" />
        </section>
      ) : (
        // ------------------PC------------------------------
        <section
          className="bottom-section"
          style={{
            transform:
              progress.Progress > 0.2 &&
              `translateY(-${Math.min(140, Math.max(0, sValue * 200))}%)`,
          }}
        >
          <img src={BottomHeading} alt="" className="bottom-heading-img" />
          <img src={Frame1} alt="" className="frame-img" />
          <img src={UniversityList} alt="" className="university-list-img" />
        </section>
      )}
    </div>
  );
}
