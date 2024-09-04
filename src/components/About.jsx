import React from "react";
import Laptop from "../assets/adhil-mn-F_iQW__GFXc-unsplash.jpg";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 " src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">Want to partner with us ?</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Join us and list your rental online...
          </h1>
          <p>
            We provide various individual and organisation with opportunity to
            rent their bikes online and make income out of it.
          </p>
          <a href="https://honbil-back.onrender.com/home">
            <button className="bg-black text-[#00df9a] hover:bg-[#00df9a] hover:text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
