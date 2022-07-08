import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import Signup from "../../pages/signup";
import ForgotPassword from "../../pages/forgotPassword";
import PinCode from "../../pages/pinCode";
import ChangePassword from "../../pages/changePassword";

const AppRoute = () => {
  return ( 
    render (
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/pin-code" element={<PinCode />} />
          <Route path="/update-password" element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>,
      document.getElementById("root")
    )
  )
};

export default AppRoute;
