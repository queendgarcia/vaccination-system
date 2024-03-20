import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import "./app.css";
import LoginUser from './Pages/User/LoginUser';
import RegisterUser from './Pages/User/RegisterUser';
import UserSection from './Pages/Home/UserSection';
import AdminSection from './Pages/Home/AdminSection';
import RegisterVaccine from './Pages/Vaccine/RegisterVaccine';
import RegisterHospital from './Pages/Hospital/RegisterHospital';
import HospitalList from './Pages/Hospital/HospitalList';
import VaccineList from './Pages/Vaccine/VaccineList';
import VaccinationRecords from './Pages/Vaccination/VaccinationRecords';
import ScheduleList from './Pages/Schedules/ScheduleList';
import ScheduleVaccination from './Pages/Appointment/ScheduleVaccination';

const ApplicationComponent = () => {

  // let loggedInUser = useSelector((state) => state.UserReducer.User)
  let userAdmin = localStorage.getItem("isAdmin") == "true" ? true : false
  // console.log("from main app: " + JSON.stringify(loggedInUser) )
  // console.log("from main app: " + JSON.stringify(loggedInUser) + " " + typeof loggedInUser)

  return (
    <Router>
      <Routes>
        {
          userAdmin
          ? 
          <>
            <Route path="/home" element={<AdminSection />} />
            <Route path="/register-vaccine" element={<RegisterVaccine />} />
            <Route path="/register-hospital" element={<RegisterHospital />} />
            <Route path="/vaccination-records" element={<VaccinationRecords />} />  
            <Route path="/pending-schedules" element={<ScheduleList />} />
          </>
          : 
          <Route path="/home" element={<UserSection />} />
        }
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/hospitals" element={<HospitalList />} />
        <Route path="/vaccines" element={<VaccineList />} />
        <Route path="/schedule-vaccination" element={<ScheduleVaccination />} />
      </Routes>
    </Router>
  )
}

export default ApplicationComponent;