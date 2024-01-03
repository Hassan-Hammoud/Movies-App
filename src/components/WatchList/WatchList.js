import React from "react";
import { useMovieContext } from "../context/GlobalContext";
import MovieCard from "../MovieCard/MovieCard";
import "./WatchList.css";
const WatchList = () => {
  const MovieContext = useMovieContext();
  return (
    <div className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h2>My Watch List</h2>
          <p className="movies-count">
            {MovieContext.watchList.length}{" "}
            {MovieContext.watchList.length <= 1 ? "Movie" : "Movies"}
          </p>
        </div>
        {MovieContext.watchList.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watchList.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchList" />
            ))}
          </div>
        ) : (
          <h3>There Is No Available List Of Movies, Add Some! </h3>
        )}
      </div>
    </div>
  );
};

export default WatchList;
