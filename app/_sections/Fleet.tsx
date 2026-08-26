import React from "react";
import { Container } from "@/components/Container";

const Fleet = () => {
  return (
    <section className="bg-transparent border-t-secondary" id="fleet">
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <Container>
        <div className="section-head">
          <div className="section-label">Mission Fleet</div>
          <h2>Speziell konfigurierte Missionsluftfahrzeuge</h2>
          <p>
            Zwei Plattformen, flexibel eingesetzt nach Einsatzprofil, Personenkapazität und
            operativen Anforderungen.
          </p>
        </div>
        <div className="fleet-cards">
          <div className="fcard">
            <div>
              <div className="tag">Long Range Mission Platform</div>
              <h3>Airbus ACJ319</h3>
              <p>
                Speziell konzipierte Missionskabine mit getrennten Funktionsbereichen für
                Einsatzführung, medizinische Versorgung und sicheren Transport auf internationalen
                Langstrecken.
              </p>
              <div className="specs">
                <div>
                  <b>8.500 km</b>
                  <span>Reichweite</span>
                </div>
                <div>
                  <b>37</b>
                  <span>Kapazität</span>
                </div>
              </div>
            </div>
            <div className="profile-list">
              <ul>
                <li>Internationale Behördenmissionen</li>
                <li>Rückführungsmissionen</li>
                <li>Langstreckeneinsätze</li>
                <li>Komplexe internationale Operationen</li>
              </ul>
            </div>
          </div>
          <div className="fcard">
            <div>
              <div className="tag">Rapid Response Platform</div>
              <h3>Bombardier Challenger 604</h3>
              <p>
                Kompakte, wirtschaftliche Kabinenkonfiguration für kurzfristige Behördeneinsätze —
                auch auf kleineren Flughäfen einsetzbar.
              </p>
              <div className="specs">
                <div>
                  <b>7.000 km</b>
                  <span>Reichweite</span>
                </div>
                <div>
                  <b>12</b>
                  <span>Kapazität</span>
                </div>
              </div>
            </div>
            <div className="profile-list">
              <ul>
                <li>Kurzfristige Behördeneinsätze</li>
                <li>Schnelle Verlegung kleiner Einsatzteams</li>
                <li>Flexible Sondermissionen</li>
                <li>Nutzung kleinerer Flughäfen möglich</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fleet-future">
          <div className="l">
            <span>In Evaluierung — Q4 2027</span>Airbus ACH175
          </div>
          <div className="r">
            Geplante Ergänzung der Flotte für regionale Kurzstreckeneinsätze, unabhängig von der
            Flughafeninfrastruktur.
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Fleet;
