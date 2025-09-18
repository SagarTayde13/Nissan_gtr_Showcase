import { motion } from "framer-motion";
import carImg from "../images/image.png"; 

function ProductSeries() {
  return (
    <section id="Page2" className="min-h-screen bg-black text-white px-10 py-16 relative overflow-hidden">
      {/* Subtle red gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black -z-10"></div>
      <div className="absolute top-40 -left-32 w-96 h-96 bg-red-600/20 blur-3xl rounded-full -z-10"></div>
z
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-center mb-12">
        <span className="text-red-600">PRODUCT</span> SERIES
      </h2>

      {/* Product Tabs + Info */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          {/* Tabs */}
          <div className="flex gap-6 text-gray-400 mb-6">
            <button className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 transition">
              R32
            </button>
            <button className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 transition">
              R33
            </button>
            <button className="border-b-2 border-red-600 text-red-600 font-semibold">
              R34
            </button>
            <button className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 transition">
              Skyline
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            Unique interior design, providing a thrilling yet comfortable
            driving experience. Every detail, from the aggressive exterior
            lines to the refined interior, is crafted for performance and
            luxury.
          </p>

          <button className="px-6 py-3 border-2 border-red-600 hover:bg-red-600 transition rounded-md font-semibold">
            Catalog
          </button>

          {/* Features */}
          <ul className="mt-8 space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Double-layer soundproof
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Three-zone automatic air climate control
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Nappa leather interior
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Advanced electronic safety systems
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Dual 50W fast charging ports
            </li>
          </ul>
        </div>

        {/* Right Side - Car Image */}
        <motion.img
          src="/images/carImg"
          alt="Car Model"
          className="rounded-2xl ]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Extra Info Grid */}
      <div className="grid md:grid-cols-3 gap-12 mt-20 text-center">
        <div>
          <h3 className="text-xl font-bold text-red-600">WHEELS</h3>
          <p className="text-gray-400 mt-2">
            New 21-inch Black & Red Alloy Wheels
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-600">INTERIOR</h3>
          <p className="text-gray-400 mt-2">
            Black & red dual-tone sport upholstery
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-600">EXTERIOR</h3>
          <p className="text-gray-400 mt-2">
            Matte black paint with red accents
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductSeries;
