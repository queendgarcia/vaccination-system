import * as ActionTypes from "../actionTypes";

const Initial_State = {
  User: {
    _id: "",
    isAdmin: false,
    email: "",
    name: "",
    age: 0,
    contact: "",
    address: "",
    profession: "",
    sex: "",
    diagnosis: ""
  },
  UserSchedule : {}
}

let UserReducer =  (state = Initial_State, action) => {
  switch(action.type) {
    case ActionTypes.AddUserToStore : 
      return {...state, User: action.payload }
    case ActionTypes.RemoveUserFromStore :
      return {...state, User: action.payload }
    case ActionTypes.AddUserScheduleToStore :
      return {...state, UserSchedule: action.payload}
    default :
      return state
  }
}

export default UserReducer;