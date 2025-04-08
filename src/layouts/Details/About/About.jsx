import React from "react";
import "./about.scss";
import { LuArrowBigRight } from "react-icons/lu";

const About = () => {
  return (
    <div className="detailAbout">
      <div className="daUpperText">
        <div className="daHeading">Course Overview</div>
        <p className="daPara">
          Lorem ipsum dolor sit amet consectetur. Senectus quam tincidunt tortor
          placerat urna. Sed iaculis iaculis tortor arcu sapien convallis
          pulvinar arcu accumsan. Mauris vestibulum euismod egestas nec rhoncus
          urna dignissim posuere. Vitae sit tincidunt habitant vulputate purus.
          At tincidunt urna in lectus integer libero id morbi fermentum. Nec
          commodo convallis amet ridiculus id facilisis at diam. Enim nullam
          pretium facilisis id ultrices.
        </p>
      </div>
      <div className="dbLowerText">
        <div className="dbltHeading">Key takeaways from this course</div>
        <div className="dbltPara">
          <p>
            <span>
              <LuArrowBigRight />
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur. Senectus quam tincidunt
            tortor placerat urna.{" "}
          </p>
          <p>
            <span>
              <LuArrowBigRight />
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur. Senectus quam tincidunt
            tortor placerat urna.{" "}
          </p>
          <p>
            <span>
              <LuArrowBigRight />
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur. Senectus quam tincidunt
            tortor placerat urna.{" "}
          </p>
          <p>
            <span>
              <LuArrowBigRight />
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur. Senectus quam tincidunt
            tortor placerat urna.{" "}
          </p>
          <p>
            <span>
              <LuArrowBigRight />
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur. Senectus quam tincidunt
            tortor placerat urna.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
