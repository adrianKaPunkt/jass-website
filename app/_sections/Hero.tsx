import React from "react";
import { Container } from "@/components/Container";
import { JassLogo } from "@/components/JassLogo";

const Hero = () => {
  return (
    <section id="hero" className="relative h-[60vh] overflow-hidden flex-col mt-[20vh] z-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div>
              <div className="text-primary text-sm mb-2 tracking-[0.4em]">
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
              <a
                className="bg-primary px-6 py-4 text-sm hover:bg-white hover:text-secondary"
                href="#kontakt"
              >
                MISSION ANFRAGEN
              </a>
              <a
                className="border border-primary text-sm px-6 py-4 hover:bg-primary"
                href="#leistungen"
              >
                LEISTUNGEN ANSEHEN
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <JassLogo className="w-[60%] opacity-80" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
