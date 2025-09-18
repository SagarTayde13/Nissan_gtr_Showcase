import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div id="about" className="relative min-h-screen bg-black flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Circular Gradient/Ring Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full border border-gray-800/50"></div>
        <div className="absolute w-[900px] h-[900px] rounded-full border border-gray-700/30"></div>
        <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-600/20"></div>
      </div>

      {/* Background Car Image */}
      <motion.img
        src="/images/gtr_side.jpg"
        alt="Nissan GTR Back View"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 w-full max-w-6xl opacity-80"
      />

      {/* Large Heading */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[4rem] md:text-[8rem] font-extrabold tracking-widest text-center text-white/10 absolute top-12"
      >
        ABOUT US
      </motion.h1>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl text-gray-200"
        >
          Our core value is <span className="text-red-500">“Exceeding users' needs, creating products and services we are proud of.”</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-sm md:text-base text-gray-400"
        >
          For Nissan GTR owners, their vehicle is more than just a car – it's a
          lifestyle. It’s their study room, bedroom, living room, and for kids,
          it’s their magic castle.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUs;
