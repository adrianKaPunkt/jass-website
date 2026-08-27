"use client";

export function GlobeLights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[-4.5, 2.8, 6]} intensity={3.65} color="#d8e9f8" />
      <directionalLight position={[4, -1.2, -3]} intensity={0.68} color="#1769B0" />
    </>
  );
}
