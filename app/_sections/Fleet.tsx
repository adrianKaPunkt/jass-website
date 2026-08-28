import React from "react";
import { Container } from "@/components/Container";

const Fleet = () => {
  return (
    <section className="bg-transparent" id="fleet">
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <Container>
        <div className="section-head">
          <div className="section-label mb-3">Mission Fleet</div>
          <h2 className="mb-4">Speziell konfigurierte Missionsluftfahrzeuge</h2>
          <p>
            Zwei Plattformen, flexibel eingesetzt nach Einsatzprofil, Personenkapazität und
            operativen Anforderungen.
          </p>
        </div>
        <div className="flex flex-col gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10">
          <div className="grid grid-cols-1 gap-10 bg-white p-8 sm:p-11 lg:grid-cols-[1.3fr_1fr] dark:bg-black">
            <div>
              <div className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                Long Range Mission Platform
              </div>
              <h3 className="mt-2 text-2xl">Airbus ACJ319</h3>
              <p className="mt-3 max-w-md text-sm">
                Speziell konzipierte Missionskabine mit getrennten Funktionsbereichen für
                Einsatzführung, medizinische Versorgung und sicheren Transport auf internationalen
                Langstrecken.
              </p>
              <div className="mt-6 flex gap-10">
                <div>
                  <div className="font-mono text-xl font-semibold text-gold">8.500 km</div>
                  <span className="text-xs tracking-wide text-slate-500 uppercase">
                    Reichweite
                  </span>
                </div>
                <div>
                  <div className="font-mono text-xl font-semibold text-gold">37</div>
                  <span className="text-xs tracking-wide text-slate-500 uppercase">Kapazität</span>
                </div>
              </div>
            </div>
            <ul className="flex flex-col gap-2 self-center border-t border-black/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 dark:border-white/10">
              {[
                "Internationale Behördenmissionen",
                "Rückführungsmissionen",
                "Langstreckeneinsätze",
                "Komplexe internationale Operationen",
              ].map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-sm text-secondary dark:text-slate-200"
                >
                  <span className="absolute left-0 text-primary">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-10 bg-white p-8 sm:p-11 lg:grid-cols-[1.3fr_1fr] dark:bg-black">
            <div>
              <div className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                Rapid Response Platform
              </div>
              <h3 className="mt-2 text-2xl">Bombardier Challenger 604</h3>
              <p className="mt-3 max-w-md text-sm">
                Kompakte, wirtschaftliche Kabinenkonfiguration für kurzfristige Behördeneinsätze —
                auch auf kleineren Flughäfen einsetzbar.
              </p>
              <div className="mt-6 flex gap-10">
                <div>
                  <div className="font-mono text-xl font-semibold text-gold">7.000 km</div>
                  <span className="text-xs tracking-wide text-slate-500 uppercase">
                    Reichweite
                  </span>
                </div>
                <div>
                  <div className="font-mono text-xl font-semibold text-gold">12</div>
                  <span className="text-xs tracking-wide text-slate-500 uppercase">Kapazität</span>
                </div>
              </div>
            </div>
            <ul className="flex flex-col gap-2 self-center border-t border-black/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 dark:border-white/10">
              {[
                "Kurzfristige Behördeneinsätze",
                "Schnelle Verlegung kleiner Einsatzteams",
                "Flexible Sondermissionen",
                "Nutzung kleinerer Flughäfen möglich",
              ].map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-sm text-secondary dark:text-slate-200"
                >
                  <span className="absolute left-0 text-primary">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-px flex flex-col gap-4 border border-dashed border-black/15 p-8 sm:flex-row sm:items-center sm:justify-between dark:border-white/15">
          <div>
            <div className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              In Evaluierung — Q4 2027
            </div>
            <div className="mt-1 text-sm font-semibold text-secondary dark:text-white">
              Airbus ACH175
            </div>
          </div>
          <p className="max-w-md text-sm">
            Geplante Ergänzung der Flotte für regionale Kurzstreckeneinsätze, unabhängig von der
            Flughafeninfrastruktur.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Fleet;
