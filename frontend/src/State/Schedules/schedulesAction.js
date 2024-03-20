import * as ActionTypes from "../actionTypes";
import axios from "axios";

const url = "http://localhost:9000/schedule";

export const addSchedulesToStore = (schedules)=>({
  type: ActionTypes.AddSchedulesToStore,
  payload: schedules 
})

export const removeScheduleFromStore = (scheduleId) => ({
  type: ActionTypes.RemoveScheduleFromStore,
  payload: scheduleId
})

export const fetchPendingSchedules = ()=>{
  console.log("fetchPendingSchedules: ");

  return function (dispatch) {
    axios.get(`${url}/all`)
    .then((schedules)=>{
      let pendingSchedules = schedules.data
      console.log("get pending schedules response ", pendingSchedules);
      
      dispatch(addSchedulesToStore(pendingSchedules))
    })
    .catch((err)=>{
      console.log("Error While Fetching Pending Schedules", err)
    })
  }
};

export const completeSchedule = (schedule)=>{
  console.log("schedule ", schedule);

  return function (dispatch) {
    axios.post(`${url}/complete`,
      schedule
    )
    .then((res)=>{
      let removedSched = res;
      console.log("completed vaccination schedule ", removedSched);
      dispatch(removeScheduleFromStore(schedule._id))
    })
    .catch((err)=>{
      console.log("Error While Completing Vaccination Schedule", err)
    })
  }
};

export const createSchedule = (details) => {
  return function (dispatch) {
    axios.post(`${url}/create`,
    details
    )
    .then((res)=>{
      let createdSchedule = res.data;
      console.log("Successfully created schedule ", createdSchedule);
      // dispatch(removeScheduleFromStore(schedule._id))
    })
    .catch((err)=>{
      console.log("Error While Creating Vaccination Schedule", err)
    })
  }
}