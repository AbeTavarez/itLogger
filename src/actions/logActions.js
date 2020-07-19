import { GET_LOGS, SET_LOADING, LOGS_ERROS } from "./types";

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch("/logs");
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };
//* reactoring top function
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

//* SETS LOADING TO TRUE
export const seLoading = () => {
  return {
    type: SET_LOADING,
  };
};
