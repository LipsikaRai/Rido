import { useEffect, useState } from "react";

import {
  FiPhone,
  FiMessageCircle,
} from "react-icons/fi";

import {
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const TrackRide = () => {

  const navigate = useNavigate();

 const [distance, setDistance] = useState(5.8);

const [time, setTime] = useState(12);

const [speed, setSpeed] = useState(32);



  // LIVE CHANGING VALUES

 useEffect(() => {

  const interval = setInterval(() => {

    // DISTANCE REDUCES SLOWLY

    setDistance((prev) => {

      if (prev <= 0.3) return 0.3;

      return Number((prev - 0.2).toFixed(1));

    });

    // ETA REDUCES SLOWLY

    setTime((prev) => {

      if (prev <= 1) return 1;

      return prev - 1;

    });

    // RANDOM SPEED

    setSpeed(Math.floor(Math.random() * 25) + 25);



  }, 4000);

  return () => clearInterval(interval);

}, []);

  return (

    <div className="min-h-screen bg-[#f8f8ff]">

{/* MAP */}
{/* MAP */}

<div className="h-[45vh] w-full relative overflow-hidden">

  <iframe
    title="map"
    width="100%"
    height="100%"
    loading="lazy"
    allowFullScreen
    src="https://www.openstreetmap.org/export/embed.html?bbox=77.1025%2C28.6048%2C77.2295%2C28.7041&layer=mapnik"
    className="border-none scale-110"
  ></iframe>

  {/* DARK OVERLAY */}

  <div className="absolute inset-0 bg-black/10"></div>

  {/* ETA */}

  <div className="absolute top-5 right-5 bg-[#243c9f] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">

    🚖 Driver arriving in {time} min

  </div>

</div>
      {/* BOTTOM PANEL */}

      <div className="bg-white rounded-t-[35px] -mt-8 relative z-10 p-6 pb-32">
        {/* DRIVER */}

        <div className="flex justify-between items-center">

          <div className="flex gap-4 items-center">

            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-3xl">

              👨

            </div>

            <div>

              <h1 className="text-xl font-bold">
                Michael Smith
              </h1>

              <p className="text-gray-500 flex items-center gap-2">

                <FaStar className="text-yellow-400" />

                4.9 • Toyota Camry

              </p>

            </div>

          </div>

          {/* ACTIONS */}

          <div className="flex gap-3">

            <button className="w-12 h-12 rounded-full bg-[#eef1ff] flex items-center justify-center text-[#243c9f] text-xl">

              <FiMessageCircle />

            </button>

            <button className="w-12 h-12 rounded-full bg-[#243c9f] flex items-center justify-center text-white text-xl">

              <FiPhone />

            </button>

          </div>

        </div>

        {/* CAR INFO */}

        <div className="bg-[#eef1ff] rounded-2xl p-5 mt-6 flex justify-between">

          <div>

            <p className="text-gray-500">
              Vehicle
            </p>

            <h2 className="font-bold text-lg">
              Toyota Camry
            </h2>

          </div>

          <div className="text-right">

            <p className="text-gray-500">
              Plate Number
            </p>

            <h2 className="font-bold text-lg">
              ABC 1234
            </h2>

          </div>

        </div>

        {/* LIVE STATS */}

        <div className="grid grid-cols-3 gap-3 mt-6">

          {/* DISTANCE */}

          <div className="border rounded-2xl p-4 text-center">

            <p className="text-gray-500 text-sm">
              Distance
            </p>

            <h1 className="text-2xl font-bold mt-2">

              {distance} km

            </h1>

          </div>

          {/* ETA */}

          <div className="border rounded-2xl p-4 text-center">

            <p className="text-gray-500 text-sm">
              ETA
            </p>

            <h1 className="text-2xl font-bold mt-2">

              {time} min

            </h1>

          </div>

          {/* SPEED */}

          <div className="border rounded-2xl p-4 text-center">

            <p className="text-gray-500 text-sm">
              Speed
            </p>

            <h1 className="text-2xl font-bold mt-2">

              {speed} km/h

            </h1>

          </div>

        </div>

        {/* PICKUP */}

        <div className="mt-8">

          <div className="flex gap-4">

            <div className="flex flex-col items-center">

              <div className="w-4 h-4 rounded-full bg-blue-600"></div>

              <div className="w-[2px] h-16 bg-gray-300"></div>

              <div className="w-4 h-4 rounded-full bg-red-500"></div>

            </div>

            <div>

              <div>

                <p className="text-gray-500">
                  Pickup
                </p>

                <h2 className="text-xl font-bold">
                  current location
                </h2>

              </div>

              <div className="mt-8">

                <p className="text-gray-500">
                  Destination
                </p>

                <h2 className="text-xl font-bold">
                      Destination
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* SAFETY */}

        <div className="bg-red-50 text-red-500 rounded-2xl p-5 mt-8 flex items-center gap-3">

          <FaMapMarkerAlt />

          Share ride details or get help

        </div>

      </div>

  {/* CANCEL BUTTON */}

<div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50">

  <button
    onClick={() => navigate("/home")}
    className="w-full h-[65px] rounded-full border-2 border-red-400 text-red-500 text-xl font-semibold bg-white"
  >

    Cancel Ride

  </button>

</div>

    </div>

  );
};

export default TrackRide;