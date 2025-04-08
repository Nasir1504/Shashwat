import React from "react";
import { Link } from "react-router-dom";
import "./CardsMob.scss";
import Star from "../../../assets/imgs/StarShaash.png";
import YT from "../../../assets/imgs/youTubeIcon.png";
import User from "../../../assets/imgs/userIcon.png";
import Chart from "../../../assets/imgs/Chart.png";

const CardsMob = ({ C, Logo, bool, X, id }) => {
  return (
    <div className="card-div-cont-mb conty1-mb">
      <img className="card-div-img-mb" src={C} alt="" />
      <img className="shash-logo-mb" src={Logo} alt="" />
      <p className="shashy-courses-mb">Courses</p>
      <p className="shashy-german-mb" style={{ color: "#373BB4" }}>
        German Language Learning
      </p>
      <h2 className="shash-h2-mb shashWhite-mb">
        "German <br />{" "}
        {id === 1 || id === 2
          ? "Foundations:"
          : id === 3
          ? "Proficiency:"
          : id === 4 || id === 6
          ? "Mastery:"
          : id === 5 && "Advanced:"}{" "}
        <br />{" "}
        {id === 1 || id === 2 ? (
          <span style={{ borderBottom: !bool && "2px solid white" }}>
            {X} Beginner"
          </span>
        ) : id === 3 ? (
          <span style={{ borderBottom: !bool && "2px solid white" }}>
            {X} <br /> Intermediate{" "}
          </span>
        ) : id === 4 ? (
          <span style={{ borderBottom: !bool && "2px solid white" }}>
            {X} Upper
            <br /> Intermediate{" "}
          </span>
        ) : id === 5 ? (
          <span style={{ borderBottom: !bool && "2px solid white" }}>
            {X}
            <br /> Proficient{" "}
          </span>
        ) : (
          id === 6 && (
            <span style={{ borderBottom: !bool && "2px solid white" }}>
              {X} Advance
              <br /> Proficient{" "}
            </span>
          )
        )}
      </h2>
      <p className="shash-p-mb shashWhite-mb"> By Mr. Keyur Soni</p>
      <div className="course-info-div-mb">
        <div className="course-level-mb">
          <h1 className="course-h1-mb bluish-mb">LEVEL-{X}</h1>
          <div className="shash-stars-mb">
            <img className="s-stars-mb" src={Star} alt="" />
            <img className="s-stars-mb" src={Star} alt="" />
            <img className="s-stars-mb" src={Star} alt="" />
            <img className="s-stars-mb" src={Star} alt="" />
            <img className="s-stars-mb" src={Star} alt="" />
          </div>
          {/* <p className="rating-mb">5.0 <span style={{fontSize:"2.4vw"}}>(20 rating)</span></p> */}
        </div>
        <p className="course-duration-mb bluish-mb">
          Course Duration-
          <span style={{ fontWeight: "600" }}>
            {id === 1 || id === 2 || id === 5 ? "60" : "75"} Days
          </span>
        </p>
        <div className="course-lectures-mb">
          <div className="cl-info1-mb">
            <img className="eyeCon-mb" src={YT} alt="" />
            <p className="cl-info-p-mb bluish-mb">
              20 <br /> lectures
            </p>
          </div>
          <div className="cl-info1-mb">
            <img className="eyeCon-mb" src={User} alt="" />
            <p className="cl-info-p-mb bluish-mb">
              6-8 <br /> Students
            </p>
          </div>
          <div className="cl-info1-mb">
            <img className="eyeCon-mb" src={Chart} alt="" />
            <p className="cl-info-p-mb bluish-mb">Elementary</p>
          </div>
        </div>
        <Link to="/course-details">
          <button className="know-more-btn-mb">Know More</button>
        </Link>
      </div>
    </div>
  );
};

export default CardsMob;
