import React, { useReducer } from 'react'
import {reducer} from "./reducer";

export const globalContext = React.createContext();

export const ACTIONS = {
    ADD_TO_WATCHLIST : "addToWatchList"
}

export const GlobalContextProvider = (props)=>{

   
   const [state, dispatch] = React.useReducer(reducer, {watchList:[], watched:[]});
   
   const addMovie = (movie)=>{
       dispatch({type: ACTIONS.ADD_TO_WATCHLIST, payLoad: movie});
   }
   
   return (
       <globalContext.Provider value={{watchList: state.watchList, watched: state.watched, addMovie}}>
           {props.children}
       </globalContext.Provider>
   )

}