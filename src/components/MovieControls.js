import React from "react";
import { globalContext } from "../context/GlobalState";

export default function MovieControls({ type, movie }) {
  const { removeMovie, addToWatched } = React.useContext(globalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button onClick={() => addToWatched(movie.id)} className="ctrl-btn">
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button onClick={() => removeMovie(movie.id)} className="ctrl-btn">
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn">
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button onClick={() => removeMovie(movie.id)} className="ctrl-btn">
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
}
