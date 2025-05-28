import Button from "./Button";
import InfoCard from "./InfoCard";

const ProjectCard = ({ title, imgSrc, projDesc, githubUrl, siteUrl, techIcons }) => {

  return (
    <div>
      <InfoCard>
        <div className="flex flex-col items-start justify-center gap-6">
          <h3 className="text-xl font-semibold ">{title}</h3>
          <div className="">
            <img className="rounded-xl" src={imgSrc} alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 w-full">
            <div className="flex items-center justify-center text-4xl gap-2 flex-wrap">
              {techIcons.map((tech, index) => (
                <span key={index} style={{ color: tech.color }} title={tech.name} > {tech.icon} </span>
              ))}
            </div>
          </div>
          <div className="">
            <p className="text-white/80">{projDesc}</p>
          </div>
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
    </div>
  );
};

export default ProjectCard;
