import React from "react";

//styles
import "./eligibility-criteria.scss";

//components
import NursingInGermany from "./Nursing-In-Germany/NursingInGermany";

//imgs
import eligibilityCriteriaDetails from "../../../assets/imgs/consultancy-solution/eligibility-criteria-details.png";
import eligibilityCriteriaHeading from "../../../assets/imgs/consultancy-solution/eligibility-criteria-heading.png";

export default function EligibilityCriteria({ progress, query }) {
  const sValue1 = progress.Progress + (progress.Page - 1.02);
  const sValue2 = progress.Progress + (progress.Page - 1.02);

  return (
    <div className="eligibility-criteria-main">
      <section
        className="left-section"
        style={{
          transform:
            sValue1 > 0.1 &&
            `translate(-${Math.min(140, Math.max(0, sValue1 * 380))}%)`,
        }}
      >
        <img
          className="ec-heading-img"
          src={eligibilityCriteriaHeading}
          alt=""
        />
      </section>

      <section
        className="right-section"
        style={{
          transform:
            sValue1 > 0.02 &&
            `translate(${Math.min(100, Math.max(0, sValue1 * 620))}%)`,
        }}
      >
        <img
          className="ec-details-img"
          src={eligibilityCriteriaDetails}
          alt=""
        />
      </section>

      {/* =================================================== */}

      <section
        className="bottom-section"
        style={{
          transform: `translateY(-${Math.min(140, Math.max(0, sValue2 * 650))}%)`,
        }}
      >
        <NursingInGermany progress={progress} query={query} />
      </section>
    </div>
  );
}
