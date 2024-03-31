"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { TypewriterEffectSmooth } from "../ui/typewritter-effect";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function About() {
  const words = [
    {
      text: "Fullstack",
      className: "text-xl md:text-4xl",
    },
    {
      text: "Web",
      className: "text-xl md:text-4xl",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500 text-xl md:text-4xl",
    },
  ];
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 flex-wrap mt-16"
      >
        <h1 className="text-4xl md:text-7xl font-bold dark:text-white text-center">
          Nicolas Sanjaya
        </h1>
        <TypewriterEffectSmooth words={words} />
        <h2 className="font-extralight text-xl md:text-2xl dark:text-neutral-200 py-4 text-center text-wrap">
          6th semester student majoring in informatics is likely someone who has
          developed a strong foundation in both theoretical principles and
          practical applications of information technology and computer science
        </h2>
        <div className="flex gap-8 justify-center mt-4 scale-75 md:scale-100">
          <Link
            href={"https://github.com/NicolasSanjaya"}
            target="_blank"
            className="hover:scale-110 transition-all duration-500"
          >
            <FaGithub size={70} />
          </Link>
          <Link
            href={"https://linkedin.com/in/nicolassanjaya"}
            target="_blank"
            className="hover:scale-110 transition-all duration-500"
          >
            <FaLinkedin size={70} />
          </Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
