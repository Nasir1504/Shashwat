import React from "react";
import { Link } from "react-router-dom";
import "./CardComp.scss";
import Star from "../../../assets/imgs/StarShaash.png";
import YT from "../../../assets/imgs/youTubeIcon.png";
import User from "../../../assets/imgs/userIcon.png";
import Chart from "../../../assets/imgs/Chart.png";

const CardComp = ({ C, Logo, bool, X, id }) => {
  return (
    <div className="card-div-cont conty1">
      <img className="card-div-img" src={C} alt="" />
      <img className="shash-logo" src={Logo} alt="" />
      <p className="shashy-courses">Courses</p>
      <p className="shashy-german" style={{ color: "#373BB4" }}>
        German Language Learning
      </p>
      <h2 className={bool ? "shash-h2" : "shash-h2 shashWhite"}>
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
      <p className="shash-p"> By Mr. Keyur Soni</p>
      <div className="course-info-div">
        <div className="course-level">
          <h1 className="course-h1 bluish">LEVEL-{X}</h1>
          <div className="shash-stars">
            <img className="s-stars" src={Star} alt="" />
            <img className="s-stars" src={Star} alt="" />
            <img className="s-stars" src={Star} alt="" />
            <img className="s-stars" src={Star} alt="" />
            <img className="s-stars" src={Star} alt="" />
          </div>
          <p className="rating">
            5.0 <span style={{ fontSize: "0.8vw" }}>(20 rating)</span>
          </p>
        </div>
        <p className="course-duration bluish">
          Course Duration-
          <span style={{ fontWeight: "600" }}>
            {id === 1 || id === 2 || id === 5 ? "60" : "75"} Days
          </span>
        </p>
        <div className="course-lectures">
          <div className="cl-info1">
            <img className="eyeCon" src={YT} alt="" />
            <p className="cl-info-p bluish">20 lectures</p>
          </div>
          <div className="cl-info1">
            <img className="eyeCon" src={User} alt="" />
            <p className="cl-info-p bluish">6-8 Students</p>
          </div>
          <div className="cl-info1">
            <img className="eyeCon" src={Chart} alt="" />
            <p className="cl-info-p bluish">Elementary</p>
          </div>
        </div>
        <Link to="/course-details">
          {" "}
          <button className="know-more-btn">Know More</button>
        </Link>
      </div>
    </div>
  );
};

export default CardComp;
