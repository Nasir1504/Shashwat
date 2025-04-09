import React, { useRef, useState, useEffect } from "react";

//styles
import "./meet-expert.scss";

//imgs
import PersonImg from "../../../assets/imgs/language-learning/person-img.png";

export default function MeetExpert() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set isVisible if it hasn't been triggered before
        if (targetRef.current && entry.isIntersecting) {
          setIsVisible(true);
          targetRef.current = true; // Mark as triggered
        }
      },
      {
        threshold: 0.8, // Trigger when 50% of the target is visible
      },
    );

    const target = targetRef.current;
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
    <div className="meet-expert-main" ref={targetRef}>
      {/* {isVisible.toString()} */}

      <section className="left-section">
        <h3>
          Meet Your German Expert <br />
          <span>Mr. Keyur Soni</span>
        </h3>

        <ul>
          <li>Masters from HTW, Berlin (Germany taught program)</li>
          <li>Ex-Audi & Schaeffler</li>
          <li>4.5 Years of Living experience in Germany</li>
          <li>Telc C1 Certified</li>

          <li>Most Proficient German Trainer</li>
        </ul>
      </section>
      <section className="right-section">
        <div className="img-frame">
          <div
            className="detail1 ract"
            style={{
              transform: isVisible && "scale(1)",
            }}
          ></div>
          <div
            className="detail2 ract"
            style={{
              transform: isVisible && "scale(1)",
            }}
          ></div>
          <div
            className="detail3 ract"
            style={{
              transform: isVisible && "scale(1)",
            }}
          ></div>
          <div
            className="detail4 ract"
            style={{
              transform: isVisible && "scale(1)",
            }}
          ></div>
          <div
            className="detail5 ract"
            style={{
              transform: isVisible && "scale(1)",
            }}
          ></div>

          <div className="frame-ract1"></div>
          <div className="frame-ract2">
            <div className="inner">
              <img
                src={PersonImg}
                alt=""
                style={{
                  transform: isVisible && "rotate(6deg) translateY(0)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
