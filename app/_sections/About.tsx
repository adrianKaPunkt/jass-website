"use client";

import { Container } from "@/components/Container";
import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -50% 0px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label mb-2">UNTERNEHMENSPROFIL</div>
            <h2 className="mb-8">EINE ZENTRALE GESAMTLÖSUNG FÜR KOMPLEXE MISSIONEN</h2>
            <p>
              J.A.S.S. bündelt Lufttransport, Einsatzplanung, Sicherheitskoordination und operative
              Unterstützung zu einer integrierten Lösung für nationale und internationale
              Behördeneinsätze.
            </p>
            <p>
              Eigene Flotte, eigene Piloten, eigene Ärzte, eigene Sicherheit — jede Mission wird
              individuell an die Anforderungen des Auftraggebers angepasst.
            </p>
          </motion.div>
          <div></div>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "0px 0px -50% 0px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pcard">
            <div className="num">01</div>
            <h3>Flugtransport</h3>
            <p>Sicherer, zuverlässiger Lufttransport mit passenden Flugzeuglösungen.</p>
          </div>
          <div className="pcard">
            <div className="num">02</div>
            <h3>Sicherheit</h3>
            <p>Spezialisierte Sicherheitskonzepte und geschultes Personal für jede Mission.</p>
          </div>
          <div className="pcard">
            <div className="num">03</div>
            <h3>Planung</h3>
            <p>Umfassende Planung und Koordination aller operativen und logistischen Abläufe.</p>
          </div>
          <div className="pcard">
            <div className="num">04</div>
            <h3>Behörde</h3>
            <p>Behördliche Koordination und Kommunikation auf allen Ebenen.</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
