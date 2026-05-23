import { motion } from "framer-motion";
import { FaCarSide } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchingDriver = () => {

  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // AUTO REDIRECT AFTER 5 SECONDS

    const redirect = setTimeout(() => {
      navigate("/driver-found");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };

  }, []);

  return (

    <div className="min-h-screen bg-[#f8f8ff] flex flex-col items-center justify-center px-6">

      {/* ANIMATION */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}

        transition={{
          repeat: Infinity,
          duration: 2,
        }}

        className="w-[220px] h-[220px] rounded-full border border-[#d9dffb] flex items-center justify-center"
      >

        <div className="w-20 h-20 rounded-full bg-[#e9edff] flex items-center justify-center text-[#243c9f] text-4xl">

          <FaCarSide />

        </div>

      </motion.div>

      {/* TITLE */}

      <h1 className="text-3xl font-bold mt-12">
        Finding your driver
      </h1>

      <p className="text-gray-500 mt-3 text-center">
        Please wait while we connect you with a nearby driver
      </p>

      {/* TIMER */}

      <div className="bg-[#e9edff] rounded-2xl w-full max-w-md p-5 mt-8 text-center">

        <p className="text-gray-500">
          Searching for
        </p>

        <h2 className="text-3xl font-bold mt-2">

          00:{seconds < 10 ? `0${seconds}` : seconds}

        </h2>

      </div>

      {/* INFO */}

      <div className="bg-[#eef1ff] rounded-2xl p-5 mt-6 w-full max-w-md">

        <h2 className="font-bold text-lg">
          💡 Did you know?
        </h2>

        <p className="text-gray-500 mt-2">
          Rido drivers go through extensive background checks
          and training to ensure your safety.
        </p>

      </div>

      {/* CANCEL */}

      <button
        onClick={() => navigate("/home")}
        className="w-full max-w-md h-[65px] rounded-full border-2 border-red-400 text-red-500 text-xl font-semibold mt-10"
      >

        Cancel Search

      </button>

    </div>

  );
};

export default SearchingDriver;