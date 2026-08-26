"use client";

import { Canvas } from "@react-three/fiber";
import { GlobeScene } from "./GlobeScene";

export function GlobeCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 0.2, 18],
        fov: 38,
      }}
      dpr={[1, 1.75]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "transparent",
        pointerEvents: "none",
      }}
    >
      <GlobeScene />
    </Canvas>
  );
}
