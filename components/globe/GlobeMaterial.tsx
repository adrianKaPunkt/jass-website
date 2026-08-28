"use client";

import type * as THREE from "three";

type EarthMaterialProps = {
  colorMap: THREE.Texture;
  bumpMap: THREE.Texture;
  isDark?: boolean;
};

export function GlobeMaterial({ colorMap, bumpMap, isDark = true }: EarthMaterialProps) {
  return (
    <meshStandardMaterial
      map={colorMap}
      bumpMap={bumpMap}
      bumpScale={0.012}
      color={isDark ? "#a8bdc9" : "#ffffff"}
      emissive={isDark ? "#0b1a25" : "#4a5a68"}
      emissiveIntensity={isDark ? 0.08 : 0.22}
      roughness={isDark ? 0.96 : 0.8}
      metalness={0.02}
    />
  );
}
