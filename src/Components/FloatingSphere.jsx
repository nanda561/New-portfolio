import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef, useState } from "react";

function MagneticSphere() {
  const sphereRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Smooth movement toward cursor
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.position.x += (mouse.x - sphereRef.current.position.x) * 0.05;
      sphereRef.current.position.y += (mouse.y - sphereRef.current.position.y) * 0.05;
    }
  });

  // Convert mouse position to 3D space movement
  const handlePointerMove = (e) => {
    setMouse({
      x: (e.point.x * 0.6), // adjust follow strength here
      y: (e.point.y * 0.6),
    });
  };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={sphereRef} onPointerMove={handlePointerMove}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          roughness={0}
          metalness={0.5}
          transmission={1}
          thickness={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          color="#ffffff"
          emissive={"#ffffff"}
          emissiveIntensity={0.07}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      className="cursor-none" // optional: hide cursor for cleaner feel
    >
      <MagneticSphere />
      <Environment preset="studio" />
    </Canvas>
  );
}
