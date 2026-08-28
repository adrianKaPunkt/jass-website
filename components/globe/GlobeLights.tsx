"use client";

type GlobeLightsProps = {
  isDark?: boolean;
};

export function GlobeLights({ isDark = true }: GlobeLightsProps) {
  return (
    <>
      <ambientLight intensity={isDark ? 0.2 : 0.9} />
      <directionalLight
        position={[-4.5, 2.8, 6]}
        intensity={isDark ? 3.65 : 4.4}
        color={isDark ? "#d8e9f8" : "#ffffff"}
      />
      <directionalLight
        position={[4, -1.2, -3]}
        intensity={isDark ? 0.68 : 1.4}
        color={isDark ? "#1769B0" : "#bcdcff"}
      />
    </>
  );
}
