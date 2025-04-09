import React from "react";
import "./GermanLang.scss";
import logo from "../../assets/logo.png";
import Boy from "../../assets/imgs/BoyImg.png";
import Bg1 from "../../assets/imgs/concentImg.png";
import Star from "../../assets/imgs/smoothStar.png";

const GermanLang = () => {
  return (
    <div className="german-main">
      <nav className="navbar absolute top-2 left-1/2 -translate-x-1/2 w-[93%] h-[90px] px-8 py-4 flex justify-between items-center rounded-3xl z-50">
        <div className="logo-container w-26 h-26">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <div className="links-container flex justify-center items-center gap-8 text-[#D3D3D3]">
          <a href="#courses" className="text-lg">
            Courses
          </a>
          <a href="#whyus" className="text-lg">
            Why Us
          </a>
          <a href="#about" className="text-lg">
            About Us
          </a>
          <a href="#opportunity" className="text-lg">
            Opportunity
          </a>
          <a href="#testimonials" className="text-lg">
            Testimonials
          </a>
        </div>
        <button className="contact-button w-fit h-fit px-4 py-3 bg-[#FFC537] text-black shadow-black shadow-md rounded-full text-lg font-semibold">
          Contact Us
        </button>
      </nav>
      <img className="boy-img" src={Boy} alt="" />
      <img className="bg1-img-shash" src={Bg1} alt="" />
      <div className="cd-text-cont">
        <p className="cd-text-p">Course Details</p>
        <h2 className="cd-text-h2">
          German Language - <br /> A1 Course
        </h2>
      </div>
      <div className="review-box-shash">
        <div className="rbs1">
          <p>Instructor</p>
          <h3>Jerome Bell</h3>
        </div>
        <div className="rbs2">
          <p>Duration</p>
          <h3>3 Months</h3>
        </div>
        <div className="rbs3">
          <p>Language</p>
          <h3>English</h3>
        </div>
        <div className="rbs4">
          <p>Reviews</p>
          <div className="star-cont-outer">
            <div className="star-cont-inn">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <h3> (325)</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanLang;
