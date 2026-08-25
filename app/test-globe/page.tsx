"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import type { GlobeMethods } from "react-globe.gl";

// react-globe.gl touches `window` at import time, so it must stay client-only.
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

type Airport = {
  code: string;
  name: string;
  lat: number;
  lng: number;
};

// Real IATA coordinates for the network shown in app/_sections/Network.tsx
const AIRPORTS: Airport[] = [
  { code: "LUX", name: "Luxemburg", lat: 49.6233, lng: 6.2044 },
  { code: "TBJ", name: "Tabarka (Tunesien)", lat: 36.9758, lng: 8.8779 },
  { code: "TMJ", name: "Termez (Usbekistan)", lat: 37.2851, lng: 67.3094 },
];

const ROUTE_COLOR = "#d4ac6e";
const ROUTES = [
  [AIRPORTS[0], AIRPORTS[1]],
  [AIRPORTS[0], AIRPORTS[2]],
  [AIRPORTS[1], AIRPORTS[2]],
].map(([from, to]) => ({
  startLat: from.lat,
  startLng: from.lng,
  endLat: to.lat,
  endLng: to.lng,
  color: ROUTE_COLOR,
}));

export default function TestGlobePage() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [globeMaterial, setGlobeMaterial] = useState<THREE.MeshStandardMaterial | null>(null);

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Same textures + material params as components/earth-old/EarthMaterial.tsx.
  // Loaded manually (instead of the globeImageUrl/bumpImageUrl props) because
  // react-globe.gl nulls out `color` once a globeImageUrl texture loads, which
  // would strip the hero's #8fa2ad tint.
  useEffect(() => {
    let cancelled = false;
    const loader = new THREE.TextureLoader();

    Promise.all([
      loader.loadAsync("/earth/textures/earth-color.jpg"),
      loader.loadAsync("/earth/textures/earth-bump.jpg"),
    ]).then(([colorMap, bumpMap]) => {
      if (cancelled) return;

      colorMap.wrapS = THREE.RepeatWrapping;
      colorMap.wrapT = THREE.ClampToEdgeWrapping;
      colorMap.colorSpace = THREE.SRGBColorSpace;
      colorMap.needsUpdate = true;

      bumpMap.wrapS = THREE.RepeatWrapping;
      bumpMap.wrapT = THREE.ClampToEdgeWrapping;
      bumpMap.needsUpdate = true;

      setGlobeMaterial(
        new THREE.MeshStandardMaterial({
          map: colorMap,
          bumpMap,
          bumpScale: 0.012,
          color: new THREE.Color("#8fa2ad"),
          emissive: new THREE.Color("#07111a"),
          emissiveIntensity: 0.08,
          roughness: 0.96,
          metalness: 0.02,
        }),
      );
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Same lights as components/earth-old/EarthLights.tsx.
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    const key = new THREE.DirectionalLight("#d9e7f2", 3.2);
    key.position.set(-4.5, 2.8, 6);
    const fill = new THREE.DirectionalLight("#4f8fb9", 0.55);
    fill.position.set(4, -1.2, -3);

    globe.lights([new THREE.AmbientLight(0xffffff, 0.12), key, fill]);
    globe.pointOfView({ lat: 28, lng: 25, altitude: 2.2 }, 0);
  }, [globeMaterial]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050709]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(51,92,128,0.13),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(89,131,166,0.14),transparent_44%),linear-gradient(180deg,#050709_0%,#080b10_52%,#020304_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(176,205,229,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(176,205,229,0.8)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_50%_55%,black_0%,transparent_68%)]" />

      <div className="pointer-events-none absolute left-6 top-6 z-10 max-w-sm rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-white/80 backdrop-blur">
        <p className="font-semibold text-white">react-globe.gl — Vergleichsseite</p>
        <p className="mt-1 text-white/60">
          Gleiche Textur (earth-color / earth-bump), gleiches Material (roughness 0.96, metalness
          0.02, emissive #07111a) und dieselben Lichter (Ambient 0.12 + 2 Directional Lights) wie
          die Hero-Erde. Nur zum Anschauen — die echte Hero-Komponente ist unverändert.
        </p>
      </div>

      {size.width > 0 && globeMaterial && (
        <Globe
          ref={globeRef}
          width={size.width}
          height={size.height}
          backgroundColor="rgba(0,0,0,0)"
          rendererConfig={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          showAtmosphere={false}
          globeMaterial={globeMaterial}
          pointsData={AIRPORTS}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => ROUTE_COLOR}
          pointAltitude={0.012}
          pointRadius={0.45}
          pointLabel={(d: object) => {
            const airport = d as Airport;
            return `<div style="font-family:sans-serif;font-size:12px;color:#f2efe6;background:rgba(5,7,9,0.85);padding:4px 8px;border-radius:4px;border:1px solid rgba(212,172,110,0.4)"><b>${airport.code}</b> — ${airport.name}</div>`;
          }}
          arcsData={ROUTES}
          arcColor="color"
          arcAltitude={0.28}
          arcStroke={0.6}
          arcDashLength={0.5}
          arcDashGap={0.3}
          arcDashAnimateTime={3000}
        />
      )}
    </div>
  );
}
