import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return (
    <primitive
  object={scene}
  scale={0.1}
  position={[0, -1.2, 0]}
  rotation={[0, Math.PI, 0]}
/>

  );
}


export default function ModelViewer({ modelPath }) {
  return (
    <div className="w-1/2 h-96  rounded-lg">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model url={modelPath} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
