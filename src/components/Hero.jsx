import React from "react";
import Typed from "react-typed";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 800px;
  margin-top: -96px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  height: 95vh;
  flex-direction: column;
  justify-content: center;
`;

const Hero = () => {
  return (
    <div className="text-white bg-black">
      <StyledDiv>
        <p className="text-[#00df9a] font-bold p-2">
          Find Your Perfect Ride here
        </p>
        <h1 className="md:text-6xl sm:text-6xl text-4xl font-bold md:py-6">
          Find Rentals near you
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Easy and Safe Ride on
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Bikes", "Scooty", "Rentals"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Book your ride now
        </p>
        <a href="/#/rentals">
          <button className="bg-[#00df9a] hover:bg-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Started
          </button>

          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-2 py-3 text-black">
            Join us
          </button> */}
        </a>
      </StyledDiv>
    </div>
  );
};

export default Hero;
