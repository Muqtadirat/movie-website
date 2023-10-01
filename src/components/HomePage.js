import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import FeaturedMovies from "./FeaturedMovies";
import RandomMoviePoster from "./RandomMoviePoster";

const apiUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=83f937cdd12135813452398bf880e27c";
const apiSearch =
  "https://api.themoviedb.org/3/search/movie?api_key=83f937cdd12135813452398bf880e27c&query";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies for the featured section
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedMovies(data.results.slice(0, 10));
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `${apiSearch}=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container-fluid">
      <SearchBar
        searchMovie={searchMovie}
        query={query}
        changeHandler={changeHandler}
      />
      <RandomMoviePoster />
      <FeaturedMovies featuredMovies={featuredMovies} />
      {query && <MovieList movies={movies} />}
    </div>
  );
}

export default HomePage;
