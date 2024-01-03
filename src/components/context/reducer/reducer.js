import * as actions from "../action/ActionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCH_LIST:
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case actions.REMOVE_MOVIE_FROM_WATCH_LIST:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbId !== action.payload
        ),
      };
    case actions.MOVE_TO_WATCH_LIST:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbId !== action.payload.imdbId
        ),
        watchList: [action.payload, ...state.watchList],
      };
    case actions.ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbId !== action.payload.imdbId
        ),
        watched: [action.payload, ...state.watched],
      };
    case actions.REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbId !== action.payload
        ),
      };
    default:
      return state;
  }
};