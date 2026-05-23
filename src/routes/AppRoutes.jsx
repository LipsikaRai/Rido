import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationSearch from "../pages/LocationSearch";
import ChooseRide from "../pages/ChooseRide";
import SearchingDriver from "../pages/SearchingDriver";
import DriverFound from "../pages/DriverFound";
import TrackRide from "../pages/TrackRide";
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
        <Route path="/location" element={<LocationSearch />} />
<Route path="/choose-ride" element={<ChooseRide />} />
<Route path="/searching-driver" element={<SearchingDriver />} />
<Route path="/driver-found" element={<DriverFound />} />
<Route path="/track-ride" element={<TrackRide />} />

        <Route path="/wallet" element={<Wallet />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/location-search" element={<LocationSearch />} />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;