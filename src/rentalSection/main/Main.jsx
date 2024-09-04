import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import bgTravelVideo from "../../assets/video (2160p).mp4";
// import Mouse from "../scrollButton/scrollButton";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { Typewriter, cursor, useTypewriter } from "react-simple-typewriter";

import "./Main.css";
// // scroll down button

const wheelAnimation = keyframes`
  to {
    opacity: 0;
    top: 60px;
  }
`;
const Mouse = styled.div`
  width: 50px;
  height: 90px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
  border: 3px solid rgb(0 223 154 / 1);
  border-radius: 60px;
  position: absolute;
  right: 50%;
  bottom: 0%;
  transform: translateX(50%);

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(0 223 154 /1);
    border-radius: 50%;
    opacity: 1;
    animation: ${wheelAnimation} 2s infinite;
    -webkit-animation: ${wheelAnimation} 2s infinite;
  }
`;

const Main = () => {
  const [text] = useTypewriter({
    words: ["Bike Renting!", "Adventure", "Trips"],
    loop: {},
    typeSpeed: 120,
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="mainn">
        {/* <div className="content">
          <h1 className="home__title">HonBil.</h1>
          <h3 className="home__subtitle">Rental Bikes</h3>
          <p className="home__description">
            {" "}
            "Find the best bikes for renting here"{" "}
          </p>
        </div>
        <div className="img-section">
          <img className="home_img" src="/test.jpg" alt="rental-imag"></img>
        </div> */}
        <div className="w-full h-screen relative">
          <video
            className="w-full h-full object-cover"
            src={bgTravelVideo}
            autoPlay
            loop
            muted
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gray-900/70"></div>
          <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
            <h1 className="w-full text-7xl font-bold text-[#00df9a]">
              Honbil.
            </h1>
            <h2 className="py-4 text-white text-2xl w-full">
              Explore : {text}
            </h2>

            {/* scroll bar icon */}
            <Mouse isVisible={isVisible} />

            {/* <form
              className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90"
            >
              <div>
                <input
                  className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  "
                  type="text"
                  placeholder="Search Destinations"
                />
              </div>
              <div>
                <button>
                  <AiOutlineSearch
                    size={20}
                    className="icon"
                    style={{ color: "#ffffff" }}
                  />
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
