"use client";

import { useMemo } from "react";
import * as THREE from "three";

type GlobeFrontGlowProps = {
  radius: number;
  color?: string;
  intensity?: number;
  scaleMultiplier?: number;
  power?: number;
};

export const GLOBE_FRONT_GLOW_DEFAULTS = {
  color: "#1769B0",
  intensity: 0.08,
  scaleMultiplier: 1.006,
  power: 1.7,
} as const;

const VERTEX_SHADER = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDirection;

  void main() {
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDirection = normalize(-viewPosition.xyz);
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 glowColor;
  uniform float intensity;
  uniform float power;
  varying vec3 vNormal;
  varying vec3 vViewDirection;

  void main() {
    float frontLight = max(dot(vNormal, vViewDirection), 0.0);
    float alpha = pow(frontLight, power) * intensity;
    gl_FragColor = vec4(glowColor, alpha);
  }
`;

export function GlobeFrontGlow({
  radius,
  color = GLOBE_FRONT_GLOW_DEFAULTS.color,
  intensity = GLOBE_FRONT_GLOW_DEFAULTS.intensity,
  scaleMultiplier = GLOBE_FRONT_GLOW_DEFAULTS.scaleMultiplier,
  power = GLOBE_FRONT_GLOW_DEFAULTS.power,
}: GlobeFrontGlowProps) {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          glowColor: { value: new THREE.Color(color) },
          intensity: { value: intensity },
          power: { value: power },
        },
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        depthTest: true,
      }),
    [color, intensity, power],
  );

  return (
    <mesh scale={radius * scaleMultiplier} renderOrder={1}>
      <sphereGeometry args={[1, 96, 96]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}
