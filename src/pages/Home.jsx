import { FaMotorcycle, FaCarSide } from "react-icons/fa";
import { MdElectricRickshaw } from "react-icons/md";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8f1d7] p-5">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
              Welcome Back👋
          </h1>

          <p className="text-gray-500">
            Ready for your next ride?
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
          L
        </div>

      </div>

      {/* Search Box */}

      <div className="bg-white rounded-3xl p-4 mt-6 shadow-sm">

        <input
          type="text"
          placeholder="Where do you want to go?"
          className="w-full outline-none text-lg"
        />

      </div>

      {/* AI Recommendation */}

      <div className="bg-black text-white rounded-3xl p-5 mt-6">

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

        <div className="bg-white rounded-3xl p-5 flex items-center justify-between shadow-sm hover:scale-105 transition">

          <div className="flex items-center gap-4">

            <div className="bg-yellow-100 p-4 rounded-2xl text-3xl">
              <FaMotorcycle />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Bike
              </h3>

              <p className="text-gray-500">
                2 mins away
              </p>
            </div>

          </div>

          <h2 className="text-xl font-bold">
            ₹49
          </h2>

        </div>

        {/* Auto */}

        <div className="bg-white rounded-3xl p-5 flex items-center justify-between shadow-sm hover:scale-105 transition">

          <div className="flex items-center gap-4">

            <div className="bg-green-100 p-4 rounded-2xl text-3xl">
              <MdElectricRickshaw />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Auto
              </h3>

              <p className="text-gray-500">
                4 mins away
              </p>
            </div>

          </div>

          <h2 className="text-xl font-bold">
            ₹89
          </h2>

        </div>

        {/* Cab */}

        <div className="bg-white rounded-3xl p-5 flex items-center justify-between shadow-sm hover:scale-105 transition">

          <div className="flex items-center gap-4">

            <div className="bg-blue-100 p-4 rounded-2xl text-3xl">
              <FaCarSide />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Cab
              </h3>

              <p className="text-gray-500">
                6 mins away
              </p>
            </div>

          </div>

          <h2 className="text-xl font-bold">
            ₹149
          </h2>

        </div>

      </div>

      {/* Nearby Section */}

      <div className="bg-white rounded-3xl p-5 mt-8 shadow-sm">

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

    </div>
  )
}

export default Home