"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { EarthLights } from "./EarthLights";
import { EarthMaterial } from "./EarthMaterial";
import { getEarthLayoutPreset } from "./earth.config";

export function EarthScene() {
  const groupRef = useRef<THREE.Group>(null);
  const earthRef = useRef<THREE.Mesh>(null);
  const scrollProgressRef = useRef({
    network: 0,
    rotation: 0,
  });

  const { size, viewport } = useThree();
  const layout = useMemo(() => getEarthLayoutPreset(size.width), [size.width]);

  const [colorMap, bumpMap] = useTexture([
    "/earth/textures/earth-color.jpg",
    "/earth/textures/earth-bump.jpg",
  ]);

  const preparedColorMap = useMemo(() => {
    const texture = colorMap.clone();
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, [colorMap]);

  const preparedBumpMap = useMemo(() => {
    const texture = bumpMap.clone();
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;
    return texture;
  }, [bumpMap]);

  const referenceSize = Math.min(viewport.width, viewport.height);
  const earthRadius = referenceSize * layout.radiusFactor;

  useEffect(() => {
    const updateScrollProgress = () => {
      const network = document.getElementById("netzwerk");
      const networkTop = network
        ? network.getBoundingClientRect().top + window.scrollY
        : window.innerHeight * layout.scrollRangeVh;
      const networkRange = Math.max(window.innerHeight * layout.networkRangeVh, 1);
      const networkStart = Math.max(networkTop - window.innerHeight * 0.45, 0);
      const rotationRange = Math.max(networkStart, window.innerHeight * layout.scrollRangeVh, 1);

      scrollProgressRef.current = {
        network: clamp((window.scrollY - networkStart) / networkRange, 0, 1),
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
  }, [layout.networkRangeVh, layout.scrollRangeVh]);

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
      -viewport.height / 2 - earthRadius * layout.initial.yRadiusOffset,
      lerp(
        viewport.height * layout.story.yFactor,
        viewport.height * layout.final.yFactor,
        driftProgress,
      ),
      networkProgress,
    );

    groupRef.current.position.lerp(new THREE.Vector3(targetX, targetY, 0), 0.08);
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.08,
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      lerp(-0.04, 0.03, driftProgress),
      0.08,
    );

    earthRef.current.rotation.y = THREE.MathUtils.lerp(
      earthRef.current.rotation.y,
      -0.45 + rotation * Math.PI * 1.7,
      0.08,
    );
  });

  return (
    <>
      <EarthLights />

      <group
        ref={groupRef}
        position={[
          viewport.width * layout.initial.xFactor,
          -viewport.height / 2 - earthRadius * layout.initial.yRadiusOffset,
          0,
        ]}
        scale={layout.initial.scale}
      >
        <mesh ref={earthRef} scale={earthRadius} rotation={[0.08, -0.45, 0]}>
          <sphereGeometry args={[1, 128, 128]} />
          <EarthMaterial colorMap={preparedColorMap} bumpMap={preparedBumpMap} />
        </mesh>
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
