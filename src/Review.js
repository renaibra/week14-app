import React from 'react';

const Review = ({ review }) => {
  return (
    <li className="list-group-item">
      <p>{review.text}</p>
      <small>By {review.author}</small>
    </li>
  );
};

export default Review;
