"use client";

import { Canvas } from "@react-three/fiber";
import { EarthScene } from "./EarthScene";

export function EarthCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 22],
        fov: 45,
      }}
      gl={{
        antialias: true,
        alpha: true,
      }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    >
      <EarthScene />
    </Canvas>
  );
}
