import React, { useState, useEffect } from "react";

const RandomMoviePoster = () => {
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    // Fetch a random movie from the API
    const apiKey = "83f937cdd12135813452398bf880e27c";
    const randomPage = Math.floor(Math.random() * 100) + 1; // Random page number
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${randomPage}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomMovieData = data.results[randomIndex];
        setRandomMovie(randomMovieData);
      });
  }, []);

  return (
    <div className="RandomMoviePoster">
      {randomMovie && (
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/original/${randomMovie.poster_path}`}
            alt={randomMovie.title}
          />
        </div>
      )}
    </div>
  );
};

export default RandomMoviePoster;
