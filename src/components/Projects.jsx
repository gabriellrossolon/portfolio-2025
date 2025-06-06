import ProjectCard from "./ProjectCard";

const Projects = ({ techIcons }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProjectCard
        index={0}
        title={"Orçamento Facil"}
        imgSrc={"orcamentofacil.png"}
        projDesc={"Aplicação web para criação de orçamentos rápido, com atalho para gerar em PDF."}
        githubUrl={"https://github.com/gabriellrossolon/orcamento-facil"}
        siteUrl={"https://orcamento-facil-nine.vercel.app"}
        techIcons={techIcons.filter(tech => ["React", "Tailwind", "TypeScript"].includes(tech.name))}
      />

      <ProjectCard
        index={1}
        title={"TaskiFy - Lista de Tarefas"}
        imgSrc={"taskify.png"}
        projDesc={"Lista de Tarefas com Integração de API própria. Front em React e Back em ASP.NET."}
        githubUrl={"https://github.com/gabriellrossolon/taskify"}
        siteUrl={"https://orcamento-facil-nine.vercel.app"}
        techIcons={techIcons.filter(tech => ["React", "JavaScript", "Tailwind", "C#", ".NET"].includes(tech.name))}
      />

      <ProjectCard
        index={2}
        title={"Gitly - Controle de Presentes"}
        imgSrc={"giftly.png"}
        projDesc={"Aplicação Web para controle de compra de presentes para pessoas especiais."}
        githubUrl={"https://github.com/gabriellrossolon/giftly"}
        siteUrl={"https://giftly-ten.vercel.app"}
        techIcons={techIcons.filter(tech => ["React", "Tailwind", "TypeScript"].includes(tech.name))}
      />

      <ProjectCard
        index={3}
        title={"WheaterLy - Consulta Clima"}
        imgSrc={"wheaterly.png"}
        projDesc={"Página Web para consulta de clima com consumo da API OpenWeatherMap API."}
        githubUrl={"https://github.com/gabriellrossolon/wheaterly"}
        siteUrl={"https://wheaterly.vercel.app"}
        techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript"].includes(tech.name))}
      />

      <ProjectCard
        index={4}
        title={"Calculadora de IMC"}
        imgSrc={"calculadoradeimc.png"}
        projDesc={"Calculadora de Indíce de Massa Corporal, feita com foco em Componentização."}
        githubUrl={"https://github.com/gabriellrossolon/imc_calc_react"}
        siteUrl={"https://imc-calc-react.vercel.app"}
        techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript"].includes(tech.name))}
      />

      <ProjectCard
        index={5}
        title={"Login Screen"}
        imgSrc={"loginscreen.png"}
        projDesc={"Página de Login simulando o envio das informações para o Back-end."}
        githubUrl={"https://github.com/gabriellrossolon/login-screen-react?tab=readme-ov-file"}
        siteUrl={"https://login-screen-react-bay.vercel.app"}
        techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript"].includes(tech.name))}
      />

      <ProjectCard
        index={6}
        title={"Formulário Multi-Step"}
        imgSrc={"formmultistep.png"}
        projDesc={"Formulário multi-passos com foco em componentização e single-page."}
        githubUrl={"https://github.com/gabriellrossolon/form-multistep-react?tab=readme-ov-file"}
        siteUrl={"https://form-multistep-react-nu.vercel.app"}
        techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript"].includes(tech.name))}
      />

      <ProjectCard
        index={7}
        title={"Converte.Ai - Conversor de Moedas"}
        imgSrc={"converteai.png"}
        projDesc={"Conversor de Moedas em tempo real, consumindo a API Frankfurter API."}
        githubUrl={"https://github.com/gabriellrossolon/converte.ai"}
        siteUrl={"https://converte-ai-gray.vercel.app"}
        techIcons={techIcons.filter(tech => ["React", "Tailwind", "JavaScript"].includes(tech.name))}
      />
    </div>
  );
};

export default Projects;
