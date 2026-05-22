import { motion } from "framer-motion";

function Login() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-900 p-8 rounded-3xl w-full max-w-md shadow-2xl"
      >
        
        <h1 className="text-4xl font-bold mb-2">
          Welcome to Rido 🚖
        </h1>

        <p className="text-zinc-400 mb-8">
          Fast rides at your fingertips
        </p>

        <input
          type="text"
          placeholder="Enter Phone Number"
          className="w-full p-4 rounded-xl bg-zinc-800 outline-none mb-4"
        />

        <button
         className="w-full bg-blue-400 mt-6 py-3 rounded-full font-semibold text-white hover:bg-blue-500 transition"
        >
          Continue
        </button>

      </motion.div>

    </div>
  );
}

export default Login;