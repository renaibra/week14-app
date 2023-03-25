import React, { useState } from "react";
import MovieList from "./MovieList";
import movies from "./movies";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState(movies);
  console.log(movieList);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchMovies = () => {
    // This function is no longer needed
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <MovieList movieList={movieList} />
        </div>
      </div>
    </div>
  );
}

export default App;

