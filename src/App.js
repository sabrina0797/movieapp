import { list } from "./list";
import React, { useState, useEffect } from "react";
import Addmovie from "./components/AddMovie";
import MovieList from "./components/Movielist";
import Filter from "./components/Filter";
import "./App.css";

const App = () => {
  const [wrapperClass, setwrapperClass] = useState("");
  const revealMovieForm = () =>
    setwrapperClass(wrapperClass === "" ? "active" : "");

  const [movies, setMovies] = useState(list);

  const handleAddMovie = (id, title, description, posterUrl, rating) => {
    setMovies([
      ...movies,
      {
        id: id,
        title: title,
        description: description,
        posterUrl: posterUrl,
        rating: rating,
      },
    ]);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    if (value) {
      const results = movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setMovies(results);
    } else {
      setMovies(list);
    }
  };

  return (
    <div className="main">
      <div className="header">
        <h1 className=""> TV Shows</h1>
        <button className="addMovie_btn" onClick={revealMovieForm}>
          <strong>+</strong> Add a show
        </button>
      </div>
      <div className={`formWrapper + ${wrapperClass}`}>
        <Addmovie
          movies={movies}
          handleAddMovie={handleAddMovie}
          setwrapperClass={setwrapperClass}
        />
      </div>
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <MovieList list={movies} />
    </div>
  );
};

export default App;
