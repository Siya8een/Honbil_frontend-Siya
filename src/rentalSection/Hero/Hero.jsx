import React from "react";
import "./hero.css";
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";

const Hero2 = () => {
  return (
    <div>
      {/* <h1> Hare krishna</h1> */}
      <div className="icons-nav">
        <div className="icons">
          <a href="https://instagram.com/honbil_rentals?igshid=MzRlODBiNWFlZA==">
            <AiOutlineInstagram size={35} color="white" />
          </a>
        </div>
        <div className="icons">
          <IoLogoFacebook size={35} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
