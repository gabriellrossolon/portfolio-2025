import AnimatedText from './AnimatedText';
import InfoCard from './InfoCard';

import { FaGithub, FaArrowRight, FaUser } from 'react-icons/fa'; //Icone de bloco de notas
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';


const Body = () => {
  const text = "< Portfólio />"; // Texto a ser animado
  const techIcons = [
  { name: 'React', icon: <FaReact />, color: '#61DBFB' }, // React: azul claro
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' }, // JavaScript: amarelo
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E44D26' }, // HTML5: vermelho/laranja
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#264DE4' }, // CSS3: azul
  { name: 'Git', icon: <FaGitAlt />, color: '#F1502F' }, // Git: laranja
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38BDF8' }, // Tailwind: azul claro
];

  return (
    <div className="flex flex-col justify-center items-center p-8 gap-8">
      <AnimatedText text={text}/>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">

        <InfoCard colSpan="md:col-span-3" gap="gap-2">
          <img src="https://avatars.githubusercontent.com/u/137924322?s=400&u=..." alt="Foto" className="rounded-full max-w-32 max-h-32" />
          <h2 className="text-2xl font-bold text-white">Oi! Sou o Gabriell 👋</h2>
          <p className="text-gray-300 text-xl">Desenvolvedor Front-End 🖥️</p>
        </InfoCard>
       
        <InfoCard colSpan="md:col-span-1" gap="gap-2">
          <div className="text-5xl">
            <FaUser />
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <p>Sobre mim</p>
            <FaArrowRight />
          </div>
        </InfoCard>

         <InfoCard colSpan="md:col-span-1" gap="gap-2">
          <div className="text-5xl">
            <FaGithub />
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <p>GitHub</p>
            <FaArrowRight />
          </div>
        </InfoCard>

        <InfoCard colSpan="md:col-span-3" gap="gap-12">
          <h2 className="text-2xl font-bold">Tecnologias:</h2>
          <div className="flex flex-wrap items-center justify-start text-5xl gap-8">
            {techIcons.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-white">
              <span className="text-5xl" style={{color: tech.color}}>{tech.icon}</span>
              <p className="text-sm">{tech.name}</p>
            </div>
            ))}
          </div>
        </InfoCard>
        
      </div>
    </div>
  );
};

export default Body;
