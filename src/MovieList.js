import React from "react";
import Movie from "./Movie";

function MovieList(props) {
  const { movieList } = props;

  if (!movieList) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      {movieList.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;

