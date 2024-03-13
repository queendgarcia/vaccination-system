import * as ActionTypes from "../actionTypes";

const Initial_State = []

export default function VaccineReducer(state = Initial_State, action) {
  switch(action.type) {
    case ActionTypes.AddVaccinesToStore:
      return action.payload;
    default:
      return state;
  }
}
