import { FaMotorcycle, FaCarSide } from "react-icons/fa";
import { MdElectricRickshaw } from "react-icons/md";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="min-h-screen bg-[#f8f1d7] p-5 pb-28"
>

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

  <p className="text-gray-500 text-sm">
    Current Location
  </p>

  <h1 className="text-2xl font-bold mt-1">
    Chennai, India 📍
  </h1>

</div>

        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold hover:scale-110 transition">
          L
        </div>

      </div>

      {/* Search Box */}

      <div className="bg-white rounded-3xl p-4 mt-6 shadow-lg border border-gray-100">

        <input
          type="text"
          placeholder="Where do you want to go?"
          className="w-full outline-none text-lg placeholder:text-gray-400"
        />

      </div>
      <div className="flex justify-between items-center mt-4">

  <p className="font-medium">
    Premium Mode
  </p>

  <div className="w-14 h-8 bg-black rounded-full flex items-center px-1">
    <div className="w-6 h-6 bg-white rounded-full"></div>
  </div>

</div>

      {/* AI Recommendation */}

      <div className="bg-gradient-to-r from-black to-zinc-800 text-white rounded-3xl p-5 mt-6 shadow-xl">
         <p className="text-yellow-400 text-sm mb-2">
            SMART AI 
         </p>    
        <h2 className="text-xl font-bold">
          AI Recommendation
        </h2>

        <p className="text-gray-300 mt-2">
          Bike recommended 🚴 due to moderate traffic.
        </p>

      </div>

      {/* Ride Cards */}

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Choose Your Ride
      </h2>

      <div className="grid gap-4">

        {/* Bike */}

        <div className="bg-white rounded-3xl p-5 flex items-center justify-between shadow-lg hover:scale-105 hover:-translate-y-1 transition duration-300 cursor-pointer border border-gray-100">

          <div className="flex items-center gap-4">

            <div className="bg-yellow-100 p-4 rounded-2xl text-3xl">
              <FaMotorcycle />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Bike
              </h3>

              <div className="flex items-center gap-2 mt-1">

  <p className="text-gray-500 text-sm">
    2 mins away
  </p>

  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
    Available
  </span>

</div>
            </div>

          </div>

          <h2 className="text-xl font-bold">
            ₹49
          </h2>

        </div>

        {/* Auto */}

        <div className="bg-white rounded-3xl p-5 flex items-center justify-between shadow-lg hover:scale-105 hover:-translate-y-1 transition duration-300 cursor-pointer border border-gray-100">

          <div className="flex items-center gap-4">

            <div className="bg-green-100 p-4 rounded-2xl text-3xl">
              <MdElectricRickshaw />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Auto
              </h3>

              <div className="flex items-center gap-2 mt-1">

  <p className="text-gray-500 text-sm">
    4 mins away
  </p>

  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
    Available
  </span>

</div>
            </div>

          </div>

          <h2 className="text-xl font-bold">
            ₹89
          </h2>

        </div>

        {/* Cab */}

        <div className="bg-white rounded-3xl p-5 flex items-center justify-between shadow-lg hover:scale-105 hover:-translate-y-1 transition duration-300 cursor-pointer border border-gray-100">

          <div className="flex items-center gap-4">

            <div className="bg-yellow-100 p-4 rounded-2xl text-3xl">
              <FaCarSide />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Cab
              </h3>

              <div className="flex items-center gap-2 mt-1">

  <p className="text-gray-500 text-sm">
    6 mins away
  </p>

  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
    Available
  </span>

</div>
            </div>

          </div>

          <h2 className="text-xl font-bold">
            ₹149
          </h2>

        </div>

      </div> 
      {/* Fare Estimator */}

<div className="bg-white rounded-3xl p-5 mt-8 shadow-lg border border-gray-100">

  <h2 className="text-xl font-bold">
    Estimated Fare
  </h2>

  <div className="grid grid-cols-3 gap-3 mt-4">

    <div className="bg-yellow-100 rounded-2xl p-4 text-center">
      <p className="font-semibold">Bike</p>
      <h3 className="text-xl font-bold">₹49</h3>
    </div>

    <div className="bg-green-100 rounded-2xl p-4 text-center">
      <p className="font-semibold">Auto</p>
      <h3 className="text-xl font-bold">₹89</h3>
    </div>

    <div className="bg-blue-100 rounded-2xl p-4 text-center">
      <p className="font-semibold">Cab</p>
      <h3 className="text-xl font-bold">₹149</h3>
    </div>

  </div>

</div>
    {/* Map Section */}

<div className="mt-8">

  <h2 className="text-2xl font-bold mb-4">
    Nearby Drivers
  </h2>

  <div className="bg-gradient-to-r from-zinc-800 to-black rounded-3xl h-[180px] flex items-center justify-center text-white shadow-xl">

    <div className="text-center">

      <h3 className="text-2xl font-bold">
        Live Map Preview
      </h3>

      <p className="text-gray-300 mt-2">
        12 drivers available nearby
      </p>

    </div>

  </div>

</div>


      {/* Nearby Section */}

      <div className="bg-white rounded-3xl p-5 mt-8 shadow-lg border border-gray-100">

        <h2 className="text-xl font-bold">
          Nearby Hotspots
        </h2>

        <div className="flex gap-3 mt-4 flex-wrap">

          <span className="bg-yellow-100 px-4 py-2 rounded-full">
            Airport
          </span>

          <span className="bg-yellow-100 px-4 py-2 rounded-full">
            Railway Station
          </span>

          <span className="bg-yellow-100 px-4 py-2 rounded-full">
            Mall
          </span>

        </div>

      </div>
        {/* Bottom Navigation */}

<div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around py-4 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">

  <button className="flex flex-col items-center text-yellow-500 font-semibold">
    Home
  </button>

  <button className="flex flex-col items-center text-gray-500">
    Activity
  </button>

  <button className="flex flex-col items-center text-gray-500">
    Wallet
  </button>

  <button className="flex flex-col items-center text-gray-500">
    Profile
  </button>

</div>
    </motion.div>
  )
}

export default Home