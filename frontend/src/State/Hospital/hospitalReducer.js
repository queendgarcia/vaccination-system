import * as ActionTypes from "../actionTypes";

const Initial_State = []

export default function HospitalReducer(state = Initial_State, action) {

  switch(action.type) {
    case ActionTypes.AddHospitalsToStore:
      return action.payload;
    default:
      return state;
  }
}
