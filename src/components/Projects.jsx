import ProjectCard from "./ProjectCard"

const Projects = ({techIcons}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ProjectCard 
      title={"Calculadora de IMC"} 
      imgSrc={"calculadoradeimc.png"} 
      githubUrl={"https://github.com/gabriellrossolon/imc_calc_react"}
      siteUrl={"https://imc-calc-react.vercel.app"}
      techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript", "HTML5", "CSS3"].includes(tech.name))}
      />

      <ProjectCard 
      title={"Login Screen"} 
      imgSrc={"loginscreen.png"} 
      githubUrl={"https://github.com/gabriellrossolon/login-screen-react?tab=readme-ov-file"}
      siteUrl={"https://login-screen-react-bay.vercel.app"}
      techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript", "HTML5", "CSS3"].includes(tech.name))}
      />

      <ProjectCard 
      title={"Formulário Multi-Step"} 
      imgSrc={"formmultistep.png"} 
      githubUrl={"https://github.com/gabriellrossolon/form-multistep-react?tab=readme-ov-file"}
      siteUrl={"https://form-multistep-react-nu.vercel.app"}
      techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript", "HTML5", "CSS3"].includes(tech.name))}
      />

      <ProjectCard 
      title={"Portfólio Pessoal"} 
      imgSrc={"portfoliopessoal.png"} 
      githubUrl={"https://github.com/gabriellrossolon/portfolio-2025"}
      siteUrl={"https://portfolio-2025-cyan-eight.vercel.app"}
      techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript", "HTML5", "CSS3"].includes(tech.name))}
      />
    </div>
  )
}

export default Projects
