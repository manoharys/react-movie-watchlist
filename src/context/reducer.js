import { ACTIONS } from "./GlobalState";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_WATCHLIST:
      return {
        watched: state.watched.filter((o) => o.id != action.payLoad.id),
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
        watchList: state.watchList.filter((o) => o.id != action.payLoad.id),
        watched: [action.payLoad, ...state.watched],
      };

    case ACTIONS.REMOVE_WATCHED:
      return {
        ...state,
        watched: state.watched.filter((o) => o.id != action.payLoad),
      };

    case ACTIONS.FROM_WATCHED_TO_WATCHLIST:
      return {
        watchList: [action.payLoad, ...state.watchList],
        watched: state.watched.filter((o) => o.id != action.payLoad.id),
      };

    default:
      return state;
  }
};
