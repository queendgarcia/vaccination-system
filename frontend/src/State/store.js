import {combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./User/userReducer";
import HospitalReducer from "./Hospital/hospitalReducer";
import VaccineReducer from "./Vaccine/vaccineReducer";
import VaccinationRecordsReducer from "./VaccinationRecords/vaccinationRecordsReducer";
import SchedulesReducer from "./Schedules/schedulesReducer";

const rootReducer = combineReducers({
  UserReducer,
  HospitalReducer,
  VaccineReducer,
  VaccinationRecordsReducer,
  SchedulesReducer
})

export default configureStore(
  {reducer: rootReducer},
  {}, //initial state if set in store instead of reducer
)