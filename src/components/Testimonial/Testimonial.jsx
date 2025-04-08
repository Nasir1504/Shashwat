import React, { useState, useLayoutEffect, useRef } from "react";
import "./Testimonial.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Img1 from "../../assets/imgs/personImg1.png";
import Starr from "../../assets/imgs/smoothStar.png";
import HalfStar from "../../assets/imgs/HalfStar.png";
import MobileStand from "../../assets/imgs/MobileStand.png";
import Bg1 from "../../assets/imgs/TestimoniolBg1.png";
import Bg2 from "../../assets/imgs/TestimonialBg2.png";
import CM1 from "../../assets/imgs/cardMirror1.png";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const Testimonial = ({ homeRef }) => {
  const [rotate, setRotate] = useState(1);
  const wrapperRef2 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const textOne = new SplitType(".testimonials-p");
      const charsOne = textOne.chars;

      const textTwo = new SplitType(".testimonials-h2");
      const charsTwo = textTwo.chars;

      const tlNew = gsap.timeline();

      tlNew
        .from(charsOne, {
          opacity: 0,
          stagger: 0.05,
          ease: "power2.out",
        })
        .from(charsTwo, {
          opacity: 0,
          stagger: 0.05,
          ease: "power2.out",
        });
    }, wrapperRef2);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div id="testimonials" ref={wrapperRef2} className="testimonial-main">
      <img className="mobile-stand" src={MobileStand} alt="" />
      <div className="testimonials-text-div">
        <p className="testimonials-p">Students Testimonial</p>
        <h2 className="testimonials-h2">What our Brilliant Student's Say</h2>
      </div>
      <div className="shash-card-cont">
        {Array.from({ length: 6 }, (_, index) => {
          return (
            <div
              key={index}
              className={
                rotate === index + 1 ? "info-card" : "info-card rotate"
              }
              style={{
                boxShadow:
                  rotate === index + 1 && "0px 0px 16px 2px rgba(0,0,0,0.75)",
                transform:
                  rotate !== index + 1
                    ? `translateX(${
                        -18 * (rotate - 1)
                      }vw) perspective(1000px) rotate3d(0, 1, 0, -40deg) scale(0.7)`
                    : `translateX(${-18 * (rotate - 1)}vw)`,
              }}
            >
              <div className="card-upper-div">
                <img src={Img1} alt="" />
                <h2>
                  {index === 0
                    ? "Devon Lane"
                    : index === 1
                    ? "Ronald Richards"
                    : index === 2
                    ? "Marvin McKinney"
                    : index === 3
                    ? "Darlene Robertson"
                    : index >= 4 && "Brooklyn Simmons"}
                </h2>
              </div>
              <div className="card-lower-div">
                <p className="cl-text-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.explicabo quis!
                </p>
                <div className="starr-cont">
                  <img className="s-starr" src={Starr} alt="" />
                  <img className="s-starr" src={Starr} alt="" />
                  <img className="s-starr" src={Starr} alt="" />
                  <img className="s-starr" src={Starr} alt="" />
                  {index === 0 || index === 2 ? (
                    <img className="s-starr" src={HalfStar} alt="" />
                  ) : index === 3 ? (
                    ""
                  ) : (
                    <img className="s-starr" src={Starr} alt="" />
                  )}
                </div>
              </div>
              <div className="info-card-mirror">
                <div className="starr-cont1">
                  <img className="s-starr1" src={Starr} alt="" />
                  <img className="s-starr1" src={Starr} alt="" />
                  <img className="s-starr1" src={Starr} alt="" />
                  <img className="s-starr1" src={Starr} alt="" />
                  {index === 0 || index === 2 ? (
                    <img className="s-starr1" src={HalfStar} alt="" />
                  ) : index === 3 ? (
                    ""
                  ) : (
                    <img className="s-starr1" src={Starr} alt="" />
                  )}
                </div>
              </div>
              <div className="layer-white-shash lws1"></div>
            </div>
          );
        })}
      </div>

      <div className="caraousel-cont">
        {rotate !== 1 && (
          <span
            className="shash-arrow"
            onClick={() => {
              if (rotate > 1) setRotate(rotate - 1);
            }}
          >
            <IoIosArrowRoundBack
              style={{ color: "#FFC537", fontSize: "2vw" }}
            />
          </span>
        )}
        <span
          className="caraousel-span"
          style={{ background: rotate === 1 && "#2D3080" }}
          onClick={() => {
            setRotate(1);
          }}
        ></span>
        <span
          className="caraousel-span"
          style={{ background: rotate === 2 && "#2D3080" }}
          onClick={() => {
            setRotate(2);
          }}
        ></span>
        <span
          className="caraousel-span"
          style={{ background: rotate === 3 && "#2D3080" }}
          onClick={() => {
            setRotate(3);
          }}
        ></span>
        <span
          className="caraousel-span"
          style={{ background: rotate === 4 && "#2D3080" }}
          onClick={() => {
            setRotate(4);
          }}
        ></span>
        <span
          className="caraousel-span"
          style={{ background: rotate === 5 && "#2D3080" }}
          onClick={() => {
            setRotate(5);
          }}
        ></span>
        <span
          className="caraousel-span"
          style={{ background: rotate === 6 && "#2D3080" }}
          onClick={() => {
            setRotate(6);
          }}
        ></span>
        {rotate !== 6 && (
          <span
            className="shash-arrow"
            onClick={() => {
              if (rotate < 6) setRotate(rotate + 1);
            }}
          >
            <IoIosArrowRoundForward
              style={{ color: "#FFC537", fontSize: "2vw" }}
            />
          </span>
        )}
      </div>
      <img className="test-bg1" src={Bg1} alt="" />
      <img className="test-bg2" src={Bg2} alt="" />
    </div>
  );
};

export default Testimonial;

{
  /* <div className={rotate === 1 ? "info-card" : "info-card rotate"} style={{transform:rotate >=2 && `translateX(${-18*(rotate-1)}vw) perspective(1000px) rotate3d(0, 1, 0, -60deg) scale(0.8)`}}>
      <div className="card-upper-div">
       <img src={Img1} alt="" />
       <h2>Devon Lane</h2>
       </div>
       <div className="card-lower-div">
        <p className='cl-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.explicabo quis!</p>
        <div className="starr-cont">
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={HalfStar} alt="" />
        </div>
       </div>
      </div>
      <div className={rotate === 2 ? "info-card" : "info-card rotate"} style={{transform:rotate !==2 ? `translateX(${-18*(rotate-1)}vw) perspective(1000px) rotate3d(0, 1, 0, -60deg) scale(0.8)` : "translateX(-18vw)"}}>
      <div className="card-upper-div">
       <img src={Img1} alt="" />
       <h2>Ronald Richards</h2>
       </div>
       <div className="card-lower-div">
        <p className='cl-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ad dolores quae explicabo quis culpa!</p>
        <div className="starr-cont">
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
        </div>
       </div>
      </div>
      <div className={rotate === 3 ? "info-card" : "info-card rotate"} style={{transform:rotate !==3 ? `translateX(${-18*(rotate-1)}vw) perspective(1000px) rotate3d(0, 1, 0, -60deg) scale(0.8)` : "translateX(-36vw)"}}>
      <div className="card-upper-div">
       <img src={Img1} alt="" />
       <h2>Marvin McKinney</h2>
       </div>
       <div className="card-lower-div">
        <p className='cl-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ad dolores quae explicabo quis culpa!</p>
        <div className="starr-cont">
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
        </div>
       </div>
      </div>
      <div className={rotate === 4 ? "info-card" : "info-card rotate"} style={{transform:rotate !==4 ? `translateX(${-18*(rotate-1)}vw) perspective(1000px) rotate3d(0, 1, 0, -60deg) scale(0.8)` : "translateX(-54vw)"}}>
      <div className="card-upper-div">
       <img src={Img1} alt="" />
       <h2>Darlene Robertson</h2>
       </div>
       <div className="card-lower-div">
        <p className='cl-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ad dolores quae explicabo quis culpa!</p>
        <div className="starr-cont">
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={HalfStar} alt="" />
        </div>
       </div>
      </div>
      <div className={rotate === 5 ? "info-card" : "info-card rotate"} style={{transform:rotate !==5 ? `translateX(${-18*(rotate-1)}vw) perspective(1000px) rotate3d(0, 1, 0, -60deg) scale(0.8)` : "translateX(-72vw)"}}>
      <div className="card-upper-div">
       <img src={Img1} alt="" />
       <h2>Brooklyn Simmons</h2>
       </div>
       <div className="card-lower-div">
        <p className='cl-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ad dolores quae explicabo quis culpa!</p>
        <div className="starr-cont">
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
        </div>
       </div>
      </div>
      <div className={rotate === 6 ? "info-card" : "info-card rotate"} style={{transform:rotate !==6 ? `translateX(${-18*(rotate-1)}vw) perspective(1000px) rotate3d(0, 1, 0, -60deg) scale(0.8)` : "translateX(-90vw)"}}>
      <div className="card-upper-div">
       <img src={Img1} alt="" />
       <h2>Brooklyn Simmons</h2>
       </div>
       <div className="card-lower-div">
        <p className='cl-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ad dolores quae explicabo quis culpa!</p>
        <div className="starr-cont">
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
            <img className='s-starr' src={Starr} alt="" />
        </div>
       </div>
      </div> */
}
