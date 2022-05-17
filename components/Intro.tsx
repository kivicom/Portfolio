import data from "../public/data.json";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <motion.div
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      id="intro"
      className="space-y-5 mt-20 md:h-[60vh] md:ml-20 ml-10"
    >
      <p className="text-3xl text-neon font-fira">Hi, my name is</p>
      <h1 className="text-5xl font-extrabold text-text md:text-8xl">
        {data.name}
      </h1>
      <h2 className="text-4xl text-textDark md:text-6xl">
        I build amazing websites!
      </h2>
      <p className="w-4/5 md:w-3/5 text-textDark">
        I&rsquo;m a <span className="text-neon">{data.profession}. </span>
        {data.intro}
      </p>
      <div className="flex space-x-3">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          href="contact"
        >
          <button className="py-2 px-5 !mt-10 hover:bg-neon hover:border-neon hover:backdrop-blur-lg hover:text-darkerBlue duration-100 border-neon border-2 text-neon rounded-lg">
            Reach out to me!
          </button>
        </Link>

        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          href="contact"
        >
          <button className="py-2 px-5 !mt-10 text-darkerBlue bg-neon border-neon hover:bg-transparent duration-100 hover:text-neon border-2 rounded-lg">
            Check out my work!
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Intro;
