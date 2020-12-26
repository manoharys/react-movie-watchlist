import React, { useContext } from "react";
import { globalContext } from "../context/GlobalState";
import {MovieCard}  from "./MovieCard";

export const Watched = () => {
  const { watched } = useContext(globalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          {/* <div className="heading">My WatchList</div> */}

          {watched.length > 0 ? (
            <div className="movie-grid">
              {watched.map((movie) => (
                <MovieCard movie={movie} type="watched" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No movies</h2>
          )}
        </div>
      </div>
    </div>
  );
};
