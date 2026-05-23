import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiMail,
  FiLock,
  FiEye,
} from "react-icons/fi";

import {
  FaGoogle,
  FaFacebook,
  FaApple,
} from "react-icons/fa";

const Login = () => {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#f5f6ff] flex items-center justify-center px-6">

      <motion.div

        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}

        className="w-full max-w-md"

      >

        {/* BACK BUTTON */}

        <button className="w-14 h-14 rounded-full bg-[#e8ebff] flex items-center justify-center text-2xl">

          <FiArrowLeft />

        </button>

        {/* IMAGE */}

        <div className="flex justify-center mt-10">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3208/3208718.png"
            alt="ride"
            className="w-[220px]"
          />

        </div>

        {/* TITLE */}

        <div className="text-center mt-10">

          <h1 className="text-5xl font-bold text-[#101828]">
            Sign In
          </h1>

          <p className="text-gray-500 text-xl mt-4">
            Welcome back! Please sign in to continue
          </p>

        </div>

        {/* FORM */}

        <div className="mt-12">

          {/* EMAIL */}

          <div>

            <p className="font-semibold text-lg mb-3">
              Email
            </p>

            <div className="bg-white border border-gray-300 rounded-2xl px-5 h-[70px] flex items-center gap-4">

              <FiMail className="text-2xl text-gray-500" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-lg bg-transparent"
              />

            </div>

          </div>

          {/* PASSWORD */}

          <div className="mt-8">

            <p className="font-semibold text-lg mb-3">
              Password
            </p>

            <div className="bg-white border border-gray-300 rounded-2xl px-5 h-[70px] flex items-center gap-4">

              <FiLock className="text-2xl text-gray-500" />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none text-lg bg-transparent"
              />

              <FiEye className="text-2xl text-gray-500" />

            </div>

          </div>

          {/* FORGOT */}

          <div className="flex justify-end mt-4">

            <p className="text-[#243c9f] font-semibold cursor-pointer">
              Forgot Password?
            </p>

          </div>

          {/* BUTTON */}

          <button
            onClick={() => navigate("/home")}
            className="w-full bg-[#243c9f] text-white py-5 rounded-full text-2xl font-semibold mt-10 hover:scale-105 transition"
          >

            Sign In

          </button>

          {/* DIVIDER */}

          <div className="flex items-center gap-4 mt-10">

            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <p className="text-gray-500">
              or continue with
            </p>

            <div className="flex-1 h-[1px] bg-gray-300"></div>

          </div>

          {/* SOCIALS */}

          <div className="flex justify-center gap-6 mt-10">

            <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center text-2xl bg-white">
              <FaGoogle />
            </div>

            <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center text-2xl bg-white">
              <FaFacebook />
            </div>

            <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center text-2xl bg-white">
              <FaApple />
            </div>

          </div>

          {/* FOOTER */}

          <div className="text-center mt-14">

            <p className="text-gray-500 text-lg">

              Don’t have an account?

              <span className="text-[#243c9f] font-bold cursor-pointer ml-2">
                Sign Up
              </span>

            </p>

          </div>

        </div>

      </motion.div>

    </div>

  );
};

export default Login;