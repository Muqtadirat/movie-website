import React from "react";
import { Card } from "react-bootstrap";

function MovieCard(props) {
  const { movie } = props;

  // Construct the image URL using the user's search input
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className="MovieCard">
      <Card>
        <Card.Img variant="top" src={posterUrl} alt={movie.title} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>Release Date: {movie.release_date}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
