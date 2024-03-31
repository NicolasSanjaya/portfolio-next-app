"use client";
import { About } from "@/components/About";
import Skills from "@/components/Skills";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";
import BlurCircle from "@/components/BlurCircle";
import { FaArrowUp } from "react-icons/fa";
import { Projects } from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [active, setActive] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="p-2 md:p-0">
      <nav>
        <motion.div
          initial={{ opacity: 0.0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn(
            `fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-all duration-700 ease-in-out ${
              isScrolled && "drop-shadow-lg"
            }`
          )}
        >
          <Menu setActive={setActive}>
            <button onClick={handleClick}>
              <Link href={"#about"}>
                <MenuItem
                  setActive={setActive}
                  active={null}
                  item="About"
                ></MenuItem>
              </Link>
            </button>
            <Link href={"#skills"}>
              <MenuItem
                setActive={setActive}
                active={null}
                item="Skills"
              ></MenuItem>
            </Link>
            <Link href={"#projects"}>
              <MenuItem
                setActive={setActive}
                active={null}
                item="Projects"
              ></MenuItem>
            </Link>
            <Link href={"#contact"}>
              <MenuItem
                setActive={setActive}
                active={null}
                item="Contact"
              ></MenuItem>
            </Link>
          </Menu>
        </motion.div>
      </nav>
      <section id="#about">
        <About />
      </section>
      <TracingBeam>
        <div className="h-40" id="skills"></div>
        <section>
          <BlurCircle className="absolute -z-[999] -translate-y-32 bg-blue-100" />
          <BlurCircle className="absolute -z-[999] bottom-0 right-2 bg-blue-100" />
          <h1 className="font-bold text-2xl text-center">Skills</h1>
          <Skills />
        </section>
        <section className="my-20" id="projects">
          <Projects />
        </section>
        <div className="h-20" id="contact"></div>
        <section className="my-20">
          <h1 className="text-center font-bold text-2xl">Contact</h1>
          <Contact />
        </section>
        <button
          className={`fixed bg-slate-800 text-white right-4 bottom-4 p-4 rounded-full transition-all duration-500 ${
            isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          onClick={handleClick}
        >
          <FaArrowUp />
        </button>
      </TracingBeam>
    </main>
  );
}
