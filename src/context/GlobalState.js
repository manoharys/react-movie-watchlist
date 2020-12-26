import React, { useReducer, useEffect } from "react";
import { reducer } from "./reducer";

const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const globalContext = React.createContext();

export const ACTIONS = {
  ADD_TO_WATCHLIST: "addToWatchListFromButton",

  REMOVE_WATCHLIST: "removeWatchList",
  ADD_TO_WATCHED: "addToWatched",
  REMOVE_WATCHED: "removeFromWatched",
  FROM_WATCHED_TO_WATCHLIST: "fromWatchedToWatchList",
};

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
    // console.log(JSON.parse(localStorage.getItem("watchList")));
  }, [state]);

  const addMovie = (movie) => {
    dispatch({ type: ACTIONS.ADD_TO_WATCHLIST, payLoad: movie });
  };

  const removeMovie = (id) => {
    dispatch({ type: ACTIONS.REMOVE_WATCHLIST, payLoad: id });
  };

  const addToWatched = (movie) => {
    dispatch({ type: ACTIONS.ADD_TO_WATCHED, payLoad: movie });
  };

  const removeWatched = (id) => {
    dispatch({ type: ACTIONS.REMOVE_WATCHED, payLoad: id });
  };

  const watchedToWatchList = (movie) => {
    dispatch({ type: ACTIONS.FROM_WATCHED_TO_WATCHLIST, payLoad: movie });
  };
  return (
    <globalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,

        watchedToWatchList,
        removeWatched,
        addToWatched,
        addMovie,
        removeMovie: removeMovie,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};
