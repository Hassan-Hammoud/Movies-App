import React from "react";
import { useMovieContext } from "../context/GlobalContext";
import MovieCard from "../MovieCard/MovieCard";

const Watched = () => {
  const MovieContext = useMovieContext();
  return (
    <div className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h2>My Watched </h2>
          <p className="movies-count">
            {MovieContext.watched.length}{" "}
            {MovieContext.watched.length <= 1 ? "Movie" : "Movies"}
          </p>
        </div>
        {MovieContext.watched.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h3>No Watched Movies</h3>
        )}
      </div>
    </div>
  );
};

export default Watched;
