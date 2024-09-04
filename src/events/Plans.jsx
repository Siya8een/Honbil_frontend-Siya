import React from "react";
import "./Plans.css";
import { plansData } from "../assets/data/data.js";
import WhiteTick from "../assets/whiteTick.png";
import { ImCross } from "react-icons/im";
import BannerImg from "./HonBil website banner.png";
import Nav from "../components/Navbar";
const Plans = () => {
  return (
    <>
      <Nav bgColor=" bg-slate-900" />
      <div className="events bg-slate-900">
        <div className="eventHead">
          <span className="stroke-text">UPCOMING</span>
          <span> EVENTS</span>
        </div>
        <img src={BannerImg} className="w-full"></img>
        <div className="line"></div>
        <div className="Plans" id="Plans">
          <div className="plans-container">
            <div className="programs-header" style={{ gap: "2rem" }}>
              <span className="stroke-text">START</span>
              <span>YOUR JOURNEY</span>
              <span className="stroke-text">NOW WITH US</span>
            </div>

            {/* Plans Cards */}
            <div className="plans">
              {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                  {plan.icon}
                  <span>{plan.name}</span>
                  <span>{plan.price}</span>
                  <div className="features">
                    {plan.features.map((feature, i) => (
                      <div className="feature" key={i}>
                        {feature.tick ? (
                          <img src={WhiteTick} alt="tick-img" />
                        ) : (
                          <ImCross />
                        )}
                        <span key={i}>{feature.facility}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <span>See More Benefits-></span>
                  </div>
                  <button className="btn">Join Now </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
