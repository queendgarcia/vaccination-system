import * as ActionTypes from "../actionTypes";
import axios from "axios";

const url = "http://localhost:9000/vaccine";

export const addVaccinesToStore = (vaccines)=>({
  type: ActionTypes.AddVaccinesToStore,
  payload: vaccines 
})

export const registerVaccine= (vaccine)=>{
  console.log("vaccine ", vaccine);

  return function (dispatch) {
    axios.post(`${url}/register`,
      vaccine
    )
    .then((res)=>{
      let registeredVaccine = res.data;
      console.log("registered vaccine response ", registeredVaccine);
    })
    .catch((err)=>{
      console.log("Error While Registering Vaccine", err)
    })
  }
};

export const fetchVaccines = ()=>{
  console.log("fetchVaccines: ");
  return function (dispatch) {
    axios.get(`${url}/all`)
    .then((vaccines)=>{
      let vaccineList = vaccines.data;
      console.log("get vaccines response ", vaccineList);
      dispatch(addVaccinesToStore(vaccineList))
    })
    .catch((err)=>{
      console.log("Error While Fetching Vaccines", err)
    })
  }
};