import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCarSide,
  FaMotorcycle,
  FaCrown,
} from "react-icons/fa";

import {
  MdElectricRickshaw,
  MdDirectionsCar,
} from "react-icons/md";

import {
  FiArrowLeft,
  FiUsers,
  FiClock,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

const ChooseRide = () => {

  const navigate = useNavigate();

  const rides = [
    {
      name: "Economy",
      icon: <FaCarSide />,
      price: 120,
      time: "3-5 min",
      passengers: 4,
      desc: "Affordable everyday rides",
    },

    {
      name: "Auto",
      icon: <MdElectricRickshaw />,
      price: 90,
      time: "2-4 min",
      passengers: 3,
      desc: "Quick auto rides",
    },

    {
      name: "Premium",
      icon: <FaCrown />,
      price: 220,
      time: "5-8 min",
      passengers: 4,
      desc: "Luxury comfort rides",
    },

    {
      name: "SUV",
      icon: <MdDirectionsCar />,
      price: 300,
      time: "6-12 min",
      passengers: 6,
      desc: "Spacious group rides",
    },

    {
      name: "Bike",
      icon: <FaMotorcycle />,
      price: 70,
      time: "1-2 min",
      passengers: 1,
      desc: "Quick solo rides",
    },
  ];

  const [selectedRide, setSelectedRide] = useState(rides[0]);

  return (

    <div className="min-h-screen bg-[#f8f8ff] pb-40">

      {/* MAP */}

      <div className="h-[35vh] relative">

        <iframe
          title="map"
          width="100%"
          height="100%"
          loading="lazy"
          src="https://www.openstreetmap.org/export/embed.html?bbox=77.1025%2C28.6048%2C77.2295%2C28.7041&layer=mapnik"
          className="border-none"
        ></iframe>

        {/* BACK */}

        <button
          onClick={() => navigate("/location")}
          className="absolute top-5 left-5 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl"
        >

          <FiArrowLeft />

        </button>

      </div>

      {/* SHEET */}

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}

        className="bg-white rounded-t-[40px] p-6 -mt-6 relative z-10"
      >

        {/* LOCATIONS */}

        <div className="flex gap-4">

          <div className="flex flex-col items-center mt-2">

            <div className="w-4 h-4 rounded-full bg-[#243c9f]"></div>

            <div className="w-[2px] h-16 bg-gray-300"></div>

            <div className="w-4 h-4 rounded-full bg-red-500"></div>

          </div>

          <div>

            <div>

              <p className="text-gray-500">
                Pickup
              </p>

              <h2 className="text-2xl font-bold">
                Prayagraj,Uttar Pradesh
              </h2>

            </div>

            <div className="mt-6">

              <p className="text-gray-500">
                Destination
              </p>

              <h2 className="text-2xl font-bold">
               prayagraj railway station, Uttar Pradesh
              </h2>

            </div>

          </div>

        </div>

        {/* TITLE */}

        <h1 className="text-3xl font-bold mt-10">
          Choose a ride
        </h1>

        {/* RIDE LIST */}

        <div className="mt-8 space-y-5">

          {rides.map((ride, index) => (

            <div
              key={index}

              onClick={() => setSelectedRide(ride)}

              className={`rounded-[30px] p-5 flex justify-between items-center cursor-pointer transition border-2

              ${
                selectedRide.name === ride.name
                  ? "border-[#243c9f] bg-[#eef1ff]"
                  : "border-gray-200 bg-white"
              }
              `}
            >

              <div className="flex gap-5">

                <div className="w-20 h-20 rounded-3xl bg-[#eef1ff] flex items-center justify-center text-4xl text-[#243c9f]">

                  {ride.icon}

                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    {ride.name}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    {ride.desc}
                  </p>

                  <div className="flex gap-5 mt-3 text-gray-500">

                    <div className="flex items-center gap-2">
                      <FiUsers />
                      {ride.passengers}
                    </div>

                    <div className="flex items-center gap-2">
                      <FiClock />
                      {ride.time}
                    </div>

                  </div>

                </div>

              </div>

              <div className="text-right">

                <h2 className="text-3xl font-bold">
                  ₹{ride.price}
                </h2>

                <p className="text-gray-500 text-sm">
                  Estimated fare
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* SHARE RIDE */}

        <div className="bg-[#eef1ff] rounded-2xl p-5 mt-8 flex justify-between items-center">

          <div>

            <h2 className="font-bold text-xl">
              Share ride
            </h2>

            <p className="text-gray-500">
              Split fare with co-riders
            </p>

          </div>

          <div className="w-14 h-8 bg-[#243c9f] rounded-full flex items-center px-1">

            <div className="w-6 h-6 rounded-full bg-white ml-auto"></div>

          </div>

        </div>

        {/* PROMO */}

        <div className="bg-[#eef1ff] rounded-2xl p-5 mt-5">

          <input
            type="text"
            placeholder="Enter promo code"
            className="bg-transparent outline-none w-full"
          />

        </div>

        {/* PAYMENT */}

        <div className="bg-[#eef1ff] rounded-2xl p-5 mt-5 flex justify-between items-center">

          <div>

            <h2 className="font-bold">
              Credit Card
            </h2>

            <p className="text-gray-500">
              **** 4242
            </p>

          </div>

          <p className="text-2xl">
            ›
          </p>

        </div>

      </motion.div>

      {/* BOTTOM BUTTON */}

      <div className="fixed bottom-0 left-0 w-full bg-white p-5 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">

        <button
          onClick={() => navigate("/searching-driver")}
          className="w-full bg-[#243c9f] text-white h-[70px] rounded-full text-xl font-bold"
        >

          Book {selectedRide.name} — ₹{selectedRide.price}

        </button>

      </div>

    </div>
  );
};

export default ChooseRide;