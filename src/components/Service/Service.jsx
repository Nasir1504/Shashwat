import React, { useRef } from "react";
import "./Service.scss";
import { Link } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLayoutEffect } from "react";
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
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const Service = () => {
  const scrollDivRef = useRef(null);

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

  const cardRef = useRef(null);

  useLayoutEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // const horizontalSection = scrollDivRef.current;
      const serviceText = new SplitType(".ser-intro-txt p");
      const chars = serviceText.chars;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: scrollDivRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .from(chars, {
          opacity: 0,
          stagger: 0.02,
          ease: "power2.out",
        })
        .to(".ser-scroll-div-parent", {
          xPercent: -38,
          ease: "none",
          scrollTrigger: {
            trigger: scrollDivRef.current,
            pin: true,
            scrub: 1,
            end: "+=100%",
            anticipatePin: 1,
            //   markers: true,
          },
        });
      // .to(card1.current, {
      //   backgroundColor: "white",
      // });
    }, scrollDivRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="service" id="services" ref={scrollDivRef}>
      <div className="ser-intro-txt">
        <p>
          Achieve{" "}
          <span style={{ color: "#2D3080", fontWeight: "500" }}>
            German Fluency
          </span>{" "}
          with Expert Guidance and Innovative Services
        </p>
      </div>

      <div className="ser-main-div">
        <div className="ser-scroll-div-parent">
          <div
            className="ser-scroll-div"
            style={{ backgroundColor: "#2D3080" }}
            ref={cardRef}
          >
            <Link className="link-to" to="/language-learning" />
            <img className="ser-scroll-bg" src={card1} alt="" />
            <div className="ser-c-img-box">
              <img
                className="ser-c-img"
                src={c1Img}
                alt=""
              // style={{ width: "120%", height: "100%" }}
              />
            </div>

            <div className="ser-c-detail-box">
              <div className="c-logo-parent">
                <img className="ser-c-logo" src={clogo} alt="" />
              </div>
              <div className="ser-c-heading">
                <p>Language Learning</p>
              </div>
              <div className="ser-c-desc">
                <p>
                  "Comprehensive courses to boost your German skills from
                  beginner to advanced levels."
                </p>
              </div>
              {/* <div className="ser-c-more">
                <p>Know More </p>
              </div> */}
            </div>
          </div>
          {/* ---------------------------------- */}
          <div
            className="ser-scroll-div"
            style={{
              // backgroundColor: "#2D3080",
              backgroundColor: "white",
            }}
          >
            <Link className="link-to" to="/consultancy-solution" />
            <img className="ser-scroll-bg" src={card2} alt="" />
            <div className="ser-c-img-box">
              <img className="ser-c-img" src={c3Img} alt="" />
            </div>

            <div className="ser-c-detail-box">
              <div className="c-logo-parent">
                <img
                  className="ser-c-logo"
                  src={clogo1}
                  alt=""
                  style={{ width: "70%" }}
                />
              </div>
              <div className="ser-c-heading" style={{ color: "#2D3080" }}>
                <p>Consultancy Solution</p>
              </div>
              <div className="ser-c-desc">
                <p style={{ color: "black", marginTop: "-20px" }}>
                  "Expert guidance to help you navigate your language learning
                  journey."
                </p>
              </div>
              {/* <div className="ser-c-more">
                <p>Know More </p>
              </div> */}
            </div>
          </div>
          <div className="ser-scroll-div"
            style={{ backgroundColor: "#2D3080" }}
          >
            <Link className="link-to" to="/job-placement" />
            <img className="ser-scroll-bg" src={card3} alt="" />
            <div className="ser-c-img-box">
              <img className="ser-c-img" src={c2Img} alt="" />
            </div>

            <div className="ser-c-detail-box">
              <div className="c-logo-parent">
                <img className="ser-c-logo" src={clogo} alt="" />
              </div>
              <div
                className="ser-c-heading"
              // style={{
              //   left: "3%",
              //   color: " #2D3080",
              // }}
              >
                <p>Job Placement</p>
              </div>
              <div className="ser-c-desc">
                <p>
                  "Connecting you with job opportunities tailored to your German
                  language skills."
                </p>
              </div>
              {/* <div className="ser-c-more">
                <p>Know More </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
