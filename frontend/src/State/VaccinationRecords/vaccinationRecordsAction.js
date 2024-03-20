import * as ActionTypes from "../actionTypes";
import axios from "axios";

const url = "http://localhost:9000/vaccination-records";

export const addRecordsToStore = (records)=>({
  type: ActionTypes.AddRecordsToStore,
  payload: records 
})

export const fetchVaccinationRecords = ()=>{
  console.log("fetchVaccinationRecords: ");

  return function (dispatch) {
    axios.get(`${url}/all`)
    .then((records)=>{
      let recordsList = records.data
      console.log("get vaccination records response ", recordsList);
      
      dispatch(addRecordsToStore(recordsList))
    })
    .catch((err)=>{
      console.log("Error While Fetching Vaccination Records", err)
    })
  }
};
