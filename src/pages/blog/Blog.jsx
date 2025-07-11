import React, { useEffect, useRef } from "react";

//styles
import "./blog.scss";

//components
import BlogCard from "./blog-card/Blog-Card";
import { useLocation } from "react-router-dom";
// import gsap from "gsap";
import NavBar from "./Nav-Bar/NavBar";
// import Contact from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";
import { FooterMob } from "../../components/Footer/FooterMob";

// data
import { BLOG_DATA } from "./blogData";

//imgs
import Frame from "../../assets/imgs/blog/Frame1321315400.png";

export default function Blog({ query }) {
  const heroRef = useRef();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // alert()
  }, [pathname]);

  return (
    <div className="blog-main-container">
      <div className="blog-main-container-inner">
        <NavBar blogRef={heroRef} />
        <div className="top-part" ref={heroRef}>
          <div className="circle c1" />
          <div className="circle c2" />
          <h3>Blogs</h3>
          <img className="img-one" src={Frame} alt="" />
          <img className="img-two" src={Frame} alt="" />
        </div>
        <div className="card-container">
          {BLOG_DATA.map((item, i) => {
            return (
              <BlogCard
                key={i}
                ImgUrl={item.blogImg}
                Heading={item.title}
                SubHeading={item.subtitle[0]}
                ID={i}
              />
            );
          })}
        </div>
      </div>
      {/* <Contact /> */}
      {!query ? <Footer /> : <FooterMob />}
    </div>
  );
}
