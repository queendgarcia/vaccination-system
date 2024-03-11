import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./app.css";
import LoginUser from './Pages/User/LoginUser';
import RegisterUser from './Pages/User/RegisterUser';

const ApplicationComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </Router>
  )
}

export default ApplicationComponent;