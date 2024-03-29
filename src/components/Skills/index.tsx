import React from "react";
import { ThreeDCardDemo } from "../3dCards";
import Css from "/icons/css.svg";
import Image from "next/image";

const Skills = () => {
  return (
    <div>
      {/* <Image src={"/icons/css.svg"} width={500} height={500} alt="css" /> */}
      <ThreeDCardDemo images={"/icons/css.svg"} />
    </div>
  );
};

export default Skills;
