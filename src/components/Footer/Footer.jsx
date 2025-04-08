import React from "react";
import "./Footer.scss";
import imgLogo from "../img/Logo.png";
import fb from "../img/FB.png";
import tw from "../img/Twitter.png";
import ig from "../img/Insta.png";
import call from "../img/Icon.png";
import mail from "../img/mail.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="f-parent">
        <div className="f-content">
          <div className="f-img-div">
            <img className="f-logo" src={imgLogo} alt="" />
          </div>

          <div className="f-logo-txt">
            <p>
              Lorem ipsum dolor sit amet consectetur. Elit malesuada fusce quis
              ullamcorper sed tincidunt. Ut morbi senectus praesent consequat.
            </p>
          </div>
        </div>
        <div className="f-content">
          <div className="f-div-2-txt">
            <p>Follow Us</p>
          </div>
          <div className="f-socials-div">
            <div className="f-socials-icon">
              <img className="f-ico" src={fb} alt="" />
            </div>
            <div className="f-socials-icon">
              <img className="f-ico" src={tw} alt="" />
            </div>
            <div className="f-socials-icon">
              <img className="f-ico" src={ig} alt="" />
            </div>
          </div>
        </div>
        <div className="f-content">
          <div className="f-div-2-txt">
            <p>Quick Links</p>
          </div>
          <div className="f-div-links">
            <p className="f-link hover:underline" style={{}}>
              About
            </p>
            <p className="f-link hover:underline" style={{}}>
              Services
            </p>
            <p className="f-link hover:underline" style={{}}>
              Courses
            </p>
            <p className="f-link hover:underline" style={{}}>
              Terms of Service
            </p>
          </div>
        </div>
        <div className="f-content">
          <div className="f-div-2-txt">
            <p style={{ marginRight: "17%" }}>Support</p>
          </div>
          <div className="f-div-links">
            <p className="f-link hover:underline" style={{}}>
              Feedback
            </p>
            <p className="f-link hover:underline" style={{}}>
              Refund Policies
            </p>
            <p className="f-link hover:underline" style={{}}>
              FAQ
            </p>
            <p className="f-link hover:underline" style={{}}>
              Privacy Policies
            </p>
          </div>
        </div>
        <div className="f-content">
          <div className="f-div-2-txt">
            <p style={{ marginRight: "34%" }}>Contact</p>
          </div>
          <div
            className="f-div-links"
            style={{
              marginLeft: "10%",
              width: "80%",
              height: "25%",
              top: "21%",
            }}
          >
            <p className="f-link" style={{}}>
              +91-8541265471
            </p>
            <p className="f-link" style={{}}>
              support@shashwat.com
            </p>
          </div>
          <div className="f-contact-div">
            <div className="f-contact-icon">
              <img className="f-c-ico" src={call} alt="" />
            </div>
            <div className="f-contact-icon">
              <img className="f-c-ico" src={mail} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
