import { ActionTypes } from "../constants/action-types";

const initialState = {
  users: {},
};

export const fetchUsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};