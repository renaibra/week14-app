import React from 'react';

const Stars = ({ rating, onRating }) => {
  const handleStarClick = newRating => {
    onRating(newRating);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={`fa fa-star${rating >= starValue ? ' checked' : ''}`}
            onClick={() => handleStarClick(starValue)}
          ></span>
        );
      })}
    </div>
  );
};

export default Stars;
