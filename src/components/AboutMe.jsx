import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}    // começa invisível e mais embaixo
      animate={{ opacity: 1, x: 0 }}     // anima pra posição normal
      exit={{ opacity: 0, x: -100 }}      // ao sair, sobe e desaparece
      transition={{ duration: 0.5 }}     // tempo da transição
      className="
      flex flex-col items-start justify-center rounded-2xl bg-gray-800/20 p-8 backdrop-blur-xl 
      gap-4 lg:max-w-[60%] overflow-x-hidden"
    >
      <p className="text-xl text-gray-200 text-justify">
        Oi! Sou o Gabriell, nascido em 2001 e apaixonado por tecnologia. Desde cedo, mergulhei no mundo da programação como autodidata, 
        movido pela curiosidade e pela vontade de criar. Hoje, atuo como desenvolvedor front-end, unindo lógica e criatividade para 
        construir interfaces com propósito. Mas meu objetivo vai além: estou no caminho para me tornar fullstack, porque também 
        adoro o backend — afinal, quem resiste a fazer mágica com uns ifs e elses? Estou sempre evoluindo, aprendendo e pronto para 
        encarar qualquer desafio.
      </p>
    </motion.div>
  );
};

export default AboutMe;
