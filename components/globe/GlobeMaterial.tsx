"use client";

import type * as THREE from "three";

type EarthMaterialProps = {
  colorMap: THREE.Texture;
  bumpMap: THREE.Texture;
};

export function GlobeMaterial({ colorMap, bumpMap }: EarthMaterialProps) {
  return (
    <meshStandardMaterial
      map={colorMap}
      bumpMap={bumpMap}
      bumpScale={0.012}
      color="#a9bac4"
      emissive="#0b1a25"
      emissiveIntensity={0.13}
      roughness={0.96}
      metalness={0.02}
    />
  );
}
