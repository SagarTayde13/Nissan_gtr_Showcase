import { motion } from "framer-motion";

function CTA() {
  return (
    <section id="testdrive" className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black to-red-900">
      <motion.h2 
        className="text-6xl font-bold"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Unleash the Beast
      </motion.h2>
      <p className="text-gray-300 mt-4">Nissan GTR • The Godzilla of the Streets</p>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full text-lg"
      >
        Book a Test Drive
      </motion.button>
    </section>
  );
}

export default CTA;
