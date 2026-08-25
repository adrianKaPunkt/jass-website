"use client";

import { EarthCanvas } from "./EarthCanvas";

export function Earth() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
    >
      <EarthCanvas />
    </div>
  );
}
