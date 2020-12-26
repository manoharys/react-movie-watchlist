import React from "react";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.poster_path ? (
       <>
        <h5 style={{textAlign:"center"}}>{movie.title}</h5>
        <img
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        </>
      ) : (
        <div className="filler-poster"></div>
      )}
    </div>
  );
};