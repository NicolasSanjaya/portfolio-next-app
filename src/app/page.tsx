"use client";
import { About } from "@/components/About";
import Skills from "@/components/Skills";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { TracingBeam } from "@/components/ui/tracing-beam";
import BlurCircle from "@/components/BlurCircle";
import { FaArrowUp } from "react-icons/fa";
import { Projects } from "@/components/Projects";
import Contact from "@/components/Contact";
import Alert from "@/components/Alert";
import { MdOutlineCloudDownload } from "react-icons/md";
import AOSInit from "@/aos";
import { motion } from "framer-motion";

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
    <div>
      <AOSInit />
      <Alert />
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className={cn(
          `fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-all duration-700 ease-in-out ${
            isScrolled && "drop-shadow-lg"
          }`
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"#about"} onClick={handleClick}>
            <MenuItem
              setActive={setActive}
              active={null}
              item="About"
            ></MenuItem>
          </Link>
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
      </motion.nav>
      <section id="#about">
        <About />
      </section>
      <TracingBeam>
        <section className="mb-20" id="skills">
          <BlurCircle className="absolute -z-[999] top-4 left-4 bg-blue-100" />
          <BlurCircle className="absolute -z-[999] bottom-0 right-2 bg-blue-100" />
          <h1 className="font-bold text-2xl mt-4 mb-10 text-center">Skills</h1>
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section className="mb-20" id="contact">
          <h1 className="text-center font-bold text-2xl mt-4 mb-10">Contact</h1>
          <Contact />
        </section>
        <button
          className={`fixed bg-slate-800 text-white right-4 bottom-4 p-4 rounded-full transition-all duration-500 ${
            isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          onClick={handleClick}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <FaArrowUp />
        </button>
        <Link
          download={"./CV.pdf"}
          href={"./CV.pdf"}
          target="_blank"
          className="fixed bottom-2 left-2 md:top-2 md:left-auto md:bottom-auto md:right-2 rounded-full bg-blue-400 p-2 md:p-4 text-white text-sm md:text-md flex gap-2 justify-center items-center drop-shadow-md z-[99999]"
        >
          Download CV <MdOutlineCloudDownload size={30} />
        </Link>
      </TracingBeam>
    </div>
  );
}
