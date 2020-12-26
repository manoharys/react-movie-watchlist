import {ACTIONS} from "./GlobalState";

export const reducer= (state, action)=>{
    switch(action.type){
        case ACTIONS.ADD_TO_WATCHLIST:
            return {
                ...state,
                watchList: [action.payLoad, ...state.watchList]
               
            }
        default: 
            return state;
    }
}