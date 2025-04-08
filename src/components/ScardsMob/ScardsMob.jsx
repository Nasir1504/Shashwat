import React from "react";
import "./ScardsMob.scss";
import BgImg from "../../assets/imgs/shashBgImg1.png";
import C1 from "../../assets/imgs/FrameC11.png";
import C2 from "../../assets/imgs/FrameC12.png";
// import Ellip from "../../assets/imgs/ellipViolet.png";
import Logo from "../../assets/imgs/shashLogo.png";
import Logo1 from "../../assets/imgs/shashLogo1.png";
import CardComp from "./CardsMob/CardsMob";
import LineBg from "../../imgs/whyChooseUs/wcu-line2.png";

const ScardsMob = () => {
  return (
    <section id="courses-mob" className="other-section-mb">
      <div className="scards-main-mb">
        <img className="linee-bg-mb" src={LineBg} alt="" />
        <div className="div-sec1-mb">
          <h2 className="dsm-course-mb">Courses</h2>
          <p className="dsm-course-p-mb">
            Structured <span>German Courses</span> Tailored for your Success
          </p>
        </div>
        <div className="cards-section-mb">
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

export default ScardsMob;
