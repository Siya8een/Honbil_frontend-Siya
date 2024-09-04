import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import FadeLoader from "react-spinners/FadeLoader";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const AddReview = ({ onReviewSubmit }) => {
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");
  //screen loading
  const [screenLoading, setScreenLoading] = useState(false);
  const params = useParams();
  const rentalId = params.id;

  const handleSubmit = () => {
    // Simulate API post request
    setScreenLoading(true);
    axios
      .post(`https://honbil-back.onrender.com/Honbil/${rentalId}/reviews`, {
        body: newReview,
        rating: rating,
      })
      .then((result) => {
        console.log(result);
        setNewReview(""); // Clear the input field
        setError(""); // Clear any previous error message
        setScreenLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to submit review. Please try again later.");
        setScreenLoading(false);
      });
  };

  return (
    <>
      {screenLoading ? (
        <CenteredDiv>
          <h2 className="section__title text-[#00df9a]">
            Submitting Your Review
          </h2>
          <br />
          <FadeLoader color="#36d7b7" />
        </CenteredDiv>
      ) : (
        <div className="flex items-center justify-center pb-4 md:p-0">
          <div className="w-screen max-w-md p-8 bg-gray-100 rounded-lg shadow-md">
            <textarea
              className="w-full h-28 md:h-40 p-4 mb-4 border border-gray-300 rounded-md resize-none"
              placeholder="Write your review here..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            ></textarea>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value, 10))}
              className="w-full p-4 mb-4 border border-gray-300 rounded-md"
              placeholder="Rating (1-5)"
            />
            <button
              className="w-full px-6 py-2 bg-blue-500 text-white rounded-md"
              onClick={handleSubmit}
            >
              Submit Review
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default AddReview;
