import React from "react";
import {globalContext} from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const {watchList, addMovie} = React.useContext(globalContext);
  let watchListDisable = watchList.find(o=>o.id === movie.id);
  watchListDisable = watchListDisable ? "disable" : "";
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="controls">
          <button disabled={watchListDisable} className="btn" onClick={()=>addMovie(movie)}>Add to WatchList</button>
        </div>
      </div>
    </div>
  );
};
