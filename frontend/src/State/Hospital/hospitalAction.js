import * as ActionTypes from "../actionTypes";
import axios from "axios";

const url = "http://localhost:9000/hospital";

export const addHospitalsToStore = (hospitals)=>({
  type: ActionTypes.AddHospitalsToStore,
  payload: hospitals 
})

export const registerHospital = (hospital)=>{
  console.log("Hospital ", hospital);

  return function (dispatch) {
    axios.post(`${url}/register`,
      hospital
    )
    .then((hospital)=>{
      let addedHospital = hospital.data;
      console.log("registered hospital response ", addedHospital);
    })
    .catch((err)=>{
      console.log("Error While Registering Hospital", err)
    })
  }
};

export const fetchHospitals = ()=>{
  console.log("fetchHospitals: ");

  return function (dispatch) {
    axios.get(`${url}/all`)
    .then((hospitals)=>{
      let hospitalList = hospitals.data;
      console.log("get hospitals response ", hospitalList);
      dispatch(addHospitalsToStore(hospitalList))
    })
    .catch((err)=>{
      console.log("Error While Fetching Hospitals", err)
    })
  }
};