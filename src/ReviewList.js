import React from "react";
import Review from "./Review";

function ReviewList(props) {
  const { reviews } = props;

  if (!reviews || reviews.length === 0) {
    return <div>No reviews yet.</div>;
  }

  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;


  