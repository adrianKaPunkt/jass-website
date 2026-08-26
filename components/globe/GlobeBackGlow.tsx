"use client";

import { useMemo } from "react";
import * as THREE from "three";

type GlobeBackGlowProps = {
  radius: number;
  color?: string;
  intensity?: number;
  sizeMultiplier?: number;
  centerFadeRadius?: number;
  outerFadeRadius?: number;
};

export const GLOBE_BACK_GLOW_DEFAULTS = {
  color: "#1769B0",
  intensity: 0.135,
  sizeMultiplier: 4.8,
  centerFadeRadius: 0.2,
  outerFadeRadius: 0.82,
} as const;

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 glowColor;
  uniform float intensity;
  uniform float centerFadeRadius;
  uniform float outerFadeRadius;
  varying vec2 vUv;

  void main() {
    vec2 offset = vUv - vec2(0.5);
    float distanceFromCenter = length(offset * vec2(0.86, 1.12));
    float centerFade = smoothstep(centerFadeRadius, centerFadeRadius + 0.18, distanceFromCenter);
    float outerFade = 1.0 - smoothstep(outerFadeRadius - 0.48, outerFadeRadius, distanceFromCenter);
    float alpha = centerFade * outerFade * intensity;
    gl_FragColor = vec4(glowColor, alpha);
  }
`;

export function GlobeBackGlow({
  radius,
  color = GLOBE_BACK_GLOW_DEFAULTS.color,
  intensity = GLOBE_BACK_GLOW_DEFAULTS.intensity,
  sizeMultiplier = GLOBE_BACK_GLOW_DEFAULTS.sizeMultiplier,
  centerFadeRadius = GLOBE_BACK_GLOW_DEFAULTS.centerFadeRadius,
  outerFadeRadius = GLOBE_BACK_GLOW_DEFAULTS.outerFadeRadius,
}: GlobeBackGlowProps) {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          glowColor: { value: new THREE.Color(color) },
          intensity: { value: intensity },
          centerFadeRadius: { value: centerFadeRadius },
          outerFadeRadius: { value: outerFadeRadius },
        },
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        depthTest: false,
      }),
    [centerFadeRadius, color, intensity, outerFadeRadius],
  );

  return (
    <mesh position={[0, 0, -0.12]} renderOrder={-2}>
      <planeGeometry args={[radius * sizeMultiplier, radius * sizeMultiplier, 1, 1]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}
