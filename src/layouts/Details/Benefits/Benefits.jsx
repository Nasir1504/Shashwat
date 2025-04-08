import React from "react";
import "./benefits.scss";
import { LuArrowBigRight } from "react-icons/lu";

const Benefits = () => {
  return (
    <div className="detailBenefit">
      <div className="dbHeading">
        Following this course, you will have the ability to
      </div>
      <div className="dbPara">
        <p>
          <span>
            {" "}
            <LuArrowBigRight />
          </span>{" "}
          Gain a basic understanding of German grammar and vocabulary.
        </p>
        <p>
          <span>
            {" "}
            <LuArrowBigRight />
          </span>{" "}
          Develop essential speaking, listening, reading, and writing skills.
        </p>
        <p>
          <span>
            {" "}
            <LuArrowBigRight />
          </span>{" "}
          Learn about German customs, traditions, and cultural nuances.
        </p>
        <p>
          <span>
            {" "}
            <LuArrowBigRight />
          </span>{" "}
          Increase cultural sensitivity and appreciation for German-speaking
          countries.
        </p>
        <p>
          <span>
            {" "}
            <LuArrowBigRight />
          </span>{" "}
          Enhance your travel experiences by being able to communicate in
          German.
        </p>
        <p>
          <span>
            {" "}
            <LuArrowBigRight />
          </span>{" "}
          Boost your resume with knowledge of a widely spoken European language.
        </p>
        <p>
          <span>
            {" "}
            <LuArrowBigRight />
          </span>{" "}
          Enjoy the satisfaction of mastering the basics of German and
          progressing further.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
