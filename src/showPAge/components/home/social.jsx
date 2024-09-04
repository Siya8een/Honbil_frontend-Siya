import React from "react";
import "./social.css";
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
const Social = () => {
  return (
    <div>
      <h1> Hare krishna</h1>
      <div className="icons-nav">
        <div className="icons">
          <AiOutlineInstagram size={35} color="black" />
        </div>
        <div className="icons">
          <IoLogoLinkedin size={35} color="black" />
        </div>
        <div className="icons">
          <DiGithubBadge size={35} color="black" />
        </div>
      </div>
    </div>
  );
};

export default Social;
