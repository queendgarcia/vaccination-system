import {combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./User/userReducer";
import HospitalReducer from "./Hospital/hospitalReducer";
import VaccineReducer from "./Vaccine/vaccineReducer";

const rootReducer = combineReducers({
  UserReducer,
  HospitalReducer,
  VaccineReducer
})

export default configureStore(
  {reducer: rootReducer},
  {}, //initial state if set in store instead of reducer
)