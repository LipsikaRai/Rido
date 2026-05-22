import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import OTP from "../pages/OTP";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/otp" element={<OTP />} />

        <Route path="/home" element={<Home />} />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;