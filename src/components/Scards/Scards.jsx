import React, { useLayoutEffect, useRef } from "react";
import "./Scards.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BgImg from "../../assets/imgs/shashBgImg1.png";
import C1 from "../../assets/imgs/FrameC11.png";
// import C2 from "../../assets/imgs/FrameC12.png";
// import Ellip from "../../assets/imgs/ellipViolet.png";
// import Logo from "../../assets/imgs/shashLogo.png";
import Logo1 from "../../assets/imgs/shashLogo1.png";
import CardComp from "./CardComp/CardComp";
import LineBg from "../../imgs/whyChooseUs/wcu-line2.png";

const Scards = ({ homeRef }) => {
  const wrapperRef1 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef1.current,
            start: "top 50%",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(".div-sec1", {
          duration: 5,
          height: "42vh",
          // ease: "none",
        })
        .to(
          ".ds2-h1",
          {
            duration: 5,
            yPercent: -160,
            // ease: "none",
          },
          "-=2",
        )
        .to(".ds2-p", {
          duration: 10,
          yPercent: -300,
          // ease: "none",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef1.current,
            start: "top top",
            end: "+=300%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(
          ".cards-section",
          {
            duration: 50,
            x: "-50vw",
            // ease: "power2",
          },
          "<",
        );
      // .fromTo(
      //   ".conty1",
      //   {
      //     // rotate: -5,
      //     // ease: "power2",
      //   },
      //   {
      //     duration:4,
      //     rotate: 0,
      //     // duration:1
      //   }
      // )
      // .fromTo(
      //   ".conty2",
      //   {
      //     // rotate: 5,
      //     // ease: "power2",
      //   },
      //   {
      //     duration:4,
      //     rotate: 0,
      //     // duration:1
      //   },
      //   "<"
      // );
    }, wrapperRef1);

    return () => ctx.revert();
  }, [homeRef]);

  return (
    <section id="courses" ref={wrapperRef1} className="other-section">
      <div className="scards-main">
        <img className="linee-bg" src={LineBg} alt="" />
        <div className="div-sec1">
          <div className="div-sec2">
            <img className="sha-bg" src={BgImg} alt="" />
            <h1 className="ds2-h1">
              Structured{" "}
              <span style={{ color: "#FFC537", fontWeight: "600" }}>
                German Courses{" "}
              </span>{" "}
              Tailored <br /> for Your Success
            </h1>
            <p className="ds2-p">
              "Engaging Lessons Designed to Take You From Beginner to Fluent"
            </p>
          </div>
        </div>
        <div className="cards-section">
          <CardComp C={C1} Logo={Logo1} bool={true} X={"A1"} id={1} />
          <CardComp C={C1} Logo={Logo1} bool={false} X={"A2"} id={2} />
          <CardComp C={C1} Logo={Logo1} bool={true} X={"B1"} id={3} />
          <CardComp C={C1} Logo={Logo1} bool={false} X={"B2"} id={4} />
          <CardComp C={C1} Logo={Logo1} bool={true} X={"C1"} id={5} />
          <CardComp C={C1} Logo={Logo1} bool={false} X={"C2"} id={6} />
        </div>
        {/* <img className='ellip-violet' src={Ellip} alt="" /> */}
      </div>
    </section>
  );
};

export default Scards;
