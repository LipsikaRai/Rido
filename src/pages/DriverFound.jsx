import { motion } from "framer-motion";

import {
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";

import {
  FaCheck,
  FaCarSide,
  FaStar,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const DriverFound = () => {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#f8f8ff] flex flex-col items-center justify-center px-6 pb-32">

      {/* SUCCESS ICON */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}

        transition={{
          duration: 0.5,
        }}

        className="w-24 h-24 rounded-full bg-[#243c9f] flex items-center justify-center text-white text-4xl"
      >

        <FaCheck />

      </motion.div>

      {/* TITLE */}

      <h1 className="text-4xl font-bold mt-8">
        Driver Found!
      </h1>

      <p className="text-gray-500 mt-3 text-center">
        Your driver is on the way to pick you up
      </p>

      {/* DRIVER CARD */}

      <div className="bg-white rounded-[30px] shadow-lg p-6 w-full max-w-md mt-10">

        {/* DRIVER */}

        <div className="flex items-center gap-4">

          {/* IMAGE */}

          <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-4xl">

            👨

          </div>

          {/* INFO */}

          <div>

            <h2 className="text-2xl font-bold">
              Michael Smith
            </h2>

            <div className="flex items-center gap-3 mt-1 text-gray-500">

              <div className="flex items-center gap-1">

                <FaStar className="text-yellow-400" />

                4.9

              </div>

              <p>• 1250 trips</p>

            </div>

          </div>

        </div>

        {/* CAR */}

        <div className="bg-[#eef1ff] rounded-2xl p-4 mt-6 flex justify-between items-center">

          <div className="flex gap-4 items-center">

            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#243c9f] text-3xl">

              <FaCarSide />

            </div>

            <div>

              <h2 className="font-bold text-xl">
                Toyota Camry
              </h2>

              <p className="text-gray-500">
                White • ABC 1234
              </p>

            </div>

          </div>

          <div className="text-right">

            <p className="text-gray-500">
              Arrives in
            </p>

            <h2 className="text-2xl font-bold text-[#243c9f]">
              3 min
            </h2>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="flex gap-4 mt-6">

          {/* MESSAGE */}

          <button className="flex-1 h-[65px] rounded-2xl bg-[#eef1ff] flex items-center justify-center gap-3 text-xl font-semibold">

            <FiMessageCircle />

            Message

          </button>

          {/* CALL */}

          <button className="flex-1 h-[65px] rounded-2xl bg-[#243c9f] text-white flex items-center justify-center gap-3 text-xl font-semibold">

            <FiPhone />

            Call

          </button>

        </div>

      </div>

      {/* OTP */}

      <div className="bg-[#eef1ff] rounded-2xl p-6 w-full max-w-md mt-8 text-center">

        <p className="text-gray-500">
          Share this OTP with your driver
        </p>

        <h1 className="text-6xl font-bold text-[#243c9f] mt-3 tracking-[10px]">

          5422

        </h1>

      </div>

      {/* BUTTON */}

      <div className="fixed bottom-0 left-0 w-full bg-white p-5 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">

        <button
          onClick={() => navigate("/track-ride")}
          className="w-full bg-[#243c9f] text-white h-[70px] rounded-full text-2xl font-bold"
        >

          Track Your Ride

        </button>

      </div>

    </div>

  );
};

export default DriverFound;