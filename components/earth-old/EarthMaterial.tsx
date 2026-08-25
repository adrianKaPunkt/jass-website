"use client";

import type * as THREE from "three";

type EarthMaterialProps = {
  colorMap: THREE.Texture;
  bumpMap: THREE.Texture;
};

export function EarthMaterial({ colorMap, bumpMap }: EarthMaterialProps) {
  return (
    <meshStandardMaterial
      map={colorMap}
      bumpMap={bumpMap}
      bumpScale={0.012}
      color="#8fa2ad"
      emissive="#07111a"
      emissiveIntensity={0.08}
      roughness={0.96}
      metalness={0.02}
    />
  );
}
