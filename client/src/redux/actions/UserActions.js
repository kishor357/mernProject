import { ActionTypes } from "../constants/action-types";



export const fetchUsers = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_USERS,
    payload: {},
  });
};