import { combineReducers } from "redux";
import { fetchUsersReducer } from "./UserReducer";


const reducers = combineReducers({
    fetchUsersReducer,
});

export default reducers;
