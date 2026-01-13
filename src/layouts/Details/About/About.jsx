import { useState, useEffect } from "react";
import "./about.scss";
import { LuArrowBigRight } from "react-icons/lu";
import { CD_DATA } from "../../../pages/CourseDetails/CourseDetailsData";
import { useParams } from "react-router-dom";

const About = () => {
  const { courseId } = useParams();
  const [cardNo, setCardNo] = useState(0)

  useEffect(() => {

    switch (courseId) {
      case 'a1':
        setCardNo(0)
        break;
      case 'a2':
        setCardNo(1)
        break;
      case 'b1':
        setCardNo(2)
        break;
      case 'b2':
        setCardNo(3)
        break;
      case 'c1':
        setCardNo(4)
        break;
      case 'c2':
        setCardNo(5)
        break;

      default:
        break;
    }
  }, [courseId, cardNo])

  return (
    <div className="detailAbout">
      <div className="daUpperText">
        <div className="daHeading">Course Overview</div>
        {CD_DATA.map((item, i) => {
          return <p className="daPara" key={i}
            style={{
              display: i === cardNo ? "block" : "none" //put id here
            }}
          >{item.course_overview}</p>
        })}
      </div>
      <div className="dbLowerText">
        <div className="dbltHeading">Key takeaways from this course</div>
        <div className="dbltPara">
          {
            CD_DATA.map((item, i) => {
              {/* console.log(item) */ }
              return <p
                key={i}
                style={{
                  display: i === cardNo ? "" : "none", //put id here
                  flexDirection: "column"
                }}
              >
                {
                  item.kt_bullets.map((item, i) => {
                    return <span
                      key={i}
                      style={{
                        display: 'flex',
                        gap: "0.5em",
                        alignItems: "center"
                      }}
                    ><span >
                        <LuArrowBigRight />
                      </span>
                      <span>{item}</span>
                    </span>
                  })
                }

              </p>

            })
          }

        </div>
      </div>
    </div>
  );
};

export default About;
