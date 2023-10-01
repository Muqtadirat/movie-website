import React from "react";
import MovieCard from "./MovieCard";

import { Row, Col } from "react-bootstrap";

const FeaturedMovies = (props) => {
  const { featuredMovies } = props;

  // Split the featured movies into two rows
  const halfLength = Math.ceil(featuredMovies.length / 2);
  const firstRow = featuredMovies.slice(0, halfLength);
  const secondRow = featuredMovies.slice(halfLength);

  return (
    <div className="FeaturedMovies">
      <h2 className="text-center mb-4">Featured Movies</h2>
      <Row>
        {/* First Row */}
        {firstRow.map((movie) => (
          <Col xs={6} sm={4} md={2} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
      <Row>
        {/* Second Row */}
        {secondRow.map((movie) => (
          <Col xs={6} sm={4} md={2} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedMovies;
