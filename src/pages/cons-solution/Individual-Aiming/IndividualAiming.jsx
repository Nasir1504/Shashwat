import React, { useRef, useEffect, useState } from "react";

//styles
import "./individual-aiming.scss";

export default function IndividualAiming({ query }) {
  const IARef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set isVisible if it hasn't been triggered before
        if (IARef.current && entry.isIntersecting) {
          setIsVisible(true);
          IARef.current = true; // Mark as triggered
        }
      },
      {
        threshold: 0.8, // Trigger when 50% of the target is visible
      },
    );

    const target = IARef.current;
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
    <div className="individual-aiming-main" ref={IARef}>
      <section className="heading-section">
        <p>It's a perfect pathway for individuals aiming</p>
        {!query ? (
          <h3>
            to build a thriving career in a practical <br />
            field while earning a stipend.
          </h3>
        ) : (
          <h3>
            to build a thriving career in a
            <br />
            practical field while earning a stipend.
          </h3>
        )}
      </section>
      <section className="bottom-section">
        <div className="part1">
          <div
            className="inner"
            style={{
              transform: isVisible && "translate(0)",
            }}
          >
            <p>Paid on-the-job training and financial independence.</p>
            <p>Industry-recognized qualifications across diverse fields.</p>
          </div>
        </div>
        <div className="part2">
          <div
            className="inner"
            style={{
              transform: isVisible && "translate(0)",
            }}
          >
            <p>High demand for skilled professionals, ensuring job security.</p>
            <p>Gateway to permanent residency in Germany.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
