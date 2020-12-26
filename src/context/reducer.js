import { ACTIONS } from "./GlobalState";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_WATCHLIST:
      return {
        ...state,
        watchList: [action.payLoad, ...state.watchList],
      };

    case ACTIONS.REMOVE_WATCHLIST:
      return {
        ...state,
        watchList: state.watchList.filter((o) => o.id != action.payLoad),
        ...state.watchList,
      };

    case ACTIONS.ADD_TO_WATCHED:
      return {
        watchList: state.watchList.filter((o) => o.id != action.payLoad),
        watched: state.watchList.filter((o) => o.id == action.payLoad),
      };

    default:
      return state;
  }
};
