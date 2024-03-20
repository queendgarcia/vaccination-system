import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import ShowReports from './Pages/Reports/ShowReports';

const ApplicationComponent = () => {

  let userAdmin = localStorage.getItem("isAdmin") == "true" ? true : false

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
            <Route path="/reports" element={<ShowReports />} />
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