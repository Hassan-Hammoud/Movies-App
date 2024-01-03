import React from "react";
import './MovieControls.css'
const MovieControls = ({ movie, type }) => {
  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button className="ctrl-btn ">
            <i class="fa-regular fa-eye"></i>
          </button>
          <button className="ctrl-btn ">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn ">
            <i class="fa-regular fa-eye-slash"></i>
          </button>
          <button className="ctrl-btn ">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
