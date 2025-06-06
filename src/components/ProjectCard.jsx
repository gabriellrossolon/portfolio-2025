import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "./Button";
import InfoCard from "./InfoCard";

const ProjectCard = ({
  title,
  imgSrc,
  projDesc,
  githubUrl,
  siteUrl,
  techIcons,
  index,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      key={`projectcard-${index}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-1 lg:flex-row md:gap-10 items-center justify-center"
    >
      <InfoCard>
        <div className="flex flex-col items-start justify-center gap-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div>
            <img className="rounded-xl" src={imgSrc} alt={title} />
          </div>
          <div className="flex items-center justify-center gap-2 w-full">
            <div className="flex items-center justify-center text-4xl gap-2 flex-wrap">
              {techIcons.map((tech, idx) => (
                <span key={idx} style={{ color: tech.color }} title={tech.name}>
                  {tech.icon}
                </span>
              ))}
            </div>
          </div>
          <p className="text-white/80">{projDesc}</p>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <Button
              text={"Acesse no Github"}
              fontSize={"text-xl"}
              onClick={() => window.open(githubUrl, "_blank")}
            />
            <Button
              text={"Acesse Online"}
              fontSize={"text-xl"}
              onClick={() => window.open(siteUrl, "_blank")}
            />
          </div>
        </div>
      </InfoCard>
    </motion.div>
  );
};

export default ProjectCard;
