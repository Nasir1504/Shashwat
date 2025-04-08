import React, { useState } from "react";
import "./details.scss";
import { MdPersonAddAlt1 } from "react-icons/md";
import Details1 from "../../imgs/details/details1.png";
import Details2 from "../../imgs/details/details2.png";
import Details3 from "../../imgs/details/details3.png";
import About from "./About/About";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import Benefits from "./Benefits/Benefits";
import Testmonial from "./Testimonials/Testmonial";
import Content from "./Content/Content";

const Details = () => {
  const [toggleDetails, setToggleDetails] = useState(1);

  const navItems = [
    {
      id: 1,
      title: "About",
    },
    {
      id: 2,
      title: "Key Features",
    },
    {
      id: 3,
      title: "Content",
    },
    {
      id: 4,
      title: "Benefits",
    },
    {
      id: 5,
      title: "Testimonials",
    },
  ];

  return (
    <div className="detailLayout">
      <div className="detailLeft">
        <ul className="detailNav">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={item.id === toggleDetails ? "active" : ""}
              onClick={() => setToggleDetails(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <hr />
        {toggleDetails === 1 ? (
          <About />
        ) : toggleDetails === 2 ? (
          <KeyFeatures />
        ) : toggleDetails === 3 ? (
          <Content />
        ) : toggleDetails === 4 ? (
          <Benefits />
        ) : toggleDetails === 5 ? (
          <Testmonial />
        ) : (
          ""
        )}
      </div>
      <div className="detailRight">
        <div className="detailContact">
          <div className="dcHeading">
            <span className="spanOne">G</span>
            <span className="spanTwo">
              eared up for the <br />{" "}
              <span className="spanThree">erman Course</span>{" "}
            </span>
          </div>
          <div className="dcInputs">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Mail ID" />
            <input type="number" placeholder="Contact Number" />
          </div>
          <div className="dcEnrollBtn">
            <div className="dcJoin">
              <img src={Details1} alt="" className="dcJoinImg1" />
              <img src={Details2} alt="" className="dcJoinImg2" />
              <img src={Details3} alt="" className="dcJoinImg3" />

              <div className="dcText">
                Join with <span className="dcJoinNumbers">100+</span> Students
              </div>
            </div>
            <div className="dcBtn">
              <MdPersonAddAlt1 />

              <button>Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
