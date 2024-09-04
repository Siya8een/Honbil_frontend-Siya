import React from "react";
import "./data.css";
const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="content">
          <h1 className="home__title">HonBil.</h1>
          <h3 className="home__subtitle">Rental Bikes</h3>
          <p className="home__description">
            {" "}
            "Find the best bikes for renting here"{" "}
          </p>
          <a
            href="mailto:  honbil963@gmail.com"
            className="button button--flex"
          >
            <button
              type="button"
              className="inline-block rounded mt-2 bg-neutral-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"
            >
              Contact us
            </button>
          </a>
        </div>
        <div className="img-section">
          <img
            className="home_img"
            src="http://localhost:3000/static/media/adhil-mn-F_iQW__GFXc-unsplash.9c8a083b958c53a737dc.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Main;
