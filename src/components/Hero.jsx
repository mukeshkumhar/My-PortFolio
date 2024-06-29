// import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sh:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`#${styles.heroHeadText}text-white font-bold`}>
            Hi, I'am <span className="text-[#915eff]">Mukesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop
            <span className="text-[#915eff] font-bold drop-shadow-[2px_3px_0px_rgba(240,240,240,0.2)]">
              {" "}
              Web and
              <br></br> App Application.
            </span>{" "}
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className=" absolute xs:bottom-5   w-full flex justify-center items-center" style={{bottom:10}}>
        <a href="#about">
          <div className="w-[35px] h-[65px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 bg-secondary rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
