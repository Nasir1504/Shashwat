import React from "react";

//styles
import "./comprehensive-support.scss";

//card data
import { CARD_DATA } from "./cardData";

//imgs
import Circle1 from "../../../assets/imgs/language-learning/circle1.png";
import CircleFrame from "../../../assets/imgs/language-learning/circle-frame.png";
import PersonImg from "../../../assets/imgs/language-learning/person-img.png";
import FrameCard from "../../../assets/imgs/language-learning/card-frame.png";

export default function ComprehensiveSupport({ progress, query }) {
  // const [isVisible, setIsVisible] = useState(false);
  // const ComprehensiveSupportRef = useRef(null);
  // const sValue = progress.Progress + (progress.Page - 1.2)

  // useEffect(() => {
  //     const observer = new IntersectionObserver(
  //         ([entry]) => {
  //             // Only set isVisible if it hasn't been triggered before
  //             if (ComprehensiveSupportRef.current && entry.isIntersecting) {
  //                 setIsVisible(true);
  //                 ComprehensiveSupportRef.current = true; // Mark as triggered
  //             }
  //         },
  //         {
  //             threshold: 0.8, // Trigger when 50% of the target is visible
  //         }
  //     );

  //     const target = ComprehensiveSupportRef.current;
  //     if (target) {
  //         observer.observe(target);
  //     }

  //     return () => {
  //         if (target) {
  //             observer.unobserve(target);
  //         }
  //     };
  // }, []);
  // console.log("Value: ", query)
  return (
    <div
      className="comprehensive-support-main"
      //  ref={ComprehensiveSupportRef}
    >
      <section className="top-section">
        <p className="sub-heading1">Germany Awaits{query}</p>
        <h3>
          Comprehensive Support for Every <br /> Step of Your Study Abroad
          Journey
        </h3>
        {!query ? (
          <p className="squeryub-heading2">
            Shashwat Sprachschule’s handholding support to turn your study
            abroad <br /> Dreams into reality.
          </p>
        ) : (
          <p className="squeryub-heading2">
            Shashwat Sprachschule’s handholding support to turn your study
            abroad Dreams into reality.
          </p>
        )}
        {!query ? (
          <div className="circle-frame-main">
            <img src={CircleFrame} alt="" className="circle-frame" />
            <img src={Circle1} alt="" className="circle-vector" />
            <img src={PersonImg} alt="" className="person-img" />
          </div>
        ) : (
          <div className="circle-frame-main-mobile">
            <img src={CircleFrame} alt="" className="circle-frame" />
            <img src={Circle1} alt="" className="circle-vector" />
            <img src={PersonImg} alt="" className="person-img" />
          </div>
        )}
      </section>

      {!query ? (
        <section
          className="bottom-section"
          style={{
            // transform: !isVisible && 'translateX(100vw)',
            transform:
              progress.Progress < 0.01
                ? `translate(100%)`
                : progress.Progress >= 0.2 &&
                  `translate(-${Math.min(35, Math.max(0, progress.Progress * 80))}%)`,

            transition:
              progress.Progress < 0.2 && "all 2s cubic-bezier(.05,1.15,1,.99)",
          }}
        >
          {CARD_DATA.map((item, i) => {
            const formattedNumber = (i + 1).toString().padStart(2, "0");

            return (
              <div className="frame-card-main" key={i}>
                <img src={FrameCard} alt="" className="main-frame" />
                <div className="top-part">
                  <p className="heading">{item.heading}</p>
                  <h3>{formattedNumber}</h3>
                  <p className="sub-heading">By {item.name}</p>
                </div>

                <div className="bottom-part">
                  <ul>
                    <li>{item.details.l1}</li>
                    <li>{item.details.l2}</li>
                    <li>{item.details.l3}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        <section
          className="bottom-section"
          style={{
            transform: `translate(0%)`,
          }}
        >
          <div
            className="inner-div"
            style={{
              transform:
                progress.Progress >= 0.2 &&
                `translateY(-${Math.min(128, Math.max(0, progress.Progress * 180))}%)`,
              // transform: `translateY(-150%)`,
            }}
          >
            {CARD_DATA.map((item, i) => {
              const formattedNumber = (i + 1).toString().padStart(2, "0");

              return (
                <div className="frame-card-main" key={i}>
                  <img src={FrameCard} alt="" className="main-frame" />
                  <div className="top-part">
                    <p className="heading">{item.heading}</p>
                    <h3>{formattedNumber}</h3>
                    <p className="sub-heading">By {item.name}</p>
                  </div>

                  <div className="bottom-part">
                    <ul>
                      <li>{item.details.l1}</li>
                      <li>{item.details.l2}</li>
                      <li>{item.details.l3}</li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
