"use client";

import { GlobeCanvas } from "./GlobeCanvas";

export function Globe() {
  return (
    <>
      <div
        className="
          pointer-events-none
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(51,92,128,0.13),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(89,131,166,0.14),transparent_44%),linear-gradient(180deg,#050709_0%,#080b10_52%,#020304_100%)]" />
          <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(176,205,229,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(176,205,229,0.8)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_50%_55%,black_0%,transparent_68%)]" />
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
