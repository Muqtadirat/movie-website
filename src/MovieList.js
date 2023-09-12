import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
    <div className="MovieList">
      <h2>Search Results</h2>
      <ul>
        {props.movies.map((movie) => (
          <MovieCard key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </MovieCard>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
