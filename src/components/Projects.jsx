import ProjectCard from "./ProjectCard"

const Projects = ({techIcons}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProjectCard 
      title={"WheaterLy - Consulta Clima"} 
      imgSrc={"wheaterly.png"} 
      projDesc={"Página Web para consulta de clima com consumo da API OpenWeatherMap API."}
      githubUrl={"https://github.com/gabriellrossolon/wheaterly"}
      siteUrl={"https://wheaterly.vercel.app"}
      techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript", "HTML5", "CSS3"].includes(tech.name))}
      />

      <ProjectCard 
      title={"TaskiFy - Lista de Tarefas"} 
      imgSrc={"taskify.png"} 
      projDesc={"Lista de Tarefas com Integração de API própria. Front em React e Back em ASP.NET."}
      githubUrl={"https://github.com/gabriellrossolon/taskify"}
      siteUrl={"#"}
      techIcons={techIcons.filter(tech => ["React", "Tailwind", "C#", ".NET"].includes(tech.name))}
      />

      <ProjectCard 
      title={"Calculadora de IMC"} 
      imgSrc={"calculadoradeimc.png"} 
      projDesc={"Calculadora de Indíce de Massa Corporal, feita com foco em Componentização."}
      githubUrl={"https://github.com/gabriellrossolon/imc_calc_react"}
      siteUrl={"https://imc-calc-react.vercel.app"}
      techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript", "HTML5", "CSS3"].includes(tech.name))}
      />

      <ProjectCard 
      title={"Login Screen"} 
      imgSrc={"loginscreen.png"} 
      projDesc={"Página de Login simulando o envio das informações para o Back-end."}
      githubUrl={"https://github.com/gabriellrossolon/login-screen-react?tab=readme-ov-file"}
      siteUrl={"https://login-screen-react-bay.vercel.app"}
      techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript", "HTML5", "CSS3"].includes(tech.name))}
      />

      <ProjectCard 
      title={"Formulário Multi-Step"} 
      imgSrc={"formmultistep.png"} 
      projDesc={"Formulário multi-passos com foco em componentização e single-page."}
      githubUrl={"https://github.com/gabriellrossolon/form-multistep-react?tab=readme-ov-file"}
      siteUrl={"https://form-multistep-react-nu.vercel.app"}
      techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript", "HTML5", "CSS3"].includes(tech.name))}
      />

      <ProjectCard 
      title={"Converte.Ai - Conversor de Moedas"} 
      imgSrc={"converteai.png"} 
      projDesc={"Conversor de Moedas em tempo real, consumindo a API Frankfurter API."}
      githubUrl={"https://github.com/gabriellrossolon/converte.ai"}
      siteUrl={"https://converte-ai-gray.vercel.app"}
      techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript", "HTML5", "CSS3"].includes(tech.name))}
      />
    </div>
  )
}

export default Projects
