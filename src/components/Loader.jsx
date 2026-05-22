import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="text-5xl font-bold text-yellow-400"
      >
        Rido 🚖
      </motion.h1>

    </div>
  );
};

export default Loader;