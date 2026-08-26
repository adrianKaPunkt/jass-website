"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { GlobeBackGlow } from "./GlobeBackGlow";
import { GlobeFrontGlow } from "./GlobeFrontGlow";
import { GlobeLights } from "./GlobeLights";
import { GlobeMarkers, NETWORK_LOCATIONS, getMarkerTargetRotationY } from "./GlobeMarkers";
import { GlobeMaterial } from "./GlobeMaterial";
import { getGlobeLayoutPreset } from "./globe.config";
import { computeNetworkMetrics } from "./networkProgress";

export function GlobeScene() {
  const groupRef = useRef<THREE.Group>(null);
  const earthRef = useRef<THREE.Mesh>(null);
  const scrollProgressRef = useRef({
    network: 0,
    rotation: 0,
  });

  const { size, viewport } = useThree();
  const layout = useMemo(() => getGlobeLayoutPreset(size.width), [size.width]);

  const [colorMap, bumpMap] = useTexture([
    "/earth/textures/earth-color.jpg",
    "/earth/textures/earth-bump.jpg",
  ]);

  const preparedColorMap = useMemo(() => {
    const texture = colorMap.clone();
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, [colorMap]);

  const preparedBumpMap = useMemo(() => {
    const texture = bumpMap.clone();
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;
    return texture;
  }, [bumpMap]);

  const referenceSize = Math.min(viewport.width, viewport.height);
  const earthRadius = referenceSize * layout.radiusFactor;

  // Nudges the resting (Hero/Profil/Leistungen/Flotte) position up by 10% of
  // the viewport height, on top of the existing radius-based offset.
  const initialY =
    -viewport.height / 2 - earthRadius * layout.initial.yRadiusOffset + viewport.height * 0.1;

  const markerTargetAngles = useMemo(
    () => NETWORK_LOCATIONS.map((loc) => getMarkerTargetRotationY(loc.lat, loc.lng)),
    [],
  );

  useEffect(() => {
    const updateScrollProgress = () => {
      const { network, networkStart } = computeNetworkMetrics(layout);
      const rotationRange = Math.max(networkStart, window.innerHeight * layout.scrollRangeVh, 1);

      scrollProgressRef.current = {
        network,
        rotation: clamp(window.scrollY / rotationRange, 0, 1),
      };
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [layout]);

  useFrame(() => {
    if (!groupRef.current || !earthRef.current) return;

    const { network, rotation } = scrollProgressRef.current;
    const networkProgress = smoothstep(0, 1, network);
    const driftProgress = smoothstep(0.45, 1, network);
    const targetScale = lerp(
      layout.initial.scale,
      lerp(layout.story.scale, layout.final.scale, driftProgress),
      networkProgress,
    );
    const targetX = lerp(
      viewport.width * layout.initial.xFactor,
      lerp(
        viewport.width * layout.story.xFactor,
        viewport.width * layout.final.xFactor,
        driftProgress,
      ),
      networkProgress,
    );
    const targetY = lerp(
      initialY,
      lerp(
        viewport.height * layout.story.yFactor,
        viewport.height * layout.final.yFactor,
        driftProgress,
      ),
      networkProgress,
    );

    groupRef.current.position.lerp(new THREE.Vector3(targetX, targetY, 0), 0.08);
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      lerp(-0.04, 0.03, driftProgress),
      0.08,
    );

    // Free spin only until the Network section is reached. From there the
    // globe stops idling and instead swings to face whichever location is
    // active for the current third of the section's scroll range.
    const targetRotationY =
      network > 0
        ? markerTargetAngles[Math.min(2, Math.floor(network * 3))]
        : -0.45 + rotation * Math.PI * 1.7;

    earthRef.current.rotation.y = THREE.MathUtils.lerp(
      earthRef.current.rotation.y,
      targetRotationY,
      0.08,
    );
  });

  return (
    <>
      <GlobeLights />

      <group
        ref={groupRef}
        position={[viewport.width * layout.initial.xFactor, initialY, 0]}
        scale={layout.initial.scale}
      >
        <GlobeBackGlow radius={earthRadius} />
        <mesh ref={earthRef} scale={earthRadius} rotation={[0.08, -0.45, 0]}>
          <sphereGeometry args={[1, 128, 128]} />
          <GlobeMaterial colorMap={preparedColorMap} bumpMap={preparedBumpMap} />
          <GlobeMarkers progressRef={scrollProgressRef} />
        </mesh>
        <GlobeFrontGlow radius={earthRadius} />
      </group>
    </>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

function smoothstep(edge0: number, edge1: number, value: number) {
  const progress = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return progress * progress * (3 - 2 * progress);
}
