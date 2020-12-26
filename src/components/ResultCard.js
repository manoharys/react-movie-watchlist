import React from "react";
import { globalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const {
    watchList,
    addMovie,
    watched,
    addToWatched
    
  } = React.useContext(globalContext);
  let watchListDisableOne = watchList.find((o) => o.id === movie.id);
  let watchListDisableTwo = watched.find((o) => o.id === movie.id);
  let watchListDisableBtnOne = watchListDisableOne ? "disable" : "";
  let watchListDisableBtnTwo = watchListDisableTwo ? "disable" : "";
  let buttonTextOne = watchListDisableOne
    ? "Added to WatchList"
    : "Add to WatchList";
  let buttonTextTwo = watchListDisableTwo ? "Watched" : "Add to Watched";

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
          <button
            disabled={watchListDisableBtnOne}
            className="btn"
            onClick={() => addMovie(movie)}
          >
            {buttonTextOne}
          </button>
          <button
            disabled={watchListDisableBtnTwo}
            className="btn"
            onClick={() => addToWatched(movie)}
          >
            {buttonTextTwo}
          </button>
        </div>
      </div>
    </div>
  );
};
