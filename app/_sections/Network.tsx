"use client";

import { Container } from "@/components/Container";
import { NETWORK_LOCATIONS } from "@/components/globe/GlobeMarkers";
import { useNetworkProgress } from "@/components/globe/useNetworkProgress";

const Network = () => {
  const progress = useNetworkProgress();
  const activeIndex = Math.min(2, Math.floor(progress * 3));

  return (
    // Taller than the viewport on purpose: the globe's rotation/position for
    // this section is driven by scroll progress across roughly 1.2-1.35
    // viewport-heights (components/globe/globe.config.ts networkRangeVh).
    // The sticky inner panel keeps this section's own text in view for that
    // entire span instead of scrolling past it early.
    <section id="netzwerk" className="relative min-h-[240vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            {/* Left column: kept empty on purpose, top to bottom — this is the
                whitespace the persistent globe (positioned by
                components/globe/GlobeScene.tsx) drifts through and arrives in
                as this section is scrolled. */}
            <div className="flex min-h-[320px] items-end justify-start">
              <ul className="flex flex-col gap-3">
                {NETWORK_LOCATIONS.map((location, index) => {
                  const isActive = index === activeIndex && progress > 0;
                  return (
                    <li
                      key={location.code}
                      className={`font-mono text-sm tracking-[0.1em] transition-all duration-300 ${
                        isActive ? "scale-110 text-[#d4ac6e]" : "text-slate-600"
                      }`}
                      style={{ transformOrigin: "left center" }}
                    >
                      {location.code}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <div className="mb-12">
                <div className="mb-4 text-xs tracking-[0.24em] text-[#d4ac6e] uppercase">
                  Global Operations Network
                </div>
                <h2 className="text-3xl leading-tight font-semibold text-white sm:text-4xl">
                  Internationale Präsenz für weltweite Behördenmissionen
                </h2>
                <p className="mt-4 text-slate-400">
                  Zentrale Einsatzsteuerung aus Luxemburg kombiniert mit regionalen Stützpunkten
                  für kurze Reaktionszeiten.
                </p>
              </div>

              <div className="relative min-h-[220px]">
                {NETWORK_LOCATIONS.map((location, index) => (
                  <div
                    key={location.code}
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      opacity: index === activeIndex ? 1 : 0,
                      pointerEvents: index === activeIndex ? "auto" : "none",
                    }}
                  >
                    <div className="mb-2 text-xs tracking-[0.16em] text-[#d4ac6e] uppercase">
                      {location.code} — {location.country}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{location.name}</h3>
                    <p className="mt-4 max-w-md text-slate-400">{location.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Network;
