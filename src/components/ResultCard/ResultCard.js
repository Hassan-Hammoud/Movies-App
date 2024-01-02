import React from "react";
import "./ResultCard.css";
import { Link } from "react-router-dom";

const ResultCard = ({ movie }) => {
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
          <Link to="" className="btn">
            Add To watchList
          </Link>
          <Link to="" className="btn">
            Add To watched
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
