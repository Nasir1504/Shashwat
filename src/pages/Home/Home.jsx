import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import gradientBg from "../../assets/gradient-bg.png";
import heroAvatar from "../../assets/hero-avatar.png";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Scards from "../../components/Scards/Scards";
import { ReactLenis } from "lenis/react";
import Testimonial from "../../components/Testimonial/Testimonial";
import { Service } from "../../components/Service/Service";
import { Footer } from "../../components/Footer/Footer";
import { FooterMob } from "../../components/Footer/FooterMob";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Contact from "../../components/Contact/Contact";
import ScardsMob from "../../components/ScardsMob/ScardsMob";
import { ServiceMob } from "../../components/Service/ServiceMob";
import TestiMob from "../../components/TestiMob/TestiMob";

function App({ query }) {
  const homeRef = useRef();
  const heroRef = useRef();
  const lenisRef = useRef();
  // let mediaQuery = window.matchMedia(`(max-width: 630px)`);
  // const [query, setQuery] = useState(mediaQuery.matches);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setQuery(mediaQuery.matches);
  //   };

  //   // Add resize event listener
  //   window.addEventListener("resize", handleResize);

  //   // Clean up the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  //   // eslint-disable-next-line
  // }, [mediaQuery]);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <ReactLenis ref={lenisRef} autoRaf={false} root>
      <div ref={homeRef} className="App">
        <Navbar homeRef={homeRef} heroRef={heroRef} />
        {/* {!query ? <Footer /> : query && <FooterMob />} */}
        <section
          id="home"
          ref={heroRef}
          className="hero-section relative w-full h-screen md:h-[92vh] md:px-16 bg-[#2d3080] rounded-none md:rounded-[40px] z-[1] flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <div className="gradient-bg absolute top-0 left-0 h-[95vh] w-full rounded-xl z-[0]">
            <img
              src={gradientBg}
              alt="gradient-bg"
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
          <div className="w-full md:w-1/2 h-fit md:h-full flex flex-col justify-center items-center md:items-start gap-4 md:gap-8 z-[1]">
            {query ? (
              <h1 className="text-3xl font-semibold text-white leading-tight text-center">
                A <span className="text-[#FFC537]">Unique</span> approach to{" "}
                <br />
                learning German Language <br /> Online
              </h1>
            ) : (
              <h1 className="text-6xl font-semibold text-white leading-tight text-left">
                A <span className="text-[#FFC537]">Unique</span> approach to{" "}
                <br />
                learning German
                <br /> Language Online
              </h1>
            )}
            <p className="text-sm md:text-xl text-center md:text-left font-light tracking-wide">
              Learn at Your Own pace with lifetime access <br /> on mobile and
              desktop
            </p>
            <div className="hidden md:block contact-bar relative text-sm md:text-lg mt-8 md:mt-0">
              <input
                type="text"
                placeholder="Enter Your Email/Contact Number"
                className="px-4 md:px-7 py-4 md:py-6 w-[300px] md:w-[450px] rounded-full text-black"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-[#FFC537] text-black font-semibold w-fit h-fit rounded-full cursor-pointer">
                Get Started
              </div>
            </div>
            <div className="hidden md:flex w-full justify-start items-start -ml-6 md:-ml-0 md:items-center gap-2 md:gap-6">
              <div className="tag-one flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="10" fill="#FFB500"></circle>
                  <path
                    fill="#2D3080"
                    d="M15.132 5.213a1.686 1.686 0 00-2.297.658l-3.136 5.653-1.795-1.798a1.689 1.689 0 00-2.767 1.844c.089.206.217.393.379.55l3.378 3.383c.32.321.75.497 1.194.497l.234-.017a1.687 1.687 0 001.242-.854l4.223-7.614a1.694 1.694 0 00-.655-2.302z"
                  ></path>
                </svg>

                <p className="text-sm md:text-lg whitespace-normal md:whitespace-nowrap font-light text-white">
                  Experienced Mentors
                </p>
              </div>
              <div className="tag-one flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="10" fill="#FFB500"></circle>
                  <path
                    fill="#2D3080"
                    d="M15.132 5.213a1.686 1.686 0 00-2.297.658l-3.136 5.653-1.795-1.798a1.689 1.689 0 00-2.767 1.844c.089.206.217.393.379.55l3.378 3.383c.32.321.75.497 1.194.497l.234-.017a1.687 1.687 0 001.242-.854l4.223-7.614a1.694 1.694 0 00-.655-2.302z"
                  ></path>
                </svg>

                <p className="text-sm md:text-lg whitespace-normal md:whitespace-nowrap font-light text-white">
                  Affordable Price
                </p>
              </div>
              <div className="tag-one flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="10" fill="#FFB500"></circle>
                  <path
                    fill="#2D3080"
                    d="M15.132 5.213a1.686 1.686 0 00-2.297.658l-3.136 5.653-1.795-1.798a1.689 1.689 0 00-2.767 1.844c.089.206.217.393.379.55l3.378 3.383c.32.321.75.497 1.194.497l.234-.017a1.687 1.687 0 001.242-.854l4.223-7.614a1.694 1.694 0 00-.655-2.302z"
                  ></path>
                </svg>

                <p className="text-sm md:text-lg whitespace-normal md:whitespace-nowrap font-light text-white">
                  Flexible Timings
                </p>
              </div>
            </div>
          </div>
          <div className="hero-graphic w-full md:w-1/2 h-fit md:h-full pr-14 flex flex-col justify-center items-center z-[1] overflow-hidden">
            <img
              src={heroAvatar}
              alt="hero-avatar ds"
              className="w-full h-full object-contain"
            />
          </div>
          {query && (
            <>
              <div className="relative flex justify-center items-center gap-2 mt-8">
                <div className="contact-bar text-sm">
                  <input
                    type="text"
                    placeholder="Enter Your Email/Contact Number"
                    className="px-4 py-4 w-[250px] rounded-full text-black"
                  />
                </div>
                <button className="px-4 py-4 text-sm bg-[#FFC537] text-black font-semibold w-fit h-fit rounded-full cursor-pointer whitespace-nowrap">
                  Get Started
                </button>
              </div>
              <div className="flex w-full ml-6 justify-center items-center gap-2">
                <div className="tag-one flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="10" fill="#FFB500"></circle>
                    <path
                      fill="#2D3080"
                      d="M15.132 5.213a1.686 1.686 0 00-2.297.658l-3.136 5.653-1.795-1.798a1.689 1.689 0 00-2.767 1.844c.089.206.217.393.379.55l3.378 3.383c.32.321.75.497 1.194.497l.234-.017a1.687 1.687 0 001.242-.854l4.223-7.614a1.694 1.694 0 00-.655-2.302z"
                    ></path>
                  </svg>

                  <p className="text-sm md:text-lg font-light text-white">
                    Experienced Mentors
                  </p>
                </div>
                <div className="tag-one flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="10" fill="#FFB500"></circle>
                    <path
                      fill="#2D3080"
                      d="M15.132 5.213a1.686 1.686 0 00-2.297.658l-3.136 5.653-1.795-1.798a1.689 1.689 0 00-2.767 1.844c.089.206.217.393.379.55l3.378 3.383c.32.321.75.497 1.194.497l.234-.017a1.687 1.687 0 001.242-.854l4.223-7.614a1.694 1.694 0 00-.655-2.302z"
                    ></path>
                  </svg>

                  <p className="text-sm md:text-lg font-light text-white">
                    Affordable Price
                  </p>
                </div>
                <div className="tag-one flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="10" fill="#FFB500"></circle>
                    <path
                      fill="#2D3080"
                      d="M15.132 5.213a1.686 1.686 0 00-2.297.658l-3.136 5.653-1.795-1.798a1.689 1.689 0 00-2.767 1.844c.089.206.217.393.379.55l3.378 3.383c.32.321.75.497 1.194.497l.234-.017a1.687 1.687 0 001.242-.854l4.223-7.614a1.694 1.694 0 00-.655-2.302z"
                    ></path>
                  </svg>

                  <p className="text-sm md:text-lg font-light text-white">
                    Flexible Timings
                  </p>
                </div>
              </div>
            </>
          )}
        </section>

        {/* ----------------Service component---------------------- */}
        {!query ? <Service /> : query && <ServiceMob />}
        {/* <Service /> */}
        <section
          className="w-full h-[100vh] "
          style={{
            display: query && "none",
          }}
        ></section>
        {!query ? <Scards homeRef={homeRef} /> : <ScardsMob />}
        <section
          className="w-full h-[300vh] "
          style={{
            display: query && "none",
          }}
        ></section>
        {/* <section className="w-full h-screen bg-blue-500"></section> */}
        {/* -------------- Why choose Us -------- */}

        <WhyChooseUs />
        <section className="w-full h-[300vh] "></section>

        {!query ? <Testimonial homeRef={homeRef} /> : <TestiMob />}
        <Contact />

        {/* -------------Footer------------ */}

        {!query ? <Footer /> : query && <FooterMob />}
      </div>
    </ReactLenis>
  );
}

export default App;
