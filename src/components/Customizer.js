import React, { useState, useEffect } from "react";
import ModelViewer from "./ModelViewer";
import { useInView } from "react-intersection-observer";

function Customizer() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, 
  });
  const [carColor, setCarColor] = useState("silver");
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setKey((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="gallery"
      className="h-screen flex flex-col items-center justify-center px-10 bg-gradient-to-br from-red-900 via-black to-gray-900 text-white"
    >
      <h1 className="text-4xl font-bold mb-6 text-red-600 relative px-8 py-3 border-2 border-red-600 rounded-lg">
        GALLERY
      </h1>

      <h2 className="text-4xl font-bold mb-6">360° View</h2>

      {/* Load your .glb model here */}
      <ModelViewer modelPath={`${process.env.PUBLIC_URL}/models/nissan3d.glb`} />
    

      <div className="flex gap-4 mt-6">
        <button className="px-4 py-2 bg-red-600 rounded-full">Red</button>
        <button className="px-4 py-2 bg-gray-700 rounded-full">Black</button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded-full">Silver</button>
      </div>
    </section>
  );
}

export default Customizer;
