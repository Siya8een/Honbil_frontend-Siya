import React from "react";
import RatingStars from "./RatingStars";

const calculateRentalRating = (rentals) => {
  //console.log("rating_rentals", rentals);
  if (rentals.length !== 0) {
    let rating = 0;

    rentals.forEach((rental) => {
      rating = rating + rental.rating;
    });

    return rating / rentals.length;
  } else {
    return 0;
  }
};

const RentalsList = ({ rentals, reviews }) => {
  return (
    <div className="starRatings">
      {/* {rentals.map((rental, index) => (
        <div key={index}>
          <h2>{rental.title}</h2>
        </div>
      ))} */}

      <div>
        <RatingStars rating={calculateRentalRating(reviews)} />
      </div>
    </div>
  );
};

export default RentalsList;
