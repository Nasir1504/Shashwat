import React from "react";
import { Link } from "react-router-dom";
import "./ServiceMob.scss";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// imgs

import card1 from "../img/card-1.png";
import card2 from "../img/card-2.png";
import card3 from "../img/card-3.png";
import c1Img from "../img/c1-img.png";
import c2Img from "../img/c2-img.png";
import c3Img from "../img/c3-img.png";
import clogo from "../img/card-logo.png";
import clogo1 from "../img/card-logo1.png";
import bgDesign from "../img/bg-design.png";

gsap.registerPlugin(ScrollTrigger);

export const ServiceMob = () => {
  // const scrollDivRef1 = useRef(null);

  //   useGSAP(() => {
  //     gsap.timeline().to("ser-scroll-div-parent", {
  //       xPercent: -100,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: scrollDivRef.current,
  //         pin: true,
  //         scrub: 1,
  //         start: "top top",
  //         end: `+=100%`,
  //         anticipatePin: 1,
  //         markers: true,
  //       },
  //     });
  //   });

  // const cardRef = useRef(null);

  // useLayoutEffect(() => {
  //   // gsap.registerPlugin(ScrollTrigger);

  //   const ctx = gsap.context(() => {
  //     // const horizontalSection = scrollDivRef.current;

  //     gsap.timeline().to(".ser-scroll-div-parent", {
  //       yPercent: -38,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: scrollDivRef1.current,
  //         pin: true,
  //         scrub: 1,
  //         end: "+=100%",
  //         anticipatePin: 1,
  //         //   markers: true,
  //       },
  //     });
  //     // .to(card1.current, {
  //     //   backgroundColor: "white",
  //     // });
  //   }, scrollDivRef1);

  //   return () => ctx.revert();
  // }, []);

  // const [serHover, setSerHover] = React.useState(0);

  // const handleSerHover = (id) => {
  //   setSerHover(id);
  // };

  return (
    <div id="services-mob" className="service-mob">
      <div className="ser-intro-txt-mob">
        <p
          style={{
            marginRight: "75%",
            fontSize: "5vw",
            fontWeight: "700",
            color: "#25286A",
            textDecoration: "underline",
          }}
        >
          Services
        </p>
        <p>
          Achieve{" "}
          <span style={{ color: "#2D3080", fontWeight: "500" }}>
            German Fluency
          </span>{" "}
          with Expert Guidance and Innovative Services
        </p>
      </div>

      <div className="ser-main-div-mob">
        <div className="ser-scroll-div-parent-mob">
          <img
            className="ser-bg-design"
            src={bgDesign}
            alt=""
            // style={{ width: "120%", height: "auto" }}
          />
          <div
            className="ser-scroll-div-mob"
            style={{ backgroundColor: "#2D3080" }}
            // ref={cardRef}
            // onMouseEnter={() => handleSerHover(1)}
            // onMouseLeave={() => handleSerHover(0)}
          >
            <Link className="link-to-mob" to="/language-learning" />
            <img className="ser-scroll-bg-mob" src={card1} alt="" />
            <div className="ser-c-img-box-mob">
              <img
                className="ser-c-img-mob"
                src={c1Img}
                alt=""
                style={{ width: "100%", height: "130%" }}
              />
            </div>

            <div className="ser-c-detail-box-mob">
              <div className="c-logo-parent-mob">
                <img className="ser-c-logo-mob" src={clogo} alt="" />
              </div>
              <div className="ser-c-heading-mob">
                <p>Language Learning</p>
              </div>
              <div className="ser-c-desc-mob">
                <p>
                  "Comprehensive courses to boost your German skills from
                  beginner to advanced levels."
                </p>
              </div>
            </div>
            {/* <div className="ser-c-more-mob">
              <p>Know More </p>
            </div> */}
          </div>
          <div
            className="ser-scroll-div-mob"
            style={{
              // backgroundColor: "#2D3080",
              backgroundColor: "#ffffff",
            }}
          >
            <Link className="link-to-mob" to="/consultancy-solution" />
            <img className="ser-scroll-bg-mob" src={card2} alt="" />
            <div className="ser-c-img-box-mob">
              <img
                className="ser-c-img-mob"
                src={c3Img}
                alt=""
                style={{ width: "100%", height: "130%" }}
              />
            </div>

            <div className="ser-c-detail-box-mob" style={{ color: "#2D3080" }}>
              <div className="c-logo-parent-mob">
                <img className="ser-c-logo-mob" src={clogo1} alt="" />
              </div>
              <div className="ser-c-heading-mob">
                <p>Consultancy Solution</p>
              </div>
              <div className="ser-c-desc-mob">
                <p>
                  "Expert guidance to help you navigate your language learning
                  journey."
                </p>
              </div>
            </div>
            {/* <div className="ser-c-more-mob">
              <p>Know More </p>
            </div> */}
          </div>
          <div
            className="ser-scroll-div-mob"
            style={{ backgroundColor: "#2D3080" }}
          >
            <Link className="link-to-mob" to="/job-placement" />
            <img className="ser-scroll-bg-mob" src={card3} alt="" />
            <div className="ser-c-img-box-mob">
              <img
                className="ser-c-img-mob"
                src={c2Img}
                alt=""
                style={{ width: "100%", height: "140%" }}
              />
            </div>

            <div className="ser-c-detail-box-mob">
              <div className="c-logo-parent-mob">
                <img className="ser-c-logo-mob" src={clogo} alt="" />
              </div>
              <div className="ser-c-heading-mob" style={{}}>
                <p>Job Placement</p>
              </div>
              <div className="ser-c-desc-mob">
                <p>
                  "Connecting you with job opportunities tailored to your German
                  language skills."
                </p>
              </div>
            </div>
            {/* <div className="ser-c-more-mob">
              <p>Know More </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
