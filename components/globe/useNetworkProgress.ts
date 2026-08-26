"use client";

import { useEffect, useState } from "react";
import { getGlobeLayoutPreset } from "./globe.config";
import { computeNetworkMetrics } from "./networkProgress";

/**
 * DOM-side (React state) counterpart to the ref-based progress tracked
 * inside GlobeScene's useFrame loop. Drives the Network section's text
 * crossfade and active-location list — same underlying scroll math as
 * networkProgress.ts, just re-rendered instead of read every frame.
 */
export function useNetworkProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const layout = getGlobeLayoutPreset(window.innerWidth);
      const { network } = computeNetworkMetrics(layout);
      setProgress(network);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}
