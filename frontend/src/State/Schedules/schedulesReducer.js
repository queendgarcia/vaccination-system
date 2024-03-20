import * as ActionTypes from "../actionTypes";

const Initial_State = []

export default function SchedulesReducer(state = Initial_State, action) {

  switch(action.type) {
    case ActionTypes.AddSchedulesToStore:
      return action.payload;
    case ActionTypes.RemoveScheduleFromStore:
      let newPending = state.filter( sched => sched._id != action.payload)
      return newPending;
    default:
      return state;
  }
}
