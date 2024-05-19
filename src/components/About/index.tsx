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
      <div
        className="relative flex flex-col gap-4 items-center justify-center px-4 flex-wrap mt-16 md:mt-20"
        data-aos="zoom-out"
      >
        <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-center">
          Nicolas Sanjaya
        </h1>
        <TypewriterEffectSmooth words={words} />
      </div>
      <h2
        data-aos="fade-up"
        className="text-md md:text-xl dark:text-neutral-200 mt-4 text-center text-wrap px-4"
      >
        6th semester student majoring in informatics is likely someone who has
        developed a strong foundation in both theoretical principles and
        practical applications of information technology and computer science
      </h2>
      <div
        className="flex gap-8 justify-center mt-12 scale-75 md:scale-100"
        data-aos="zoom-in"
      >
        <Link
          href={"https://github.com/NicolasSanjaya"}
          target="_blank"
          className="hover:scale-110 transition-all duration-500"
          aria-label="Github"
        >
          <FaGithub size={70} />
        </Link>
        <Link
          href={"https://linkedin.com/in/nicolassanjaya"}
          target="_blank"
          className="hover:scale-110 transition-all duration-500"
          aria-label="Linkedin"
        >
          <FaLinkedin size={70} />
        </Link>
      </div>
    </AuroraBackground>
  );
}
