"use client";

export function GlobeLights() {
  return (
    <>
      <ambientLight intensity={0.18} />
      <directionalLight position={[-4.5, 2.8, 6]} intensity={3.2} color="#d9e7f2" />
      <directionalLight position={[4, -1.2, -3]} intensity={0.55} color="#4f8fb9" />
    </>
  );
}
