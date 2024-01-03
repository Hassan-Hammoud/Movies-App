import React from "react";
import "./ResultCard.css";
import { useMovieContext } from "../context/GlobalContext";
import * as actions from "../context/action/ActionTypes";

const ResultCard = ({ movie }) => {
  const MovieContext = useMovieContext();
  const storeMovie = MovieContext.watchList.find(
    (o) => o.imdbID === movie.imdbID
  );
  const storeMovieWatched = MovieContext.watched.find(
    (o) => o.imdbID === movie.imdbID
  );
  const watchListDisable = storeMovie ? true : storeMovieWatched ? true : false;
  const watchedDisable = storeMovieWatched ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="info-title">
          <h3>{movie.Title}</h3>
          {movie.Year ? <p>{movie.Year}</p> : "-"}
        </div>
        <div className="button-card">
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCH_LIST,
                payload: movie,
              })
            }
            disabled={watchListDisable}
            className="btn"
          >
            Add To watchList
          </button>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            disabled={watchedDisable}
            className="btn"
          >
            Add To watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
