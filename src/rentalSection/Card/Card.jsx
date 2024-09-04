import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./card.css";
import RentalsList from "./rentalsList";

import { MdVerified } from "react-icons/md";
import { ImLocation } from "react-icons/im";
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 0.5rem;
  flex: 1 0 15rem;
  background: rgb(190 206 230 / 25%);
  border-radius: 0.5rem;
  max-width: 25rem;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
`;

const RentalCard = (props) => {
  const { rentals } = props;

  const user = localStorage.getItem("token");
  const navigate = useNavigate();

  const loginCheck = (indexCard) => {
    if (user === undefined || user === null) {
      localStorage.setItem("id", rentals[indexCard]._id);
      navigate("/login");
    } else {
      let id = rentals[indexCard]._id;
      navigate(`/rentals/${id}`);
    }
  };
  const loginCheckUrl = (indexCard) => {
    if (user === undefined || user === null) {
      localStorage.setItem("id", rentals[indexCard]._id);
      return "/login";
    } else {
      let id = rentals[indexCard]._id;
      return `/rentals/${id}`;
    }
  };

  const Navigatetocontactpage = () => {
    navigate("/contact");
  };

  return (
    <CardContainer>
      {rentals.map((rental, index) => {
        return (
          <div className="card" key={index}>
            <div className="rental-card">
              <div className="card-img">
                {/* <button onClick={() => loginCheck(index)}> */}
                <Image
                  className="rounded-t-lg"
                  src={rental.images[0].url}
                  alt={rental.username}
                  href={loginCheckUrl(index)}
                />
                {/* </button> */}
              </div>
              <div className="card-content">
                <h2 className="card-title"> {rental.username}</h2>

                {/* <h3> Open</h3> */}
                <hr className="border-slate-400" />
                <div className="flex gap-3 ">
                  <div className="Ratings">{rental.rentals.length + 1}.0</div>
                  <RentalsList
                    rentals={rental.rentals}
                    reviews={rental.reviews}
                  />

                  <div className="tags">
                    <MdVerified />
                  </div>
                </div>
                {/* <br /> */}

                <p className="place flex gap-1">
                  {" "}
                  <ImLocation style={{ fontSize: "1.4em", fill: "#00df9a" }} />
                  {rental.rentalLocation}
                </p>

                {/* <div className="tags">
                  <p>verified</p>
                </div> */}
                <div className="flex gap-3">
                  <p className="underline text-white"> Available Bikes </p>
                  <div className="flex flex-col">
                    {rental.rentals.map((rental, index) => (
                      <li className="p-0 text-slate-200" key={index}>
                        {rental.title}
                      </li>
                    ))}
                  </div>
                </div>

                {!rental.rentalDistance ? (
                  <p> Turn on Gps to find your distance from this rental </p>
                ) : (
                  <div>
                    <p>
                      <b>{rental.rentalDistance.toFixed(2)}</b> kms away
                    </p>
                  </div>
                )}

                <div className="buttons">
                  <button className="button" onClick={() => loginCheck(index)}>
                    More info
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button className="button" onClick={Navigatetocontactpage}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </CardContainer>
  );
};

export default RentalCard;
