export type GlobeScrollLayout = {
  scrollRangeVh: number;
  networkRangeVh: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Scroll progress (0-1) across the #netzwerk section, plus the document Y
 * where that range starts. Shared by GlobeScene (drives rotation/position in
 * the WebGL scene) and useNetworkProgress (drives the DOM text/markers in
 * Network.tsx) so both stay tied to the exact same scroll math.
 */
export function computeNetworkMetrics(layout: GlobeScrollLayout) {
  if (typeof window === "undefined") {
    return { network: 0, networkStart: 0 };
  }

  const networkEl = document.getElementById("netzwerk");
  const networkTop = networkEl
    ? networkEl.getBoundingClientRect().top + window.scrollY
    : window.innerHeight * layout.scrollRangeVh;
  const networkRange = Math.max(window.innerHeight * layout.networkRangeVh, 1);
  // No pre-roll: progress 0 lines up with the section's own top hitting the
  // viewport top, i.e. exactly when its sticky panel engages — otherwise the
  // first third (LUX) finishes before the section's text is even on screen.
  const networkStart = Math.max(networkTop, 0);
  const network = clamp((window.scrollY - networkStart) / networkRange, 0, 1);

  return { network, networkStart };
}
