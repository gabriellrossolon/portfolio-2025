import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from "react-icons/md";

const AboutMe = ({ techIcons }) => {
  const openLink = (url) => {
    window.open(url, "_blank")
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // começa invisível e mais embaixo
      animate={{ opacity: 1, x: 0 }} // anima pra posição normal
      exit={{ opacity: 0, x: -100 }} // ao sair, sobe e desaparece
      transition={{ duration: 0.5 }} // tempo da transição
      className="grid grid-cols-1 lg:grid-cols-3 items-start gap-10"
    >
      <div className="col-span-1 lg:sticky top-5">
        <div className="grid grid-cols-1 items-center justify-center gap-4">
          <div className="flex flex-col items-start justify-center gap-4 bg-gray-800/20 rounded-xl p-10 pr-30 backdrop-blur-sm">
            <div className="flex flex-col items-start justify-center gap-1">
              <h3 className="text-2xl font-semibold">Gabriell Rossolon</h3>
              <p className="text-gray-200 text-md">
                Desenvolvedor 💻
              </p>
            </div>
            <div>
              <p 
              className="flex items-center justify-start text-gray-200 text-xl gap-2 cursor-pointer hover:underline" 
              onClick={() => openLink("https://api.whatsapp.com/send?phone=5565996607801")}>
                <FaWhatsapp className="text-2xl text-green-500"/>
                (65) 99660-7801
              </p>
              <a 
              className="flex items-center justify-start text-gray-200 text-xl gap-2 cursor-pointer hover:underline"
              href="mailto:gabrirossolon@gmail.com" >
                <MdEmail className="text-2xl text-amber-200" />
                gabrirossolon@gmail.com
              </a>
            </div>
            <p className="flex items-center justify-start text-gray-200 text-xl gap-2">
              <MdLocationOn className="text-2xl text-red-500"/>
              Cuiabá - MT
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-2 p-4 bg-gray-800/20 rounded-md min-w-max backdrop-blur-sm">
            <button 
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-md py-2 w-full text-xl cursor-pointer hover:bg-gray-800/30 transition-color duration-500"
            onClick={() => openLink("https://www.linkedin.com/in/gabriell-rossolon/")}
            >
              <FaLinkedin className="text-2xl"/>
              LinkedIn
            </button>
            <button 
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-md py-2 w-full text-xl cursor-pointer hover:bg-gray-800/30 transition-color duration-500"
            onClick={() => openLink("https://github.com/gabriellrossolon")}
            >
              <FaGithub className="text-2xl"/>
              Github
            </button>
          </div>
          <div className="bg-gray-800/20 rounded-xl p-4 text-center">
            <a
              href="/Curriculo Desenvolvedor - Gabriell.pdf"
              download
              className="
              bg-blue-500 hover:bg-blue-700 text-gray/200 font-semibold rounded-full transition duration-300
              text-xl px-10 py-2 text-black
              "
              >
              Baixar Currículo
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-16 col-span-1 md:col-span-2 bg-gray-800/20 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex flex-col gap-2"> {/* Sobre mim */}
          <h3 className="text-xl font-semibold text-blue-500">
            Um pouco de mim...
          </h3>
          <p className="text-gray-200 text-lg">
            Oi! Sou o Gabriell, nascido em 2001 e apaixonado por tecnologia.
            Desde cedo, mergulhei no mundo da programação como autodidata,
            movido pela curiosidade e pela vontade de criar. Hoje, atuo como
            desenvolvedor, unindo lógica e criatividade para construir
            interfaces com propósito. Mas meu objetivo vai além: estou no
            caminho para me tornar fullstack, porque também adoro o backend —
            afinal, quem resiste a fazer mágica com uns ifs e elses? Estou
            sempre evoluindo, aprendendo e pronto para encarar qualquer desafio.
          </p>
        </div>
        <div className="flex flex-col gap-4"> {/* Experiencia */}
          <h2 className="text-5xl md:text-7xl font-bold text-blue-500">
            Experiência
          </h2>
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold">Asstramed SST</h3>
              <h4 className="font-semibold text-blue-200">Desenvolvedor Jr.</h4>
              <p className="text-gray-20 italic">Fev/2023 - Presente</p>
            </div>
            <ul className="list-disc list-inside text-gray-200">
              <li>
                Desenvolvimento e manutenção do site da empresa <strong className="underline cursor-pointer" onClick={() => openLink("https://www.asstramed.com.br")}>asstramed.com.br</strong>.
              </li>
              <li>
                Desenvolvimento e manutenção da aplicação web para geração de senhas de atendimento aos pacientes.
              </li>
              <li>
                Desenvolvimento de Emails para Marketing em HTML.
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold">Asstramed SST</h3>
              <h4 className="font-semibold text-blue-200">Analista de Suporte/T.I</h4>
              <p className="text-gray-20 italic">Jun/2022 - Presente</p>
            </div>
            <p className="text-gray-200">
              Atuei como Analista de Suporte e TI, prestando atendimento técnico
              a sistemas, softwares e hardwares da empresa e clientes.
              Responsável pela manutenção, resolução de problemas, implantação
              de sistemas e suporte ao usuário, sempre com foco na eficiência e
              melhoria contínua dos processos.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4"> {/* Idiomas */}
          <h2 className="text-5xl md:text-7xl font-bold text-blue-500">
            Idiomas
          </h2>
          <ul className="list-disc list-inside text-gray-200">
            <li>Portugues - Nativo</li>
            <li>Inglês - Intermediário B1 - <strong className="underline cursor-pointer" onClick={() => openLink("https://cert.efset.org/F1kvhG")}>Certificado</strong></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4"> {/* Formação */}
          <h2 className="text-5xl md:text-7xl font-bold text-blue-500">
            Formação
          </h2>
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold">Universidade UNIC</h3>
            <h4 className="text-xl text-blue-200 font-semibold">Técnologo em Análise e Desenvolvimento de Sistemas</h4>
            <p className="italic text-gray-200">2025 - 2027</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold">Universidade UNIC</h3>
            <h4 className="text-xl text-blue-200 font-semibold">Bacharelado em Biomedicina</h4>
            <p className="italic text-gray-200">2020 - 2024</p>
          </div>
        </div>
        <div className="flex flex-col gap-4"> {/* Cursos */}
          <h2 className="text-5xl md:text-7xl font-bold text-blue-500">
            Cursos
          </h2>
          <ul className="list-disc list-inside text-gray-200">
            <li>Lógica de Programação - Alura</li>
            <li>HTML, CSS e JavaScript - Alura</li>
            <li>Aplicaçõe Web com JavaScript - Alura</li>
            <li>ReactJS do Básico ao Avançado - Hora de Codar</li>
            <li>C# do Básico ao Avançado - Udemy</li>
            <li>DataBase SQL do Básico ao Avançado - Udemy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4"> {/* Stack */}
          <h2 className="text-5xl md:text-7xl font-bold text-blue-500">
            Stack
          </h2>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 list-disc list-inside text-gray-200">
            {techIcons.map((tech, index) => (
              <li key={index} className="flex items-center gap-2">
                <span style={{ color: tech.color }} className="text-2xl">
                  {tech.icon}
                </span>
                <span>{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4"> {/* Soft Skills */}
          <h2 className="text-5xl md:text-7xl font-bold text-blue-500">
            Soft Skills
          </h2>
          <ul className="grid lg:grid-cols-3 gap-x-6 gap-y-0.5 list-disc list-inside text-gray-200">
            <li>Organização</li>
            <li>Responsabilidade</li>
            <li>Pensamento analítico</li>
            <li>Paciência</li>
            <li>Praticidade</li>
            <li>Adaptabilidade</li>
            <li>Resolução de problemas</li>
            <li>Atenção aos detalhes</li>
            <li>Curiosidade</li>
            <li>Autodisciplina</li>
            <li>Criatividade</li>
            <li>Persistência</li>
          </ul>
        </div>
      </div>
      
    </motion.div>
  );
};

export default AboutMe;
