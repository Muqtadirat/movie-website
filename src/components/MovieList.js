import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
    <div className="MovieList">
      <h2>Search Results</h2>

      <div className="row">
        {props.movies.map((movie) => (
          <div className="" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
