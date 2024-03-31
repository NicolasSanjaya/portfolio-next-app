import React from "react";
import { ThreeDCardDemo } from "../3dCards";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="grid grid-cols-3 lg:grid-cols-5 lg:gap-2"
    >
      {/* <Image src={"/icons/css.svg"} width={500} height={500} alt="css" /> */}
      <ThreeDCardDemo images={"/icons/html.svg"} item="HTML" />
      <ThreeDCardDemo images={"/icons/css.svg"} item="CSS" />
      <ThreeDCardDemo images={"/icons/tailwindcss.svg"} item="Tailwind CSS" />
      <ThreeDCardDemo images={"/icons/javascript.svg"} item="Javascript" />
      <ThreeDCardDemo images={"/icons/typescript.svg"} item="Typescript" />
      <ThreeDCardDemo images={"/icons/php.svg"} item="PHP" />
      <ThreeDCardDemo images={"/icons/laravel.svg"} item="Laravel" />
      <ThreeDCardDemo images={"/icons/react.svg"} item="React JS" />
      <ThreeDCardDemo images={"/icons/nextjs.svg"} item="Next JS" />
      <ThreeDCardDemo images={"/icons/redux.svg"} item="Redux" />
      <ThreeDCardDemo images={"/icons/nodejs.svg"} item="Node JS" />
      <ThreeDCardDemo images={"/icons/expressjs.svg"} item="Express JS" />
      <ThreeDCardDemo images={"/icons/prisma.svg"} item="Prisma" />
      <ThreeDCardDemo images={"/icons/mysql.svg"} item="MySQL" />
      <ThreeDCardDemo images={"/icons/git.svg"} item="Git" />
    </motion.div>
  );
};

export default Skills;
