import React, { useEffect, Fragment, useState } from "react";
import "./card-list.style.css";

import { Route, Routes, useNavigate, Redirect, Link } from "react-router-dom";

const RentalCard = (props) => {
  const { rentals } = props;
  const user = localStorage.getItem("token");
  const navigate = useNavigate();
  const loginCheck = () => {
    if (user === undefined || user === null) {
      navigate("/login");
    } else {
      console.log(user, "hello");
    }
  };
  return (
    <Fragment>
      <section className="rental">
        {/* <div className="center"></div>
        <h3>Rentals</h3> */}
        {/* <div className="row"> */}
        {rentals.map((rental) => {
          return (
            <div>
              {/* <div className="single-rental">
                  <div className="card">
                    <div className="rental-thumb">
                      <div className="rental-tag">available</div>
                      <img src={rental.image} alt={rental.title}></img>
                    </div>

                    <div className="rental-content"></div>
                    <h3>{rental.title}</h3>
                    <div className="mark"></div>
                    <i class="fa-solid fa-location-dot"></i>
                    <span>location-{rental.location}</span>
                    <br />
                    <span className="amount">
                      cost:-&nbsp; &#8377; {rental.price}&nbsp;/day
                    </span>

                    <form>
                      <a>
                        <button
                          type="submit"
                          className="Rentbutton"
                          onClick={loginCheck}
                        >
                          <Link to={`/rentals/${rental._id}`}>Rent Now</Link>
                        </button>
                      </a>
                    </form>
                  </div>

                  <div className="rental-footer">
                    <ul>
                      <li>
                        <span>
                          {" "}
                          &nbsp;<b>About:-</b>
                          {rental.description}
                        </span>
                      </li>
                      <li>
                        <i class="uil uil-baby-carriage"></i>
                        <span></span>
                      </li>
                      <li>
                        <img src="" alt=""></img>
                        <span></span>
                      </li>
                    </ul>
                  </div>
                </div> */}
              <div className="p-10">
                <div className=" w-full lg:max-w-full lg:flex">
                  <div
                    className="h-48 lg:h-auto lg:w-48% flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    title="Mountain"
                  >
                    <img
                      src={rental.image}
                      alt={rental.title}
                      className="object-cover h-48 w-96% rental-thumb"
                    />
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-sm text-gray-600 flex items-center">
                        <svg
                          className="fill-current text-gray-500 w-3 h-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                      </p>
                      <div className="text-gray-900 font-bold text-xl mb-2">
                        {rental.title}
                      </div>
                      <p className="text-gray-700 text-base">
                        {rental.description}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={rental.image}
                        alt="HonBil"
                      />
                      <div className="text-sm">
                        <p className="text-gray-900 leading-none">
                          cost:-&nbsp; &#8377; {rental.price}&nbsp;/day
                        </p>
                        <p className="text-gray-600">
                          location:- {rental.location}
                        </p>
                        <form>
                          <a>
                            <button
                              type="submit"
                              className="Rentbutton"
                              onClick={loginCheck}
                            >
                              <Link to={`/rentals/${rental._id}`}>
                                Rent Now
                              </Link>
                            </button>
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}       
      </section>
    </Fragment>
  );
};

export default RentalCard;
