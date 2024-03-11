import {combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./User/userReducer";

const rootReducer = combineReducers({
  UserReducer,
})

export default configureStore(
  {reducer: rootReducer},
  {}, //initial state if set in store instead of reducer
)