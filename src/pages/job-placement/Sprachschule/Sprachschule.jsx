import React from "react";

//styles
import "./sprachschule.scss";

//card data
import { CARD_DATA } from "./cardData";

//imgs
import Circle1 from "../../../assets/imgs/language-learning/circle1.png";
import CircleFrame from "../../../assets/imgs/language-learning/circle-frame.png";
import PersonImg from "../../../assets/imgs/language-learning/person-img.png";
import FrameCard from "../../../assets/imgs/language-learning/card-frame.png";

export default function Sprachschule({ progress, query }) {
  // const [isVisible, setIsVisible] = useState(false);
  // const SprachschuleSupportRef = useRef(null);

  // useEffect(() => {
  //     const observer = new IntersectionObserver(
  //         ([entry]) => {
  //             // Only set isVisible if it hasn't been triggered before
  //             if (SprachschuleSupportRef.current && entry.isIntersecting) {
  //                 setIsVisible(true);
  //                 SprachschuleSupportRef.current = true; // Mark as triggered
  //             }
  //         },
  //         {
  //             threshold: 0.8, // Trigger when 50% of the target is visible
  //         }
  //     );

  //     const target = SprachschuleSupportRef.current;
  //     if (target) {
  //         observer.observe(target);
  //     }

  //     return () => {
  //         if (target) {
  //             observer.unobserve(target);
  //         }
  //     };
  // }, []);

  return (
    <div
      className={!query ? "sprachschule-main" : "sprachschule-main-mobile"}
      //  ref={SprachschuleSupportRef}
    >
      <section className="top-section">
        <p className="sub-heading1">German Language Training to Placements</p>
        <h3>
          Shashwat Sprachschule is here to <br /> Take Care of Everything for
          You
        </h3>
        <p className="sub-heading2">
          At Shashwat Sprachschule, we offer end-to-end support to help you
          succeed <br /> in your nursing career in Germany. Our process
          includes:
        </p>

        <div className="circle-frame-main">
          <img src={CircleFrame} alt="" className="circle-frame" />
          <img src={Circle1} alt="" className="circle-vector" />
          <img src={PersonImg} alt="" className="person-img" />
        </div>
      </section>

      {!query ? (
        <section
          className="sprachschule-main-bottom-section"
          style={{
            transform:
              progress.Progress < 0.01
                ? "translateX(100vw)"
                : progress.Progress > 0.1
                  ? `translate(-${Math.min(35, Math.max(0, progress.Progress * 100))}%)`
                  : "",
            // "translate(-35%)"

            transition:
              progress.Progress < 0.5
                ? "all 2s cubic-bezier(.05,1.15,1,.99)"
                : progress.Progress >= 0.5 && "all 0.2s ease-out",
          }}
        >
          {CARD_DATA.map((item, i) => {
            const itemList = item.detailList;

            return (
              <div className="frame-card-main" key={i}>
                <img src={FrameCard} alt="" className="main-frame" />
                <div className="top-part">
                  <p className="heading">{item.heading}</p>
                  <p className="sub-heading">By {item.name}</p>
                </div>

                <div className="bottom-part">
                  <p>{item.details}</p>

                  <ul style={{ listStyleType: "disc", marginLeft: "6%" }}>
                    {itemList?.map((list, j) => {
                      return <li key={j}>{list.listName}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        <section
          className="sprachschule-main-bottom-section"
          style={{
            transform: progress.Progress < 0.01 && "translateX(100vw)",
            // progress.Progress > 0.1 ? `translateY(-${Math.min(35, (Math.max(0, progress.Progress * 100)))}%)` : "",
            // "translateY(-35%)",

            transition: progress.Progress >= 0.5 && "all 0.2s ease-out",
          }}
        >
          <div
            className="inner"
            style={{
              transform:
                progress.Progress > 0.1
                  ? `translateY(-${Math.min(135, Math.max(0, progress.Progress * 180))}%)`
                  : "",
              // "translateY(-125%)",
            }}
          >
            {CARD_DATA.map((item, i) => {
              const itemList = item.detailList;

              return (
                <div className="frame-card-main" key={i}>
                  <img src={FrameCard} alt="" className="main-frame" />
                  <div className="top-part">
                    <p className="heading">{item.heading}</p>
                    <p className="sub-heading">By {item.name}</p>
                  </div>

                  <div className="bottom-part">
                    <p>{item.details}</p>

                    <ul style={{ listStyleType: "disc", marginLeft: "6%" }}>
                      {itemList?.map((list, j) => {
                        return <li key={j}>{list.listName}</li>;
                      })}
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
