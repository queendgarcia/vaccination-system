import * as ActionTypes from "../actionTypes";

export const AddUserToStore = (user) => {
  return {
    type: ActionTypes.AddUserToStore,
    payload: user
  }
}

export const AddUserScheduleToStore = (schedule) => {
  return {
    type: ActionTypes.AddUserScheduleToStore,
    payload: schedule
  }
}

export const RemoveUserFromStore = (user) => {
  return {
    type: ActionTypes.RemoveUserFromStore,
    payload: {
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
    }
  }
}