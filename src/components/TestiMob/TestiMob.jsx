import React, { useState } from "react";
import "./TestiMob.scss";

import { GrLinkNext,GrLinkPrevious } from "react-icons/gr";


import Img1 from "../../assets/imgs/personImg1.png";
import Starr from "../../assets/imgs/smoothStar.png";
import MobileStand1 from "../../assets/imgs/MobileStand.png";
import HalfStar from "../../assets/imgs/HalfStar.png";
import Play from "../../assets/imgs/PlayBtn.png";
import MobileStand from "../../assets/imgs/MobileStand.png";
import LineBg1 from "../../assets/imgs/LineBg1.png";

const TestiMob = () => {
  const [count, setCount] = useState(1);

  // console.log(count,"Hello");

  const handleCardPrev = ()=>{
    setCount(count === 1? 1 : count - 1);
  }
  const handleCardNext = ()=>{
    setCount(count === 5? 5 : count + 1);
  }

  return (
    <div id="testimonials-mob" className="testi-main-mb">
      <div className="s-f-div1">
        <p className="sfd1-p"> Student's Testimonial</p>
        <h2 className="sfd1-h2">
          What our Brilliant <br /> Student Say's
        </h2>
      </div>
      <div className="s-f-div2">
        <div
          className="info-card-mb"
          style={{ transform: count !== 1 && "translate(-100vw,0)", zIndex: 5 }}
        >
          <div className="icmb1">
            <img className="personI-1-mb" src={Img1} alt="" />
            <div className="icmb1-inner">
              <p>Savannah Nguyen</p>
              <div className="starr-cont-mb">
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
              </div>
            </div>
          </div>
          <p className="lorem-txt-mb">
            Lorem ipsum dolor sit amet consectetur elit. Facere debitis incidunt
            numqu amab. Necessit earum cupiditate, repellat incidunt reiciendis
            debitis amet consectetur.
          </p>
          <div className="icmb3">
            <img className="play-btn-mb" src={Play} alt="" />
            <h2>Watch Video</h2>
          </div>
        </div>
        <div
          className="info-card-mb bgm1"
          style={{
            transform:
              count === 1
                ? "translate(0,5vw) scale(0.93)"
                : count === 2
                ? "translate(0,0) scale(1)"
                : count >= 3 && "translate(-100vw,0) scale(1)",
            zIndex: 4,
            background: count >=2 && "rgb(45,48,128)"
          }}
        >
          <div className="icmb1">
            <img className="personI-1-mb" src={Img1} alt="" />
            <div className="icmb1-inner">
              <p>Savannah Nguyen</p>
              <div className="starr-cont-mb">
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
              </div>
            </div>
          </div>
          <p className="lorem-txt-mb">
            Lorem ipsum dolor sit amet consectetur elit. Facere debitis incidunt
            numqu amab. Necessit earum cupiditate, repellat incidunt reiciendis
            debitis amet consectetur.
          </p>
          <div className="icmb3">
            <img className="play-btn-mb" src={Play} alt="" />
            <h2>Watch Video</h2>
          </div>
        </div>
        <div
          className="info-card-mb bgm2"
          style={{
            transform:
              count === 1
                ? "translate(0,9vw) scale(0.87)"
                : count === 2
                ? "translate(0,5vw) scale(0.93)"
                : count === 3
                ? "translate(0,0) scale(1)"
                : count >= 4 && "translate(-100vw,0) scale(1)",
            zIndex: 3,
            background: count >=3 && "rgb(45,48,128)"
          }}
        >
          <div className="icmb1">
            <img className="personI-1-mb" src={Img1} alt="" />
            <div className="icmb1-inner">
              <p>Savannah Nguyen</p>
              <div className="starr-cont-mb">
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
              </div>
            </div>
          </div>
          <p className="lorem-txt-mb">
            Lorem ipsum dolor sit amet consectetur elit. Facere debitis incidunt
            numqu amab. Necessit earum cupiditate, repellat incidunt reiciendis
            debitis amet consectetur.
          </p>
          <div className="icmb3">
            <img className="play-btn-mb" src={Play} alt="" />
            <h2>Watch Video</h2>
          </div>
        </div>
        <div
          className="info-card-mb bgm3"
          style={{
            transform:
              count === 1
                ? "translate(0,13vw) scale(0.8)"
                : count === 2
                ? "translate(0,9vw) scale(0.87)"
                : count === 3
                ? "translate(0,5vw) scale(0.93)"
                : count === 4
                ? "translate(0vw,0) scale(1)"
                : count === 5 && "translate(-100vw,0) scale(1)",
            zIndex: 2,
            background: count >=4 && "rgb(45,48,128)"
          }}
        >
          <div className="icmb1">
            <img className="personI-1-mb" src={Img1} alt="" />
            <div className="icmb1-inner">
              <p>Savannah Nguyen</p>
              <div className="starr-cont-mb">
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
              </div>
            </div>
          </div>
          <p className="lorem-txt-mb">
            Lorem ipsum dolor sit amet consectetur elit. Facere debitis incidunt
            numqu amab. Necessit earum cupiditate, repellat incidunt reiciendis
            debitis amet consectetur.
          </p>
          <div className="icmb3">
            <img className="play-btn-mb" src={Play} alt="" />
            <h2>Watch Video</h2>
          </div>
        </div>
        <div
          className="info-card-mb bgm4"
          style={{
            transform:
              count === 1
                ? "translate(0,17vw) scale(0.73)"
                : count === 2
                ? "translate(0,13vw) scale(0.8)"
                : count === 3
                ? "translate(0,9vw) scale(0.87)"
                : count === 4
                ? "translate(0,5vw) scale(0.93)"
                : count === 5 && "translate(0vw,0) scale(1)",
            zIndex: 1,
            background: count >=5 && "rgb(45,48,128)"
          }}
        >
          <div className="icmb1">
            <img className="personI-1-mb" src={Img1} alt="" />
            <div className="icmb1-inner">
              <p>Savannah Nguyen</p>
              <div className="starr-cont-mb">
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
                <img className="starr-mb" src={Starr} alt="" />
              </div>
            </div>
          </div>
          <p className="lorem-txt-mb">
            Lorem ipsum dolor sit amet consectetur elit. Facere debitis incidunt
            numqu amab. Necessit earum cupiditate, repellat incidunt reiciendis
            debitis amet consectetur.
          </p>
          <div className="icmb3">
            <img className="play-btn-mb" src={Play} alt="" />
            <h2>Watch Video</h2>
          </div>
        </div>
        <div className="caraousel-cont-mb">
        <div className="prevBtn" onClick={handleCardPrev}><GrLinkPrevious /></div>
          <span
            className="span-cc-mb"
            style={{ background: count === 1 && "#2D3080" }}
            onClick={() => {
              setCount(1);
            }}
          ></span>
          <span
            className="span-cc-mb"
            style={{ background: count === 2 && "#2D3080" }}
            onClick={() => {
              setCount(2);
            }}
          ></span>
          <span
            className="span-cc-mb"
            style={{ background: count === 3 && "#2D3080" }}
            onClick={() => {
              setCount(3);
            }}
          ></span>
          <span
            className="span-cc-mb"
            style={{ background: count === 4 && "#2D3080" }}
            onClick={() => {
              setCount(4);
            }}
          ></span>
          <span
            className="span-cc-mb"
            style={{ background: count === 5 && "#2D3080" }}
            onClick={() => {
              setCount(5);
            }}
          ></span>
          <div className="nextBtn" onClick={handleCardNext}><GrLinkNext /></div>
        </div>
      </div>
      <div className="s-f-div3">
        <img className="ms-mb1" src={MobileStand1} alt="" />
        <img className="line-bg-mb" src={LineBg1} alt="" />
      </div>
    </div>
  );
};

export default TestiMob;
