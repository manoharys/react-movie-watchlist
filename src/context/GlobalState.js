import React, { useReducer, useEffect } from "react";
import { reducer } from "./reducer";

const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: [],
};

export const globalContext = React.createContext();

export const ACTIONS = {
  ADD_TO_WATCHLIST: "addToWatchList",
};

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
    console.log(JSON.parse(localStorage.getItem("watchList")));
  }, [state]);

  const addMovie = (movie) => {
    dispatch({ type: ACTIONS.ADD_TO_WATCHLIST, payLoad: movie });
  };

  return (
    <globalContext.Provider
      value={{ watchList: state.watchList, watched: state.watched, addMovie }}
    >
      {props.children}
    </globalContext.Provider>
  );
};
