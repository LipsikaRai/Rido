import { useNavigate } from "react-router-dom";

const OTP = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f1d7] flex items-center justify-center">

      <div className="w-[350px] p-6">

        {/* Back Button */}

        <button
          className="text-2xl mb-6"
          onClick={() => navigate("/")}
        >
          ←
        </button>

        {/* Heading */}

        <h1 className="text-3xl font-bold">
          OTP Verification
        </h1>

        <p className="text-gray-500 mt-2">
          Enter the verification code sent to your number
        </p>

        {/* OTP Boxes */}

        <div className="flex gap-3 mt-8 justify-center">

          <input
            className="w-14 h-14 rounded-xl text-center text-2xl border border-gray-300 bg-white outline-none"
            maxLength="1"
          />

          <input
            className="w-14 h-14 rounded-xl text-center text-2xl border border-gray-300 bg-white outline-none"
            maxLength="1"
          />

          <input
            className="w-14 h-14 rounded-xl text-center text-2xl border border-gray-300 bg-white outline-none"
            maxLength="1"
          />

          <input
            className="w-14 h-14 rounded-xl text-center text-2xl border border-gray-300 bg-white outline-none"
            maxLength="1"
          />

        </div>

        {/* Verify Button */}

        <button
          onClick={() => navigate("/home")}
          className="w-full bg-yellow-400 py-3 rounded-full mt-8 font-semibold hover:scale-105 transition"
        >
          Verify OTP
        </button>

      </div>

    </div>
  );
};

export default OTP;