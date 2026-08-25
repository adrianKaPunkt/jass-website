import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen mt-20 mb-20 overflow-hidden content-center flex-col">
      <div>
        <div>
          <div className="text-primary text-sm mb-6 tracking-[0.4em]">
            INTEGRATED GOVERNMENT AIR OPERATIONS
          </div>
          <h1>LUFTOPERATIONEN FÜR STAATLICHE SONDERMISSIONEN.</h1>
        </div>
        <div className="mt-8">
          <p>
            J.A.S.S. plant, koordiniert und führt integrierte Luft- und Missionseinsätze für
            Behörden und internationale Organisationen durch — von Rückführungsmissionen bis zu
            komplexen Sondereinsätzen.
          </p>
        </div>
        <div className="mt-8 flex gap-6 w-full ">
          <a className="bg-primary p-4 text-sm" href="#kontakt">
            MISSION ANFRAGEN
          </a>
          <a className="btn-ghost" href="#leistungen">
            Leistungen ansehen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
