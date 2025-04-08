import React, { useState, useEffect, useRef } from "react";
import logo from "../../../assets/logo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';


const NavBar = ({ LangLearnRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate(); // Hook to navigate

  const handleClick = () => {
    navigate('/'); // Navigate to the "/" route
    window.scrollTo(0, 0)
  };


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: LangLearnRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(navRef.current, {
        backgroundColor: "#2d3080",
        duration: 0.5,
        ease: "none",
      });
    }, LangLearnRef);

    return () => ctx.revert();
  }, [LangLearnRef]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        ref={navRef}
        className="navbar fixed top-2 left-1/2 -translate-x-1/2 w-[96%] h-[70px] md:h-[80px] px-8 py-4 flex justify-between items-center rounded-3xl z-50"
      >
        <div className="logo-container w-16 h-16 md:w-20 md:h-20">
          <img src={logo} alt="logo" className="w-full h-full object-contain cursor-pointer" onClick={handleClick} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center gap-8 text-[#D3D3D3] ml-auto pr-8">
          {/* <a
            href="#home"
            className="text-lg hover:underline ease-in duration-150 transition-all"
          >
            Home
          </a> */}
          {/* <a
            href="#services"
            className="text-lg hover:underline ease-in duration-150 transition-all"
          >
            Services
          </a> */}
          {/* <a
            href="#courses"
            className="text-lg hover:underline ease-in duration-150 transition-all"
          >
            Courses
          </a> */}
          {/* <a
            href="#whyus"
            className="text-lg hover:underline ease-in duration-150 transition-all"
          >
            Why Us
          </a> */}
          <a
            href="#testimonials"
            className="text-lg hover:underline ease-in duration-150 transition-all"
          >
            Testimonials
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <CgMenuLeftAlt className="w-7 h-7 text-[#D3D3D3]" />
        </button>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:block contact-button w-fit h-fit px-4 py-3 bg-white text-[#2D3080] shadow-md shadow-slate-800 rounded-full text-lg font-semibold"
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-gradient-mobile shadow-lg shadow-black rounded-r-[38px] text-white p-8 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-[60]`}
      >
        <div className="absolute top-4 left-4 text-3xl text-white">Menu</div>
        <div className="absolute w-[90%] top-16 left-4 bg-white h-[1px]" />
        <button
          className="absolute top-4 right-4 text-4xl text-white z-[1] cursor-pointer"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <div className="flex flex-col gap-8 h-full mt-16">
          <div className="flex items-center gap-4 h-fit w-fit">
            <div className="relative flex items-center w-fit h-fit py-3 px-5 bg-[rgba(255,255,255,0.15)] hover:border-[1px] border-white transition-all duration-200 ease-in rounded-full">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"
                  fill="white"
                />
              </svg>
            </div>
            <a href="#home" className="text-xl" onClick={toggleMenu}>
              Home
            </a>
          </div>
          <div className="flex items-center gap-4 h-fit w-fit">
            <div className="relative flex items-center w-fit h-fit py-3 px-5 bg-[rgba(255,255,255,0.15)] hover:border-[1px] border-white transition-all duration-200 ease-in rounded-full">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_869_25319)">
                  <path
                    d="M5 15V17C5 18.054 5.95 19 7 19H10V21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.885L15.753 16H18.245L17 12.885ZM3 3H9C9.57904 3.00021 10.1456 3.16798 10.6314 3.48307C11.1172 3.79817 11.5015 4.24711 11.7378 4.77574C11.9741 5.30437 12.0523 5.89009 11.9631 6.46221C11.8739 7.03433 11.621 7.56841 11.235 8C11.621 8.43159 11.8739 8.96567 11.9631 9.53779C12.0523 10.1099 11.9741 10.6956 11.7378 11.2243C11.5015 11.7529 11.1172 12.2018 10.6314 12.5169C10.1456 12.832 9.57904 12.9998 9 13H3V3ZM9 9H5V11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10C10 9.73478 9.89464 9.48043 9.70711 9.29289C9.51957 9.10536 9.26522 9 9 9ZM17 3C18.0609 3 19.0783 3.42143 19.8284 4.17157C20.5786 4.92172 21 5.93913 21 7V9H19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H14V3H17ZM9 5H5V7H9C9.26522 7 9.51957 6.89464 9.70711 6.70711C9.89464 6.51957 10 6.26522 10 6C10 5.73478 9.89464 5.48043 9.70711 5.29289C9.51957 5.10536 9.26522 5 9 5Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_869_25319">
                    <rect width={24} height={24} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <a href="#services-mob" className="text-xl" onClick={toggleMenu}>
              Services
            </a>
          </div>
          <div className="flex items-center gap-4 h-fit w-fit">
            <div className="relative flex items-center w-fit h-fit py-3 px-5 bg-[rgba(255,255,255,0.15)] hover:border-[1px] border-white transition-all duration-200 ease-in rounded-full">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04688 7.54688H2.25C1.86169 7.54688 1.54688 7.86169 1.54688 8.25C1.54688 8.63831 1.86169 8.95312 2.25 8.95312H3.04688V7.54688Z"
                  fill="white"
                />
                <path
                  d="M3.04688 18.7969H2.25C1.86169 18.7969 1.54688 19.1117 1.54688 19.5C1.54688 19.8883 1.86169 20.2031 2.25 20.2031H3.04688V18.7969Z"
                  fill="white"
                />
                <path
                  d="M3.04688 15.0469H2.25C1.86169 15.0469 1.54688 15.3617 1.54688 15.75C1.54688 16.1383 1.86169 16.4531 2.25 16.4531H3.04688V15.0469Z"
                  fill="white"
                />
                <path
                  d="M3.04688 11.2969H2.25C1.86169 11.2969 1.54688 11.6117 1.54688 12C1.54688 12.3883 1.86169 12.7031 2.25 12.7031H3.04688V11.2969Z"
                  fill="white"
                />
                <path
                  d="M3.04688 3.79688H2.25C1.86169 3.79688 1.54688 4.11169 1.54688 4.5C1.54688 4.88831 1.86169 5.20312 2.25 5.20312H3.04688V3.79688Z"
                  fill="white"
                />
                <path
                  d="M7.54688 0H5.15625C3.99314 0 3.04688 0.946266 3.04688 2.10938V3.79688H5.25C5.63831 3.79688 5.95312 4.11169 5.95312 4.5C5.95312 4.88831 5.63831 5.20312 5.25 5.20312C4.61006 5.20312 3.73547 5.20312 3.04688 5.20312V7.54688H5.25C5.63831 7.54688 5.95312 7.86169 5.95312 8.25C5.95312 8.63831 5.63831 8.95312 5.25 8.95312C4.10822 8.95312 4.77562 8.95312 3.04688 8.95312V11.2969H5.25C5.63831 11.2969 5.95312 11.6117 5.95312 12C5.95312 12.3883 5.63831 12.7031 5.25 12.7031C4.61006 12.7031 3.73547 12.7031 3.04688 12.7031V15.0469H5.25C5.63831 15.0469 5.95312 15.3617 5.95312 15.75C5.95312 16.1383 5.63831 16.4531 5.25 16.4531C4.10822 16.4531 4.77562 16.4531 3.04688 16.4531V18.7969H5.25C5.63831 18.7969 5.95312 19.1117 5.95312 19.5C5.95312 19.8883 5.63831 20.2031 5.25 20.2031C4.61006 20.2031 3.73547 20.2031 3.04688 20.2031V21.8906C3.04688 23.0537 3.99314 24 5.15625 24H7.54688V0Z"
                  fill="white"
                />
                <path
                  d="M13.4062 5.20312H16.5938V6.79688H13.4062V5.20312Z"
                  fill="white"
                />
                <path
                  d="M20.3438 0H8.95312V24H20.3438C21.5069 24 22.4531 23.0537 22.4531 21.8906V2.10938C22.4531 0.946266 21.5069 0 20.3438 0ZM18 7.5C18 7.88831 17.6852 8.20312 17.2969 8.20312H12.7031C12.3148 8.20312 12 7.88831 12 7.5V4.5C12 4.11169 12.3148 3.79688 12.7031 3.79688H17.2969C17.6852 3.79688 18 4.11169 18 4.5V7.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <a href="#courses-mob" className="text-xl" onClick={toggleMenu}>
              Courses
            </a>
          </div>
          <div className="flex items-center gap-4 h-fit w-fit">
            <div className="relative flex items-center w-fit h-fit py-3 px-5 bg-[rgba(255,255,255,0.15)] hover:border-[1px] border-white transition-all duration-200 ease-in rounded-full">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_869_25342)">
                  <path
                    d="M16.3771 21.0826C16.0973 20.7155 16.072 20.2051 16.3148 19.8127C17.1721 18.4253 17.6249 16.8259 17.6249 15.1876C17.6249 14.8107 17.601 14.4371 17.5542 14.0692H11.1178C9.82597 14.0692 9.09242 12.5884 9.87519 11.5605L10.943 10.1594C10.2989 9.02922 9.95112 7.75333 9.9319 6.44599C4.6468 5.77057 0.0329843 9.94052 0.000171754 15.1309C-0.0143595 17.4704 0.893609 19.6805 2.55669 21.3544C4.25169 23.0606 6.51055 24 8.91706 24H17.6737C18.0538 24 18.269 23.5654 18.0388 23.2631L16.3771 21.0826ZM5.60258 9.01052H8.12581C8.51394 9.01052 8.82894 9.32552 8.82894 9.71364C8.82894 10.1022 8.51394 10.4168 8.12581 10.4168H5.60258C5.21398 10.4168 4.89945 10.1022 4.89945 9.71364C4.89945 9.32552 5.21398 9.01052 5.60258 9.01052ZM3.78716 12.663H7.22305C7.61164 12.663 7.92617 12.978 7.92617 13.3661C7.92617 13.7547 7.61164 14.0692 7.22305 14.0692H3.78716C3.39856 14.0692 3.08403 13.7547 3.08403 13.3661C3.08403 12.978 3.39856 12.663 3.78716 12.663ZM11.7474 21.3741H5.87023C5.48164 21.3741 5.16711 21.0596 5.16711 20.671C5.16711 20.2829 5.48164 19.9679 5.87023 19.9679H11.7473C12.1355 19.9679 12.4505 20.2829 12.4505 20.671C12.4505 21.0596 12.1355 21.3741 11.7474 21.3741ZM13.83 17.7217H3.78716C3.39856 17.7217 3.08403 17.4071 3.08403 17.0185C3.08403 16.6304 3.39856 16.3154 3.78716 16.3154H13.83C14.2186 16.3154 14.5331 16.6304 14.5331 17.0185C14.5331 17.4071 14.2186 17.7217 13.83 17.7217Z"
                    fill="white"
                  />
                  <path
                    d="M18.0139 4.91499L17.623 4.1228L17.232 4.91452C17.0502 5.28343 16.6986 5.5389 16.2917 5.59796L15.418 5.72499L16.0503 6.3414C16.3447 6.62827 16.4787 7.04124 16.4094 7.44671L16.2598 8.31718L17.0417 7.90608C17.4055 7.71483 17.84 7.71483 18.2042 7.90608L18.9856 8.31718L18.8366 7.44671C18.7667 7.04124 18.9012 6.62827 19.1956 6.3414L19.828 5.72499L18.9537 5.59796C18.5473 5.5389 18.1958 5.28343 18.0139 4.91499Z"
                    fill="white"
                  />
                  <path
                    d="M17.6689 0.000244141C12.8052 0.000244141 9.64401 5.39499 12.2783 9.65448C12.4972 10.0089 12.4747 10.4692 12.2221 10.8006L10.994 12.4126C10.9143 12.5176 10.9879 12.6629 11.1177 12.6629C18.237 12.6629 17.9731 12.6929 18.6917 12.5701C21.6443 12.0653 24.0195 9.49421 23.9998 6.29082C23.9777 2.84223 21.1353 0.000244141 17.6689 0.000244141ZM21.0382 6.50879L20.2362 7.29067L20.4256 8.3941C20.6006 9.41279 19.5292 10.1925 18.6139 9.71031L17.6229 9.18953L16.6315 9.71031C15.7156 10.1916 14.6457 9.41364 14.8198 8.3941L15.0092 7.29067L14.2076 6.50879C13.468 5.78935 13.8737 4.52842 14.8995 4.37926L16.0076 4.21801L16.5031 3.21395C16.9608 2.28634 18.2845 2.28615 18.7423 3.21395L19.2382 4.21801L20.3459 4.37926C21.3714 4.52842 21.7777 5.78851 21.0382 6.50879Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_869_25342">
                    <rect width={24} height={24} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <a href="#whyus" className="text-xl" onClick={toggleMenu}>
              Why us?
            </a>
          </div>
          <div className="flex items-center gap-4 h-fit w-fit">
            <div className="relative flex items-center w-fit h-fit py-3 px-5 bg-[rgba(255,255,255,0.15)] hover:border-[1px] border-white transition-all duration-200 ease-in rounded-full">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7061 0H6.08316C4.03051 0 2.36035 1.66969 2.36035 3.72234V9.12703C2.36035 11.1797 4.03051 12.8494 6.08316 12.8494H8.74238V7.12406C8.74238 5.86936 9.73477 4.83389 10.9741 4.80516C12.2674 4.77356 13.3197 5.81597 13.3197 7.09172V9.31594C13.5916 9.20156 13.8897 9.13875 14.2024 9.13875C15.2918 9.13875 16.2058 9.90328 16.435 10.9242C17.2006 10.5789 18.1098 10.6795 18.7877 11.213C19.1918 10.6177 19.4285 9.89906 19.4285 9.12703V3.72234C19.4285 1.66969 17.7588 0 15.7061 0ZM6.80879 7.84406H5.42645C5.03832 7.84406 4.72332 7.52906 4.72332 7.14094C4.72332 6.75281 5.03832 6.43781 5.42645 6.43781H6.80879C7.19691 6.43781 7.51191 6.75281 7.51191 7.14094C7.51191 7.52906 7.19691 7.84406 6.80879 7.84406ZM8.56566 4.74703C8.29145 5.02172 7.84613 5.02172 7.57145 4.74703L6.5941 3.76969C6.31941 3.495 6.31941 3.04969 6.5941 2.77547C6.86879 2.50078 7.3141 2.50078 7.58832 2.77547L8.56566 3.75234C8.84035 4.02703 8.84035 4.47234 8.56566 4.74703ZM12.138 2.84344C12.138 3.23203 11.8235 3.54656 11.4349 3.54656C11.0468 3.54656 10.7318 3.23203 10.7318 2.84344V1.46156C10.7318 1.07297 11.0468 0.758438 11.4349 0.758438C11.8235 0.758438 12.138 1.07297 12.138 1.46156V2.84344ZM15.7943 3.76969L14.8169 4.74703C14.5427 5.02172 14.0974 5.02172 13.8227 4.74703C13.548 4.47234 13.548 4.02703 13.8227 3.75234L14.8 2.77547C15.0747 2.50078 15.5196 2.50078 15.7943 2.77547C16.0689 3.04969 16.0689 3.495 15.7943 3.76969Z"
                  fill="white"
                />
                <path
                  d="M19.2548 24H10.2248C9.62961 24 9.09913 23.6238 8.90193 23.0622C8.33638 21.4517 8.01791 20.022 7.95294 18.881C7.85718 17.183 8.80532 15.7626 10.1486 15.1736V7.12385C10.1486 6.6312 10.5343 6.22198 11.0092 6.21073C11.5086 6.19835 11.9134 6.60012 11.9134 7.09151V15.582C11.9134 15.9608 12.2047 16.2866 12.5832 16.304C12.9869 16.3226 13.3197 16.0013 13.3197 15.6016V11.4222C13.322 10.938 13.7167 10.5447 14.2023 10.5447C14.6826 10.5447 15.0845 10.9319 15.0845 11.426C15.0845 11.426 15.085 11.8316 15.085 15.5814C15.085 15.9597 15.3756 16.2859 15.7536 16.3039C16.1573 16.3232 16.4912 16.0016 16.4912 15.6016V13.0085C16.4922 12.5233 16.8873 12.1291 17.3734 12.1291C17.8646 12.1291 18.2561 12.5272 18.2561 13.0099V15.6016C18.2561 15.9902 18.5711 16.3047 18.9592 16.3047C19.3478 16.3047 19.6623 15.9902 19.6623 15.6016C19.6623 15.6011 19.6646 15.2671 19.6647 14.6013C19.6647 14.0671 20.0878 13.6154 20.6219 13.6104C21.1393 13.6055 21.5681 14.0085 21.5959 14.5244L21.624 15.0476C21.7539 19.5263 21.0736 21.9677 20.5351 23.1693C20.3087 23.6743 19.8082 24 19.2548 24Z"
                  fill="white"
                />
              </svg>
            </div>
            <a
              href="#testimonials-mob"
              className="text-xl"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
          </div>
          <div className="flex items-center gap-4 h-fit w-fit">
            <div className="relative flex items-center w-fit h-fit py-3 px-5 bg-[rgba(255,255,255,0.15)] hover:border-[1px] border-white transition-all duration-200 ease-in rounded-full">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0499 5C16.0267 5.19057 16.9243 5.66826 17.628 6.37194C18.3317 7.07561 18.8094 7.97327 18.9999 8.95M15.0499 1C17.0792 1.22544 18.9715 2.13417 20.4162 3.57701C21.8608 5.01984 22.7719 6.91101 22.9999 8.94M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4742 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3147 6.72527 15.2662 5.18993 12.85C3.49991 10.2412 2.44818 7.27099 2.11993 4.18C2.09494 3.90347 2.12781 3.62476 2.21643 3.36162C2.30506 3.09849 2.4475 2.85669 2.6347 2.65162C2.82189 2.44655 3.04974 2.28271 3.30372 2.17052C3.55771 2.05833 3.83227 2.00026 4.10993 2H7.10993C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10993 3.72C9.23656 4.68007 9.47138 5.62273 9.80993 6.53C9.94448 6.88792 9.9736 7.27691 9.89384 7.65088C9.81408 8.02485 9.6288 8.36811 9.35993 8.64L8.08993 9.91C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0555 17.4699 14.19C18.3772 14.5286 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z"
                  fill="white"
                />
              </svg>
            </div>
            <a href="#contact" className="text-xl" onClick={toggleMenu}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {/* Tailwind CSS Custom Styles */}
      <style jsx>{`
        .bg-gradient-mobile {
          background: linear-gradient(177.6deg, #2d3080 31.52%, #1b1d5f 99.13%);
        }
      `}</style>
    </>
  );
};

export default NavBar;
