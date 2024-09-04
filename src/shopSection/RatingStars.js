import React from "react";

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    if (rating > 0) {
      const stars = [];
      for (let i = 0; i < rating; i++) {
        stars.push(
          <span key={i} className="fa fa-star checked">
            ⭐️
          </span>
        );
      }
      return stars;
    } else {
      return null; // Return null if no stars
    }
  };

  return <div className="star-container">{renderStars()}</div>;
};

export default RatingStars;
