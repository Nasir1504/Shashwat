import React, { useEffect, useRef, useState } from "react";

//styles
import "./job-placement.scss";

import { useLocation } from "react-router-dom";

import { Stickyroll } from "@stickyroll/react";

//components
import TopSection from "./Top-Section/TopSection";
import WhyChoose from "./Why-Choose/WhyChoose";
import CareerOptions from "./Career-Options/CareerOptions";
import NursingInGermany from "./Nursing-In-Germany/NursingInGermany";
import Sprachschule from "./Sprachschule/Sprachschule";
import NavBar from "./Nav-Bar/NavBar";
import Testimonial from "../../components/Testimonial/Testimonial";
import TestiMob from "../../components/TestiMob/TestiMob";
import Contact from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";
import { FooterMob } from "../../components/Footer/FooterMob";

// imgs
import GermanyWillNeed from "../../assets/imgs/job-placement/germany-will-need.png";
import GermanyWillNeed2 from "../../assets/imgs/job-placement/germany-will-need2.png";

export default function JobPlacement({ query }) {
  const jobPlacementRef = useRef();

  const [progress1, setProgress1] = useState({
    Progress: "",
    Page: "",
  });

  const [progress2, setProgress2] = useState({
    Progress: "",
    Page: "",
  });

  const [progress3, setProgress3] = useState({
    Progress: "",
    Page: "",
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // alert()
  }, [pathname]);

  return (
    <div className="job-placement-main">
      {/* <p style={{ color: '#000', position: 'fixed', zIndex: '10', top: '10%' }}>
        {progress.Progress}{' '}{progress.Page}
        <br />
      </p> */}
      <NavBar JobPlacementRef={jobPlacementRef} />

      <TopSection query={query} />
      <WhyChoose />
      <Stickyroll
        pages={1}
        factor={2}
        onProgress={(progress, page, index) => {
          setProgress1({
            Page: page,
            Progress: progress,
          });
        }}
      >
        <div className="scroll-comp-one">
          <CareerOptions progress={progress1} query={query} />
        </div>
      </Stickyroll>
      <div
        style={{
          height: "10vw",
        }}
      ></div>
      <div className="germany-will-need-comp">
        {!query ? (
          <img src={GermanyWillNeed} className="germany-will-need-img" alt="" />
        ) : (
          <img
            src={GermanyWillNeed2}
            className="germany-will-need-img2"
            alt=""
          />
        )}
      </div>

      <Stickyroll
        pages={1}
        factor={4}
        onProgress={(progress, page, index) => {
          setProgress2({
            Page: page,
            Progress: progress,
          });
        }}
      >
        <NursingInGermany Prog={progress2.Progress} query={query} />
      </Stickyroll>

      <Stickyroll
        pages={1}
        factor={4}
        onProgress={(progress, page, index) => {
          setProgress3({
            Page: page,
            Progress: progress,
          });
        }}
      >
        <div className="scroll-comp-one">
          <Sprachschule progress={progress3} query={query} />
        </div>
      </Stickyroll>
      {!query ? <Testimonial /> : <TestiMob />}
      <Contact />
      {!query ? <Footer /> : <FooterMob />}
    </div>
  );
}
