import { GET_LOGS, SET_LOADING, LOGS_ERROS, ADD_LOG } from "./types";

// get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROS,
      payload: err.responce.data,
    });
  }
};

//ADD NEW LOG
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROS,
      payload: err.responce.data,
    });
  }
};

//* SETS LOADING TO TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
