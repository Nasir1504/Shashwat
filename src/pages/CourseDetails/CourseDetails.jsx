import React, { useState, useEffect } from "react";
import "./courseDetails.scss";
import Details from "../../layouts/Details/Details";
import CardExpand from "../../layouts/CardExpand/CardExpand";
import { Footer } from "../../components/Footer/Footer";
import { FooterMob } from "../../components/Footer/FooterMob";
import QueryPage from "../../layouts/QueryPage/QuseryPage";
import GermanLang from "../../layouts/GermanLang/GermanLang";
import GermanLangMob from "../../layouts/GermanLangMob/GermanLangMob";
import CardExpandMob from "../../layouts/CardExpandMob/CardExpandMob";
import QueryPageMob from "../../layouts/QueryPageMob/QueryPageMob";
import { useLocation } from "react-router-dom";

const CourseDetails = () => {
  const mediaQuery = window.matchMedia(`(max-width: 600px)`);
  const [query, setQuery] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleResize = () => {
      console.log(mediaQuery.matches, "Hi");
      setQuery(mediaQuery.matches);
      // setViewportWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);
    // window.addEventListener('orientationchange', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      // window.removeEventListener('orientationchange', handleResize);
    };
  }, [mediaQuery]);


    const { pathname } = useLocation();
  

   useEffect(() => {
      window.scrollTo(0, 0);
      // alert()
    }, [pathname]);

  return (
    <div className="courseDetailsWrapper">
      {!query ? <GermanLang /> : <GermanLangMob />}
      <Details />
      {!query ? <CardExpand /> : <CardExpandMob />}
      {!query ? <QueryPage /> : <QueryPageMob />}
      {!query ? <Footer /> : <FooterMob />}
    </div>
  );
};

export default CourseDetails;
