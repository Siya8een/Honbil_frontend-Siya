import React from "react";

import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
const RatingStars = ({ rating }) => {
  const renderStars = () => {
    if (rating > 0) {
      const stars = [];

      for (let i = 0; i < rating; i++) {
        stars.push(
          <div>
            <span key={i} className="fa fa-star checked">
              <AiFillStar style={{ fontSize: "1.4em" }} />
            </span>
          </div>
        );
      }
      for (let i = rating + 1; i < 5; i++) {
        stars.push(
          <div>
            <span key={i} className="fa fa-star">
              <AiOutlineStar style={{ fontSize: "1.4em" }} />
            </span>
          </div>
        );
      }
      return stars;
    } else {
      return <p>No Rating yet</p>; // Return null if no stars
    }
  };

  return <div className="star-container">{renderStars()}</div>;
};

export default RatingStars;
