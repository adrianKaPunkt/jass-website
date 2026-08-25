"use client";

import { useTexture } from "@react-three/drei";

export function EarthScene() {
  const [colorMap, bumpMap] = useTexture([
    "/earth/textures/earth-color.jpg",
    "/earth/textures/earth-bump.jpg",
  ]);

  return (
    <>
      <ambientLight intensity={0.25} />

      <directionalLight position={[4, 2, 5]} intensity={2.2} />

      <mesh position={[0, -1.7, 0]}>
        <sphereGeometry args={[2.5, 128, 128]} />

        <meshStandardMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.08}
          roughness={0.8}
          metalness={0.08}
        />
      </mesh>
    </>
  );
}
