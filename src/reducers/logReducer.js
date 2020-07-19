import { GET_LOGS, SET_LOADING, LOGS_ERROS } from "../actions/types";

const intialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROS:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
