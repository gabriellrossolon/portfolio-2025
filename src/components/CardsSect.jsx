import InfoCard from './InfoCard';

import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaArrowRight, FaUser, FaCode } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const CardsSect = ({setAboutMe, setProjects, techIcons}) => {

const handleAboutMe = () => {
  setAboutMe(true); 
}

const handleProjects = () => {
  setProjects(true); 
}

  return (
     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        <InfoCard colSpan="md:col-span-3" gap="gap-2">
          <img src="https://avatars.githubusercontent.com/u/137924322?s=400&u=..." alt="Foto" className="rounded-full max-w-32 max-h-32" />
          <h2 className="text-2xl font-bold text-white">Oi! Sou o Gabriell 👋</h2>
          <p className="text-gray-300 text-xl">Desenvolvedor Front-End 🖥️</p>
        </InfoCard>
       
        <InfoCard colSpan="md:col-span-1" gap="gap-2" onClick={handleAboutMe}>
          <div className="text-5xl">
            <FaUser />
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <p>Sobre mim</p>
            <FaArrowRight />
          </div>
        </InfoCard>

         <InfoCard colSpan="md:col-span-1" gap="gap-2" onClick={handleProjects}>
          <div className="text-5xl">
            <FaCode />
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <p>Projetos</p>
            <FaArrowRight />
          </div>
        </InfoCard>

        <InfoCard colSpan="md:col-span-3" gap="gap-12">
          <h2 className="text-2xl font-bold">Tecnologias:</h2>
          <div className="flex flex-wrap items-center justify-center md:justify-start text-5xl gap-8">
            {techIcons.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-white">
              <span className="text-5xl" style={{color: tech.color}}>{tech.icon}</span>
              <p className="text-sm">{tech.name}</p>
            </div>
            ))}
          </div>
        </InfoCard>
        
      </div>
  )
}

export default CardsSect
