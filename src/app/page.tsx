"use client";
import { About } from "@/components/About";
import Skills from "@/components/Skills";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main>
      <nav>
        <motion.div
          initial={{ opacity: 0.0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            <Link href={"#about"}>
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
        </motion.div>
      </nav>
      <section id="about">
        <About />
      </section>
      <div className="mb-40" id="skills"></div>
      <section>
        <h1 className="font-bold text-2xl text-center">Skills</h1>
        <Skills />
      </section>
    </main>
  );
}
