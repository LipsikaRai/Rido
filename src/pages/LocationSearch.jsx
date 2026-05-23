import { motion } from "framer-motion";
import { FiArrowLeft, FiNavigation, FiClock } from "react-icons/fi";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LocationSearch = () => {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#f8f8ff] p-5">

      {/* HEADER */}

      <div className="flex items-center gap-4">

        <button
          onClick={() => navigate("/home")}
          className="w-12 h-12 rounded-full bg-[#e9edff] flex items-center justify-center text-2xl"
        >

          <FiArrowLeft />

        </button>

        <h1 className="text-3xl font-bold">
          Set Location
        </h1>

      </div>

      {/* LOCATION INPUTS */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}

        className="mt-10 flex gap-4"
      >

        {/* LEFT DOTS */}

        <div className="flex flex-col items-center mt-6">

          <div className="w-4 h-4 rounded-full bg-[#243c9f]"></div>

          <div className="w-[2px] h-20 bg-gray-300"></div>

          <div className="w-4 h-4 rounded-full bg-[#ef4444]"></div>

        </div>

        {/* INPUTS */}

        <div className="flex-1">

          {/* PICKUP */}

          <div className="bg-white border-2 border-[#243c9f] rounded-2xl h-[75px] flex items-center px-5">

            <input
              type="text"
              value="Current Location"
              className="w-full outline-none text-lg bg-transparent"
            />

            <button className="text-gray-500 text-xl">
              ✕
            </button>

          </div>

          {/* DESTINATION */}

          <div className="bg-white border border-gray-300 rounded-2xl h-[75px] flex items-center px-5 mt-5">

            <input
              type="text"
              placeholder="Where to?"
              className="w-full outline-none text-lg bg-transparent"
            />

          </div>

        </div>

      </motion.div>

      {/* BUTTONS */}

      <div className="flex gap-4 mt-8">

        <button
  onClick={() => navigate("/choose-ride")}
  className="flex-1 bg-[#243c9f] text-white h-[60px] rounded-full text-xl font-semibold"
>
  Search
</button>

        <button className="flex-1 bg-[#dfe3ff] text-gray-700 h-[60px] rounded-full text-xl font-semibold">

          Map

        </button>

      </div>

      {/* CURRENT LOCATION */}

      <div className="bg-[#e9edff] rounded-3xl p-5 mt-8 flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-[#d7ddff] flex items-center justify-center text-[#243c9f] text-2xl">

          <FiNavigation />

        </div>

        <div>

          <h2 className="font-bold text-xl">
            Use Current Location
          </h2>

          <p className="text-gray-500">
            Set pickup to your location
          </p>

        </div>

      </div>

      {/* SAVED PLACES */}

      <div className="mt-10">

        <div className="flex items-center gap-3">

          <FaStar className="text-[#243c9f]" />

          <h2 className="text-2xl font-bold">
            Saved Places
          </h2>

        </div>

        {/* HOME */}

        <div className="flex items-center gap-4 mt-8">

          <div className="w-14 h-14 rounded-full bg-[#e9edff] flex items-center justify-center text-2xl">

            🏠

          </div>

          <div>

            <h3 className="font-bold text-xl">
              Home
            </h3>

            <p className="text-gray-500">
              Vasant Kunj, New Delhi
            </p>

          </div>

        </div>

        {/* OFFICE */}

        <div className="flex items-center gap-4 mt-8">

          <div className="w-14 h-14 rounded-full bg-[#e9edff] flex items-center justify-center text-2xl">

            🏢

          </div>

          <div>

            <h3 className="font-bold text-xl">
              Office
            </h3>

            <p className="text-gray-500">
              Cyber City, Gurugram
            </p>

          </div>

        </div>

      </div>

      {/* SEARCH RESULTS */}

      <div className="mt-12">

        <div className="flex items-center gap-3">

          <FiClock className="text-gray-500" />

          <h2 className="text-2xl font-bold">
            Search Results
          </h2>

        </div>

        {/* RESULT 1 */}

        <div className="flex items-center gap-4 mt-8">

          <div className="w-14 h-14 rounded-full bg-[#e9edff] flex items-center justify-center text-xl text-gray-500">

            <FaMapMarkerAlt />

          </div>

          <div>

            <h3 className="font-bold text-xl">
              India Gate
            </h3>

            <p className="text-gray-500">
              India Gate, Rajpath, New Delhi
            </p>

          </div>

        </div>

        {/* RESULT 2 */}

        <div className="flex items-center gap-4 mt-8">

          <div className="w-14 h-14 rounded-full bg-[#e9edff] flex items-center justify-center text-xl text-gray-500">

            <FaMapMarkerAlt />

          </div>

          <div>

            <h3 className="font-bold text-xl">
              Connaught Place
            </h3>

            <p className="text-gray-500">
              Connaught Place, New Delhi
            </p>

          </div>

        </div>

        {/* RESULT 3 */}

        <div className="flex items-center gap-4 mt-8">

          <div className="w-14 h-14 rounded-full bg-[#e9edff] flex items-center justify-center text-xl text-gray-500">

            <FaMapMarkerAlt />

          </div>

          <div>

            <h3 className="font-bold text-xl">
              Hauz Khas Village
            </h3>

            <p className="text-gray-500">
              Hauz Khas Village, New Delhi
            </p>

          </div>

        </div>

      </div>

    </div>

  );
};

export default LocationSearch;