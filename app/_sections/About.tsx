"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { motion } from "motion/react";

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  const textViewport = {
    once: false,
    amount: 0.2,
    margin: isDesktop ? "-28% 0px -60% 0px" : "-12% 0px -34% 0px",
  };
  const cardsViewport = {
    once: false,
    amount: 0.2,
    margin: isDesktop ? "-28% 0px -50% 0px" : "-12% 0px -30% 0px",
  };

  return (
    <section id="about" className="py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={textViewport}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label mb-2">COMPANY PROFILE</div>
            <h2 className="mb-8">
              SPECIALIZED AVIATION AND OPERATIONAL SUPPORT FOR GOVERNMENT INSTITUTIONS
            </h2>
            <p>
              J.A.S.S. is designed for missions in which security, discretion and precise
              coordination are essential.
            </p>
            <p>
              Our approach combines dedicated aviation capabilities with mission-specific planning
              and operational support. Each assignment is prepared individually — from logistical
              coordination and aircraft deployment to security requirements and specialist
              personnel.
            </p>
            <p>
              With a focus on reliability, confidentiality and regulatory compliance, J.A.S.S.
              provides a controlled operational environment for complex governmental missions across
              Europe and beyond.
            </p>
          </motion.div>
          <div></div>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-2 dark:border-white/10 dark:bg-white/10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={cardsViewport}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-white p-7 dark:bg-black">
            <div className="font-mono text-xs tracking-widest text-primary">01</div>
            <h3 className="mt-3">Flugtransport</h3>
            <p className="mt-2 text-sm">Sicherer, zuverlässiger Lufttransport mit passenden Flugzeuglösungen.</p>
          </div>
          <div className="bg-white p-7 dark:bg-black">
            <div className="font-mono text-xs tracking-widest text-primary">02</div>
            <h3 className="mt-3">Sicherheit</h3>
            <p className="mt-2 text-sm">Spezialisierte Sicherheitskonzepte und geschultes Personal für jede Mission.</p>
          </div>
          <div className="bg-white p-7 dark:bg-black">
            <div className="font-mono text-xs tracking-widest text-primary">03</div>
            <h3 className="mt-3">Planung</h3>
            <p className="mt-2 text-sm">Umfassende Planung und Koordination aller operativen und logistischen Abläufe.</p>
          </div>
          <div className="bg-white p-7 dark:bg-black">
            <div className="font-mono text-xs tracking-widest text-primary">04</div>
            <h3 className="mt-3">Behörde</h3>
            <p className="mt-2 text-sm">Behördliche Koordination und Kommunikation auf allen Ebenen.</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
