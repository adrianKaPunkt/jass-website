"use client";

import React from "react";
import { Container } from "@/components/Container";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

const Hero = () => {
  const { scrollY } = useScroll();

  const scrollOpacity = useTransform(scrollY, [0, 260], [1, 0]);
  const scrollOffsetY = useTransform(scrollY, [0, 260], [0, -16]);

  return (
    <section id="hero" className="relative z-40 mt-19 mb-35 overflow-hidden lg:mt-[20vh]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="flex items-center justify-center"
            style={{
              opacity: scrollOpacity,
              y: scrollOffsetY,
            }}
          >
            <div className="w-[60%] mx-auto text-center">
              <h1 className="text-primary dark:text-white">
                Secure Aviation Operations for Government Missions.
              </h1>

              <p className="mt-8 text-sm text-secondary dark:text-white lg:text-base">
                Specialized Aviation and Operational Support for Governmental Institutions,
                International Organizations and Security Authorities.
              </p>

              <div className="mt-8 flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
                <div className="w-full cursor-pointer bg-primary px-6 py-4 text-center text-sm text-white hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-secondary lg:w-fit">
                  <Link href="#kontakt">MISSION REQUEST</Link>
                </div>

                <div className="w-full cursor-pointer border border-primary px-6 py-4 text-center text-sm hover:border-secondary dark:hover:border-white lg:w-fit">
                  <Link href="#leistungen">OUR SERVICES</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
