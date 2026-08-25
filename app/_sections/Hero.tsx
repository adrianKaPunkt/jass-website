import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="eyebrow">Integrated Government Air Operations</div>
        <div className="text-secondary text-sm mb-6">INTEGRATED GOVERNMENT AIR OPERATIONS</div>
        <h1>
          Luftoperationen für
          <br />
          staatliche <em>Sondermissionen.</em>
        </h1>
        <p>
          J.A.S.S. plant, koordiniert und führt integrierte Luft- und Missionseinsätze für Behörden
          und internationale Organisationen durch — von Rückführungsmissionen bis zu komplexen
          Sondereinsätzen.
        </p>
        <div className="hero-ctas">
          <a className="btn-primary" href="#kontakt">
            Mission anfragen
          </a>
          <a className="btn-ghost" href="#leistungen">
            Leistungen ansehen
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <b>3</b>
            <span>Operationsstandorte weltweit</span>
          </div>
          <div className="stat">
            <b>8.500 km</b>
            <span>Maximale Reichweite (ACJ319)</span>
          </div>
          <div className="stat">
            <b>2</b>
            <span>Speziell konfigurierte Missionsflugzeuge</span>
          </div>
          <div className="stat">
            <b>24/7</b>
            <span>Einsatzkoordination &amp; Behördenanbindung</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
