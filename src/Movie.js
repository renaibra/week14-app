import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = (props) => {
  const [showReviews, setShowReviews] = useState(false);
  const [movie, setMovie] = useState(props.movie);

  const handleRatingClick = (rating) => {
    const updatedMovie = { ...movie, rating: rating };
    setMovie(updatedMovie);
    props.onMovieUpdate(updatedMovie);
  };

  const handleReviewSubmit = (review) => {
    console.log("yahoo " + review);
    const updatedMovie = { ...props.movie, reviews: [...props.movie.reviews, review] };
    props.onMovieUpdate(updatedMovie);
  };

  const handleShowReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={movie.image} className="card-img" alt={movie.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.synopsis}</p>
            <p className="card-text">
              <small className="text-muted">Rating:</small> <Stars rating={movie.rating} onRatingClick={handleRatingClick} />
            </p>
            <button type="button" className="btn btn-link" onClick={handleShowReviews}>
              {showReviews ? 'Hide Reviews' : 'Show Reviews'}
            </button>
            {showReviews && <ReviewList reviews={movie.reviews} />}
            <hr />
            <ReviewForm onReviewSubmit={handleReviewSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
