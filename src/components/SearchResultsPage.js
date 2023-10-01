import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

function SearchResultsPage(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch and update the movies based on the user's search input
    const query = props.match.params.query; // Access the query from the URL
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=83f937cdd12135813452398bf880e27c&query=${query}`;

    console.log(apiUrl);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [props.match.params.query]);

  return (
    <div>
      <h2>Search Results</h2>
      <MovieList movies={movies} />
    </div>
  );
}

export default SearchResultsPage;
