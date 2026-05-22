import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import OTP from "../pages/OTP";
import Home from "../pages/Home";
import Activity from "../pages/Activity";
import Wallet from "../pages/Wallet";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/otp" element={<OTP />} />

        <Route path="/home" element={<Home />} />

        <Route path="/activity" element={<Activity />} />

        <Route path="/wallet" element={<Wallet />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;