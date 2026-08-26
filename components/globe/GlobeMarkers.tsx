"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type NetworkLocation = {
  code: string;
  name: string;
  country: string;
  description: string;
  lat: number;
  lng: number;
};

// Real IATA coordinates for the three locations named in Network.tsx.
export const NETWORK_LOCATIONS: NetworkLocation[] = [
  {
    code: "LUX",
    name: "Luxemburg",
    country: "Headquarters",
    description: "Headquarters, Missionsplanung, Compliance",
    lat: 49.6233,
    lng: 6.2044,
  },
  {
    code: "TBJ",
    name: "Tunesien",
    country: "Africa Division",
    description: "J.A.S.S. Africa Division, Rückführungsmissionen",
    lat: 36.9758,
    lng: 8.8779,
  },
  {
    code: "TMJ",
    name: "Usbekistan",
    country: "Asia Division",
    description: "J.A.S.S. Asia Division, Drehscheibe Zentralasien",
    lat: 37.2851,
    lng: 67.3094,
  },
];

// Standard equirectangular lat/lng -> Three.js SphereGeometry local-space
// conversion (matches the default phiStart/thetaStart the earth-color.jpg
// texture is mapped with). Verified against a 6-point calibration render
// (consistent scale factor across all points, no angular distortion) — any
// remaining visual offset comes from the placeholder texture's own
// geographic inaccuracy (see components/globe/Globe.md), not this formula.
function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

/** rotation.y that brings the given lat/lng to face the camera (+Z). */
export function getMarkerTargetRotationY(lat: number, lng: number) {
  const { x, z } = latLngToVector3(lat, lng, 1);
  return -Math.atan2(x, z);
}

type NetworkScrollProgress = { network: number; rotation: number };

type GlobeMarkersProps = {
  progressRef: React.RefObject<NetworkScrollProgress>;
};

const ACTIVE_SCALE = 0.03;
const INACTIVE_SCALE = 0.014;
const ACTIVE_OPACITY = 1;
const INACTIVE_OPACITY = 0.4;
const EASE = 0.15;

export function GlobeMarkers({ progressRef }: GlobeMarkersProps) {
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  const positions = useMemo(
    () => NETWORK_LOCATIONS.map((loc) => latLngToVector3(loc.lat, loc.lng, 1.004)),
    [],
  );

  useFrame(() => {
    const { network } = progressRef.current;

    if (network <= 0) {
      meshRefs.current.forEach((mesh) => {
        if (mesh) mesh.visible = false;
      });
      return;
    }

    const activeIndex = Math.min(2, Math.floor(network * 3));

    meshRefs.current.forEach((mesh, index) => {
      if (!mesh) return;
      mesh.visible = true;

      const isActive = index === activeIndex;
      const targetScale = isActive ? ACTIVE_SCALE : INACTIVE_SCALE;
      const nextScale = THREE.MathUtils.lerp(mesh.scale.x, targetScale, EASE);
      mesh.scale.setScalar(nextScale);

      const material = mesh.material as THREE.MeshBasicMaterial;
      material.opacity = THREE.MathUtils.lerp(
        material.opacity,
        isActive ? ACTIVE_OPACITY : INACTIVE_OPACITY,
        EASE,
      );
    });
  });

  return (
    <>
      {positions.map((position, index) => (
        <mesh
          key={NETWORK_LOCATIONS[index].code}
          ref={(el) => {
            meshRefs.current[index] = el;
          }}
          position={position}
          visible={false}
          scale={INACTIVE_SCALE}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#d4ac6e" transparent opacity={0} />
        </mesh>
      ))}
    </>
  );
}
