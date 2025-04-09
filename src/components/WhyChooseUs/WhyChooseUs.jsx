import React, { useLayoutEffect, useRef } from "react";
import "./whyChooseUs.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import BgImg from "../../assets/imgs/shashBgImg1.png";
// import C1 from "../../assets/imgs/FrameC11.png";
// import C2 from "../../assets/imgs/FrameC12.png";
// import Ellip from "../../assets/imgs/ellipViolet.png";
// import Logo from "../../assets/imgs/shashLogo.png";
// import Logo1 from "../../assets/imgs/shashLogo1.png";
// import CardComp from "./CardComp/CardComp";
import LineBg from "../../imgs/whyChooseUs/wcu-line2.png";

import WCU1 from "../../imgs/whyChooseUs/wcu1.png";
import WCU2 from "../../imgs/whyChooseUs/wcu2.png";
import WCU3 from "../../imgs/whyChooseUs/wcu3.png";
import WCU4 from "../../imgs/whyChooseUs/wcu4.png";
import WCU5 from "../../imgs/whyChooseUs/wcu5.png";
import WCU6 from "../../imgs/whyChooseUs/wcu6.png";

const WhyChooseUs = ({ homeRef }) => {
  const whyChooseUsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: whyChooseUsRef.current,
            start: "top 70%",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(".wcuBlueCircle", {
          duration: 1,
          // height: "122vh",
          y: 0,
          // ease: "none",
        })
        .to(
          ".wcuText",
          {
            opacity: 1,
            y: 0,
          },
          "<",
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: whyChooseUsRef.current,
            start: "top top",
            end: "+=300%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        })
        // .to(".wcuBlueCircle", {
        //   duration: 10,
        //   // height: "122vh",
        //   y: 0,
        //   // ease: "none",
        // })
        // .to(".wcuText", {
        //   duration: 5,
        //   opacity: 1,
        //   y: 0,
        // })
        // .to(".ds2-p", {
        //   duration: 10,
        //   yPercent: -430,
        //   // ease: "none",
        // })
        .to(
          ".cards-section",
          {
            duration: 50,
            y: "-215vh",
            // ease: "power2",
          },
          "<",
        )
        .fromTo(
          ".conty1",
          {
            // rotate: -5,
            // ease: "power2",
          },
          {
            duration: 4,
            rotate: 0,
            // duration:1
          },
        );
      // .fromTo(
      //   ".conty2",
      //   {
      //     // rotate: 5,
      //     // ease: "power2",
      //   },
      //   {
      //     duration: 4,
      //     rotate: 0,
      //     // duration:1
      //   },
      //   "<"
      // );
    }, whyChooseUsRef);

    return () => ctx.revert();
  });

  return (
    <section ref={whyChooseUsRef} id="whyus" className="whyChooseUsWrapper">
      <div className="whyChooseUsMain">
        <img className="wcuBg" src={LineBg} alt="" />
        <div className="wcuBlueCircle"></div>
        <div className="wcuText">
          <span>WHY CHOOSE US</span>
          <h1 className="wcuh1">Our Values</h1>
          <p>
            "Driven by integrity and innovation, we offer tailored <br />{" "}
            <span className="span2"> expertise for your success."</span>
          </p>
        </div>
        <div className="cards-section">
          <img src={WCU1} alt="" className="wcu1" />
          <img src={WCU2} alt="" className="wcu2" />
          <img src={WCU3} alt="" className="wcu3" />
          <img src={WCU4} alt="" className="wcu4" />
          <img src={WCU5} alt="" className="wcu5" />
          <img src={WCU6} alt="" className="wcu6" />
        </div>
        {/* <img className='ellip-violet' src={Ellip} alt="" /> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
