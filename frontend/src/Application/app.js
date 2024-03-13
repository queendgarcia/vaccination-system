import React from 'react'
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

const ApplicationComponent = () => {

  // let loggedInUser = useSelector((state) => state.UserReducer.User);
  let loggedInUser = { "isAdmin" : localStorage.getItem("isAdmin") }
  console.log("from main app: " + JSON.stringify(loggedInUser))

  return (
    <Router>
      <Routes>
        {
          loggedInUser && loggedInUser.isAdmin 
          ? <Route path="/home" element={<AdminSection />} />
          : <Route path="/home" element={<UserSection />} />
        }
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/register-vaccine" element={<RegisterVaccine />} />
        <Route path="/register-hospital" element={<RegisterHospital />} />
        <Route path="/hospitals" element={<HospitalList />} />
        <Route path="/vaccines" element={<VaccineList />} />
      </Routes>
    </Router>
  )
}

export default ApplicationComponent;