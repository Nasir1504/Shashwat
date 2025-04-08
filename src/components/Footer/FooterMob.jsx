import React from "react";
import "./FooterMob.scss";

// import imgLogo from "../img/Logo.png";
import imgLogo from "../img/Logo2.png";
import fb from "../img/FB.png";
import tw from "../img/Twitter.png";
import ig from "../img/Insta.png";
import call from "../img/Icon.png";
import mail from "../img/mail.png";

export const FooterMob = () => {
  return (
    <div className="footer-mob">
      <div className="f-parent-mob">
        {/* ----------------------------------------------------------------------- */}
        <div className="f-content-mob" style={{ height: "30%" }}>
          <div className="f-img-div-mob">
            <img className="f-logo-mob" src={imgLogo} alt="" />
          </div>

          <div className="f-logo-txt-mob">
            <p>
              Lorem ipsum dolor sit amet consectetur. Elit malesuada fusce quis
              ullamcorper sed tincidunt. Ut morbi senectus praesent consequat.
            </p>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------- */}
        <div className="f-content-mob" style={{ height: "15%" }}>
          <div className="f-div-2-txt-mob" style={{ top: "10%" }}>
            <p>Follow Us</p>
          </div>
          <div className="f-socials-div-mob">
            <div className="f-socials-icon-mob">
              <img className="f-ico-mob" src={fb} alt="" />
            </div>
            <div className="f-socials-icon-mob">
              <img className="f-ico-mob" src={tw} alt="" />
            </div>
            <div className="f-socials-icon-mob">
              <img className="f-ico-mob" src={ig} alt="" />
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------------------------------- */}
        <div
          className="f-content-mob"
          style={{
            height: "38%",
            // marginRight: "4%"
          }}
        >
          <div className="f-div-2-txt-mob" style={{ width: "18%" }}>
            <p>Quick Links</p>
          </div>
          <div className="f-div-links-mob">
            <p className="f-link-mob" style={{}}>
              About
            </p>
            <p className="f-link-mob" style={{}}>
              Services
            </p>
            <p className="f-link-mob" style={{}}>
              Courses
            </p>
            <p className="f-link-mob" style={{}}>
              Terms of Service
            </p>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------- */}
        <div
          className="f-content-mob"
          style={{
            position: "absolute",
            top: "46.5%",
            right: "5%",
            height: "38%",
            width: "50%",
          }}
        >
          <div className="f-div-2-txt-mob" style={{ width: "28%" }}>
            <p style={{ marginLeft: "0%" }}>Support</p>
          </div>
          <div className="f-div-links-mob">
            <p className="f-link-mob" style={{}}>
              Feedback
            </p>
            <p className="f-link-mob" style={{}}>
              Refund Policies
            </p>
            <p className="f-link-mob" style={{}}>
              FAQ
            </p>
            <p className="f-link-mob" style={{}}>
              Privacy Policies
            </p>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------- */}
        <div className="f-content-mob" style={{ height: "15%" }}>
          <div className="f-div-2-txt-mob">
            <p style={{ marginRight: "15%" }}>Contact</p>
          </div>
          <div
            className="f-div-links-mob"
            style={{
              marginLeft: "10%",
              width: "80%",
              height: "65%",
              bottom: "0%",
              left: "-3%",
            }}
          >
            <p className="f-link-mob" style={{ height: "25%" }}>
              +91-8541265471
            </p>
            <p className="f-link-mob" style={{}}>
              support@shashwat.com
            </p>
          </div>
          <div className="f-contact-div-mob">
            <div className="f-contact-icon-mob">
              <img className="f-c-ico-mob" src={call} alt="" />
            </div>
            <div className="f-contact-icon-mob">
              <img className="f-c-ico-mob" src={mail} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
