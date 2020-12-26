import React, { useContext } from "react";
import { globalContext } from "../context/GlobalState";
import {MovieCard}  from "./MovieCard";

export const WatchList = () => {
  const { watchList } = useContext(globalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
           <h1 className="heading">My watchList</h1>
         </div>
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
    
  );
};
