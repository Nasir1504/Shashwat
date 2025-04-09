import React, { useRef } from "react";
import "./contact.scss";
import CTop from "../../imgs/contact/cTop.png";
import CbLeftBg from "../../imgs/contact/clBg.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
  const contactRef = useRef();

  useGSAP(
    () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 30%",
          end: "bottom bottom",
          // scrub: true,
        },
      });
      tl2.to(".contactHeading, .contactSubheading", { y: 0, opacity: 1 });
      tl2.to(".cbLeft, .cbRight", { x: 0, opacity: 1 });
    },
    { scope: contactRef },
  );

  return (
    <div id="contact" className="contactWrapper" ref={contactRef}>
      <div className="contactTopBg">
        <img src={CTop} alt="" />
      </div>
      <div className="contactTop">
        <div className="contactHeading">
          <h1>Say</h1>
          {/* eslint-disable-next-line */}
          <h1 className="cLine"></h1>
        </div>
        <div className="contactSubheading">
          We are available to assist you and respond to any queries you may
          have. We anticipate hearing from you. Please don't hesitate to contact
          us if you need anything.
        </div>
      </div>
      <div className="contactBottom">
        <div className="cbLeft">
          <img src={CbLeftBg} alt="" className="cblBg" />

          <div className="cblText">
            <h3> What's puzzling</h3>
            <div className="cblText2">YOU?</div>
          </div>
        </div>
        <div className="cbRight">
          <form className="cbInp">
            <input type="text" placeholder="Full Name" />
            <div className="contactMail">
              <input type="number" placeholder="Contact Number" />
              <input type="email" placeholder="Mail ID" />
            </div>
            <textarea
              name="message"
              id=""
              rows={4}
              placeholder="Message"
            ></textarea>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
