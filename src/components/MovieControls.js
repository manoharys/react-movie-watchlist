import React from "react";
import { globalContext } from "../context/GlobalState";

export default function MovieControls({ type, movie }) {
  const {
    removeMovie,
    addToWatched,
    removeWatched,
    watchedToWatchList,
  } = React.useContext(globalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button onClick={() => addToWatched(movie)} className="ctrl-btn">
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button onClick={() => removeMovie(movie.id)} className="ctrl-btn">
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => watchedToWatchList(movie)}
          >
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button className="ctrl-btn" onClick={() => removeWatched(movie.id)}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
}
