import React from "react";

function MovieCard(props) {
  return (
    <div className="MovieCard">
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
        alt={props.movie.title}
      />
      <div className="movie-details">
        <h2>{props.movie.title}</h2>
        <p>{props.movie.overview}</p>
        <p>Release Date: {props.movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
