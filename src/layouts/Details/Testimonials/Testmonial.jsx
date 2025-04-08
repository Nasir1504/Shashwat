import React, { useState } from "react";
import "./testmonial.scss";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { RiDoubleQuotesL } from "react-icons/ri";

import Testimonial1 from "../../../imgs/details/details1.png";

const Testmonial = () => {
  const [itemData, setItemData] = useState(1);
  const testimonialData = [
    {
      id: 1,
      name: "Savannah Nguyen",
      review:
        "Lorem ipsum dolor sit amet consectetur. Ultricies arcu nibh nec iaculis tortor congue sed. Quis dolor consectetur blandit commodo neque diam vulputate. Nam facilisis in in velit viverra nisi magnis id.",
      media: Testimonial1,
      rating: 4,
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      review:
        "Lorem ipsum dolor sit amet consectetur. Ultricies arcu nibh nec iaculis tortor congue sed. Quis dolor consectetur blandit commodo neque diam vulputate. Nam facilisis in in velit viverra nisi magnis id.",
      media: Testimonial1,
      rating: 4,
    },
    {
      id: 3,
      name: "Savannah Nguyen",
      review:
        "Lorem ipsum dolor sit amet consectetur. Ultricies arcu nibh nec iaculis tortor congue sed. Quis dolor consectetur blandit commodo neque diam vulputate. Nam facilisis in in velit viverra nisi magnis id.",
      media: Testimonial1,
      rating: 4,
    },
    {
      id: 4,
      name: "Savannah Nguyen",
      review:
        "Lorem ipsum dolor sit amet consectetur. Ultricies arcu nibh nec iaculis tortor congue sed. Quis dolor consectetur blandit commodo neque diam vulputate. Nam facilisis in in velit viverra nisi magnis id.",
      media: Testimonial1,
      rating: 4,
    },
    {
      id: 5,
      name: "Savannah Nguyen",
      review:
        "Lorem ipsum dolor sit amet consectetur. Ultricies arcu nibh nec iaculis tortor congue sed. Quis dolor consectetur blandit commodo neque diam vulputate. Nam facilisis in in velit viverra nisi magnis id.",
      media: Testimonial1,
      rating: 4,
    },
  ];

  console.log(itemData);
  return (
    <div className="detailTestmonial">
      <div className="dtHeading">Hear from our Brilliant Students</div>
      <div className="dtBottom">
        <div className="dtbLeft">
          <div className="dtRating">
            <h3>4.8</h3>
            <span>325 reviews</span>
          </div>
          <div className="dtStars">
            <div className="dtStar">
              <span className="allStars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                (90%)
              </span>
              <div className="dtLine">
                <div className="dtLineFill" />
              </div>
            </div>
            <div className="dtStar">
              <span className="allStars">
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar />
                (5%)
              </span>
              <div className="dtLine">
                <div
                  className="dtLineFill"
                  style={{
                    width: "40%",
                  }}
                />
              </div>
            </div>
            <div className="dtStar">
              <span className="allStars">
                <FaStar />
                <FaStar />
                <CiStar />
                <CiStar />
                (3%)
              </span>
              <div className="dtLine">
                <div
                  className="dtLineFill"
                  style={{
                    width: "25%",
                  }}
                />
              </div>
            </div>
            <div className="dtStar">
              <span className="allStars">
                <FaStar />
                <CiStar />
                <CiStar />
                <CiStar />
                (2%)
              </span>
              <div className="dtLine">
                <div
                  className="dtLineFill"
                  style={{
                    width: "10%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dtbRight">
          <div
            className="dtItems"
            style={{
              transform: `translateX(${itemData * -110}%)`,
            }}
          >
            {testimonialData.map((item) => {
              return (
                <div key={item.id} className="dtItem">
                  <RiDoubleQuotesL className="upperQuote" />
                  <RiDoubleQuotesL className="bottomQuote" />

                  <p>{item.review}</p>
                  <div className="dtReview">
                    <img src={item.media} alt="" />
                    <div className="dtName">
                      <span>{item.name}</span>
                      <br />
                      <span className="reviewstar">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="dtDots">
            {testimonialData.map((item) => (
              <div
                key={item.id}
                className="dtDot"
                onClick={() => setItemData(item.id)}
                style={{
                  backgroundColor: item.id === itemData && "#2D3080",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
