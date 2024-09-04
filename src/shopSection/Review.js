import React, { Children } from "react";

const ReviewCard = ({ body }) => {
  // console.log("rvwBody", body);
  return (
    <div style={styles.card}>
      <p style={styles.body}>{body}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "5px",
    maxWidth: "300px",
    width: "300%", // Set the width to cover full screen width
    backgroundColor: "#f8f8f8",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
  },
  body: {
    fontSize: "12px",
    margin: 0, // Remove default margin to avoid extra space
  },
};

export default ReviewCard;
