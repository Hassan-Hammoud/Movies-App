import React from "react";
import "./MovieControls.css";
import { useMovieContext } from "../context/GlobalContext";
import * as actions from "../context/action/ActionTypes";

const MovieControls = ({ movie, type }) => {
  const MovieContext = useMovieContext();
  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            className="ctrl-btn "
          >
            <i className="fa-regular fa-eye"></i>
          </button>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCH_LIST,
                payload: movie.imdbID,
              })
            }
            className="ctrl-btn "
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.MOVE_TO_WATCH_LIST,
                payload: movie,
              })
            }
            className="ctrl-btn "
          >
            <i className="fa-regular fa-eye-slash"></i>
          </button>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie.imdbID,
              })
            }
            className="ctrl-btn "
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
