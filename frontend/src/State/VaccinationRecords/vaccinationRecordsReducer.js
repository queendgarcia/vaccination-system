import * as ActionTypes from "../actionTypes";

const Initial_State = []

export default function VaccinationRecordsReducer(state = Initial_State, action) {

  switch(action.type) {
    case ActionTypes.AddRecordsToStore:
      return action.payload;
    default:
      return state;
  }
}
