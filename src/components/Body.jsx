import AboutMe from "./AboutMe";
import AnimatedText from "./AnimatedText";
import Button from "./Button";
import CardsSect from "./CardsSect";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaHome } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";

import Projects from "./Projects";

const Body = ({aboutMe, setAboutMe, projects, setProjects, closeOpenedSections}) => {
  const techIcons = [
    { name: 'React', icon: <FaReact />, color: '#61DBFB' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E44D26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#264DE4' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F1502F' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38BDF8' },
    { name: 'C#', icon: <TbBrandCSharp/>, color: '#68217A'},
    { name: "Github", icon: <FaGithub />, color: '#FFFFFF'},
  ];

  const showingText = aboutMe ? ("< Sobre Mim />") : projects ? ("< Projetos />") : ("< Portfólio />");

  return (
    <div className="flex flex-col justify-center items-center p-8 gap-4">
      <motion.div
        key="title"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-1 lg:flex-row md:gap-10 items-center justify-center "
      >
        {(aboutMe || projects) && <Button text={<FaHome />} fontSize={"text-3xl"} onClick={() => closeOpenedSections()} />}
        <AnimatedText text={showingText} />
      </motion.div>

      <AnimatePresence mode="wait">
        {aboutMe ? (
          <motion.div
            key="about"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center gap-10 w-full"
          >
            
            <AboutMe />
          </motion.div>
        ) : 
        projects ? (
          <motion.div
            key="projects"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center gap-10 w-full"
          >
            <Projects techIcons={techIcons} />
          </motion.div>
        ) : 
        (
          <motion.div
            key="cards"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center w-full"
          >
            <CardsSect
              setAboutMe={setAboutMe}
              setProjects={setProjects}
              techIcons={techIcons}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Body;
