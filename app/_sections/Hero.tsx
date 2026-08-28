"use client";

import React from "react";
import { Container } from "@/components/Container";
import { JassLogo } from "@/components/JassLogo";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

const Hero = () => {
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 260], [1, 0]);
  const scrollOffsetY = useTransform(scrollY, [0, 260], [0, -16]);

  return (
    <section id="hero" className="relative overflow-hidden flex-col mt-19 mb-35 lg:mt-[20vh] z-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            style={{ opacity: scrollOpacity, y: scrollOffsetY }}
          >
            <div>
              <div>
                <div className="text-secondary dark:text-primary text-sm mb-2 tracking-[0.4em]">
                  J.A.S.S.
                </div>
                <h1 className="text-primary dark:text-white">
                  SECURE AVIATION OPERATATIONS FOR GOVERNMENT MISSIONS.
                </h1>
              </div>
              <div className="mt-8">
                <p className="text-secondary dark:text-white text-sm lg:text-base">
                  Specialized Aviation and Operational Support for Governmental Institutions,
                  International Organizations and Security Authorities.
                </p>
              </div>
              <div className="mt-8 flex flex-col lg:flex-row gap-6 w-full ">
                <div className="w-full lg:w-fit bg-primary px-6 py-4 text-sm hover:bg-secondary dark:hover:bg-white text-white hover:text-white dark:hover:text-secondary text-center cursor-pointer">
                  <Link className="" href="#kontakt">
                    MISSION REQUEST
                  </Link>
                </div>
                <div className="border border-primary text-sm px-6 py-4 hover:border-secondary dark:hover:border-white w-full lg:w-fit text-center cursor-pointer">
                  <Link className="" href="#leistungen">
                    OUR SERVICES
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <JassLogo className="w-[60%] opacity-80" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
