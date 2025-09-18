import { motion } from "framer-motion";
// import heroBg from "../images/pexels-albinberlin-919073.jpg"; 
import heroBg2 from "../images/gtrrrrr.jpg";// Replace with GTR car image
import { Link } from "react-scroll";

function Hero() {
  return (
    <section id="NissanPage1"
      className="h-screen w-full flex flex-col relative bg-black text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroBg2})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-20 bg-black/40 backdrop-blur-sm">
        {/* Logo */}
        <div>
          <Link to="NissanPage1" smooth={true} duration={600} className="hover:text-gray-300 cursor-pointer text-2xl font-bold tracking-widest">
            NISSAN GTR
          </Link>
        </div>

        {/* Nav Items */}
        <ul className="flex space-x-10 text-sm uppercase tracking-wide">
          <li>
            <Link to="Page2" smooth={true} duration={600} className="hover:text-gray-300 cursor-pointer">
              Products
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={600} className="hover:text-gray-300 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} duration={600} className="hover:text-gray-300 cursor-pointer">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="investors" smooth={true} duration={600} className="hover:text-gray-300 cursor-pointer">
              For Investors
            </Link>
          </li>
        </ul>


        {/* Right side */}

        <div className="flex items-center space-x-6">
          <button className="text-sm hover:text-gray-300">EN | JP</button>

          <Link
            to="testdrive"
            smooth={true}
            duration={600}
            className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition cursor-pointer"
          >
            Book a Test Drive
          </Link>
        </div>

      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-16">
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-9xl font-bold leading-tight"
        >
          NISSAN <br /> GTR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-xl text-gray-300"
        >
          The Legend Reimagined. Experience the power.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Explore More
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
