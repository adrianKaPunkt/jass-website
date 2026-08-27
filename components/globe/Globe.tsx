"use client";

import { useEffect, useState } from "react";
import { GlobeCanvas } from "./GlobeCanvas";

export function Globe() {
  const [shouldRenderGlobe, setShouldRenderGlobe] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateVisibility = () => setShouldRenderGlobe(mediaQuery.matches);

    updateVisibility();
    mediaQuery.addEventListener("change", updateVisibility);

    return () => {
      mediaQuery.removeEventListener("change", updateVisibility);
    };
  }, []);

  if (!shouldRenderGlobe) {
    return null;
  }

  return (
    <>
      <div
        className="
          pointer-events-none
          hidden
          lg:block
          absolute
          inset-x-0
          top-0
          z-0
          h-[760vh]
          overflow-clip
        "
        aria-hidden="true"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#050709_0%,#080b10_52%,#020304_100%)]" />
          <div className="absolute inset-0 opacity-[0.045] bg-amber-50 [background-image:linear-gradient(rgba(176,205,229,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(176,205,229,0.8)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_50%_55%,black_0%,transparent_68%)]" />
        </div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-30
          h-[760vh]
          overflow-clip
        "
        aria-hidden="true"
      >
        <div className="sticky top-0 h-screen overflow-hidden dark:bg-transparent bg-blue-200">
          <GlobeCanvas />
        </div>
      </div>
    </>
  );
}
