import { useState, useEffect } from "react";
import "./content.scss";
import { useParams } from "react-router-dom";
import { CD_DATA } from "../../../pages/CourseDetails/CourseDetailsData";

const Content = () => {
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

  // console.log(CD_DATA)

  return (
    <div className="detailContent">

      <div
        className="dcHeading"
        style={{
          marginBottom: "1em"
        }}
      >What Students Can Expect ?

      </div>

      {
        CD_DATA.map((item, i) => {
          {/* console.log(item.contents) */ }
          return <div
            style={{
              display: i === cardNo ? "" : "none"
            }}
          >
            {
              (item?.contents || []).map((innerItem, i) => {
                return <div>
                  <b
                    style={{
                      fontSize: "1rem"
                    }}
                  >
                    {innerItem.query}
                  </b>
                  <p
                    style={{
                      fontSize: "1rem",
                      marginBottom: "1em"
                    }}
                  >
                    {innerItem.answer}
                  </p>
                </div>
              })
            }

          </div>

        })
      }


    </div>
  );
};

export default Content;