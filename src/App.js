import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

import "bootstrap/dist/css/bootstrap.min.css";

const apiUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=83f937cdd12135813452398bf880e27c";
const apiSearch =
  "https://api.themoviedb.org/3/search/movie?api_key=83f937cdd12135813452398bf880e27c&query";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

    const searchMovie = async (e) => {
      e.preventDefault();
      console.log("Searching");
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=83f937cdd12135813452398bf880e27c&query=${query}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
      } catch (e) {
        console.log(e);
      }
    };

    const changeHandler = (e) => {
      setQuery(e.target.value);
    };

  return (
    <div className="App">
      {/* Pass the necessary props to the SearchBar component */}
      <SearchBar
        searchMovie={searchMovie}
        query={query}
        changeHandler={changeHandler}
        movies={movies}
      />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default App;
