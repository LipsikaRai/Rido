import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaCarSide, FaMotorcycle } from "react-icons/fa";
import { MdElectricRickshaw } from "react-icons/md";
import { FiMenu, FiBell, FiSearch } from "react-icons/fi";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f6ff] relative overflow-hidden">

      {/* MAP */}

      <div className="h-[45vh] w-full">

        <iframe
          title="map"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          src="https://www.openstreetmap.org/export/embed.html?bbox=77.1025%2C28.6048%2C77.2295%2C28.7041&layer=mapnik"
          className="border-none"
        ></iframe>

      </div>

      {/* TOP BUTTONS */}

      <div className="absolute top-5 left-5 z-20">

        <button className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl">

          <FiMenu />

        </button>

      </div>

      <div className="absolute top-5 right-5 z-20 flex items-center gap-4">

        <button className="text-2xl">
          <FiBell />
        </button>

        <div className="w-14 h-14 rounded-full bg-[#3b82f6] flex items-center justify-center text-white font-bold text-2xl">
          L
        </div>

      </div>

      {/* BOTTOM SHEET */}

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}

        className="absolute bottom-0 left-0 w-full bg-[#f8f8ff] rounded-t-[40px] p-6 min-h-[58vh]"
      >

        {/* Greeting */}

        <p className="text-gray-500 text-lg">
          Good morning
        </p>

        <h1 className="text-4xl font-bold text-[#111827] mt-1">
          Vikram Singh 👋
        </h1>

        {/* SEARCH */}

        <div
  onClick={() => navigate("/location")}
  className="bg-[#e9edff] rounded-[28px] p-5 flex items-center gap-4 mt-8 cursor-pointer"
>

          <div className="w-12 h-12 rounded-full bg-[#d7ddff] flex items-center justify-center text-[#243c9f] text-2xl">

            <FiSearch />

          </div>

          <input
            type="text"
            placeholder="Where would you like to go?"
            className="bg-transparent outline-none w-full text-lg placeholder:text-gray-500"
          />

        </div>

        {/* RIDE TYPES */}

        <div className="flex gap-4 mt-8">

          {/* CAR */}

          <div className="bg-[#243c9f] text-white rounded-[28px] w-[90px] h-[120px] flex flex-col items-center justify-center shadow-lg">

            <FaCarSide className="text-3xl" />

            <p className="mt-3 font-semibold text-lg">
              Car
            </p>

          </div>

          {/* AUTO */}

          <div className="bg-[#e9edff] rounded-[28px] w-[90px] h-[120px] flex flex-col items-center justify-center">

            <MdElectricRickshaw className="text-3xl" />

            <p className="mt-3 font-semibold text-lg">
              Auto
            </p>

          </div>

          {/* BIKE */}

          <div className="bg-[#e9edff] rounded-[28px] w-[90px] h-[120px] flex flex-col items-center justify-center">

            <FaMotorcycle className="text-3xl" />

            <p className="mt-3 font-semibold text-lg">
              Bike
            </p>

          </div>

        </div>

        {/* RECENT PLACES */}

        <div className="mt-10">

          <div className="flex justify-between items-center">

            <h2 className="text-2xl font-bold">
              Recent Places
            </h2>

            <button className="text-[#243c9f] font-semibold">
              See All
            </button>

          </div>

          {/* PLACE 1 */}

          <div className="flex items-center justify-between mt-8">

            <div className="flex items-center gap-4">

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

            <p className="text-3xl text-gray-400">
              ›
            </p>

          </div>

          {/* PLACE 2 */}

          <div className="flex items-center justify-between mt-8">

            <div className="flex items-center gap-4">

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

            <p className="text-3xl text-gray-400">
              ›
            </p>

          </div>

          {/* PLACE 3 */}

          <div className="flex items-center justify-between mt-8">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-[#e9edff] flex items-center justify-center text-2xl">

                🏋️

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Gym
                </h3>

                <p className="text-gray-500">
                  Gold's Gym, Hauz Khas
                </p>

              </div>

            </div>

            <p className="text-3xl text-gray-400">
              ›
            </p>

          </div>

        </div>

      </motion.div>

    </div>
  );
};

export default Home;