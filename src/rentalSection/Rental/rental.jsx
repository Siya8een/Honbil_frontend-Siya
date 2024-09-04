import React, { useState, useEffect } from "react";
import SearchBox from "../search-box/searchBox.component";
import RentalCard from "../Card/Card";
import styled from "styled-components";
import { calculateDistance } from "./location";
import FadeLoader from "react-spinners/FadeLoader";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 25px;
  width: 100%;
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Rentals = () => {
  const [searchField, setSearchField] = useState("");
  const [rentals, setRentals] = useState([]);
  const [locationPosition, setLocationPosition] = useState({});
  const [isDistanceFilterOn, setIsDistanceFilterOn] = useState(false); // Add state for the toggle button
  const [loading, setloading] = useState(false);

  //screen loading
  const [screenLoading, setScreenLoading] = useState(true);

  //getting location

  // api fetching
  useEffect(() => {
    fetch("https://honbil-back.onrender.com/api/v1/rentals")
      .then((response) => response.json())
      .then((users) => {
        //console.log("user_then", users);
        setRentals(users);
        setScreenLoading(false);
      });
  }, []);

  //console.log("renatslss11212", rentals, locationPosition);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredRentals = rentals.filter((rental) => {
    return rental.username.toLocaleLowerCase().includes(searchField);
  });

  // Toggle distance filter on/off when the button is clicked
  const toggleDistanceFilter = async () => {
    setloading(true);
    new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(true);
      } else {
        navigator.geolocation.getCurrentPosition((position) => {
          // console.log(position);
          setIsDistanceFilterOn((prevState) => !prevState);
          setLocationPosition({
            ...position,
            defaultLatitude: position.coords.latitude,
            defaultLongitude: position.coords.longitude,
          });
          resolve(true);
        });
      }
    })
      .catch(() => {
        alert("Your browser does not support GPS");
      })
      .finally(() => {
        setloading(false);
      });
  };

  const filteredRentalsByDistance = rentals.filter((rental) => {
    // console.log("filteredRentalsByDistance", rental);
    const rentalDistance = calculateDistance(
      locationPosition.defaultLatitude,
      locationPosition.defaultLongitude,
      rental.geometry.coordinates[1],
      rental.geometry.coordinates[0]
    );

    // If the distance filter is turned on and the rental is within 25 km, include it in the result
    rental.rentalDistance = rentalDistance; // Add rentalDistance property directly to the rental object
    return isDistanceFilterOn && rentalDistance <= 180;
  });

  const rentalsToDisplay = isDistanceFilterOn
    ? filteredRentalsByDistance
    : filteredRentals;

  return (
    <>
      {screenLoading ? (
        <CenteredDiv>
          <h2 className="section__title text-[#00df9a]">
            Loading Your Rentals
          </h2>
          <br />
          <FadeLoader color="#36d7b7" />
        </CenteredDiv>
      ) : (
        <section className="services section" id="services">
          <h2 className="section__title text-[#00df9a]">Rentals</h2>
          {isDistanceFilterOn ? (
            <></>
          ) : (
            <span className="section__subtitle">
              <SearchBox onChangeHandler={onSearchChange} />
            </span>
          )}

          {/* Add the button to toggle the distance filter */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              margin: "0 auto", // Center the button horizontally
              marginTop: "20px", // Add some top margin for spacing
            }}
            onClick={toggleDistanceFilter}
            disabled={loading}
          >
            {isDistanceFilterOn
              ? "Turn Off Distance Filter"
              : "Turn On Distance Filter"}
          </button>
          {loading ? (
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                margin: "0 auto", // Center the button horizontally
                marginTop: "20px", // Add some top margin for spacing
              }}
            >
              loading ...{" "}
            </p>
          ) : null}
          <CardContainer className="cardss">
            <RentalCard rentals={rentalsToDisplay} key="1" />
          </CardContainer>
        </section>
      )}
    </>
  );
};

export default Rentals;
