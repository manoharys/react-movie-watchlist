import React, { useContext } from "react";
import { globalContext } from "../context/GlobalState";
import {MovieCard}  from "./MovieCard";

export const WatchList = () => {
  const { watchList } = useContext(globalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          {/* <div className="heading">My WatchList</div> */}

          {watchList.length > 0 ? (
            <div className="movie-grid">
              {watchList.map((movie) => (
                <MovieCard movie={movie} type="watchList" />
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
