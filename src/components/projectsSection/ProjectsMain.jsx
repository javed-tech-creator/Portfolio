import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "ShopEase",
    year: "2025",
    align: "right",
    image: "../../public/images/shopease.png",
    link: "https://shopese.netlify.app",
  },
  {
    name: "Chatty App",
    year: "2025",
    align: "left",
    image: "../../public/images/chatty.png",
    link: "https://chattyjoy.netlify.app",
  },
  {
    name: "JobHuntPro",
    year: "2025",
    align: "right",
    image: "../../public/images/jobhuntpro.png",
    link: "https://jobhvnt.netlify.app",
  },
  {
    name: "TaskMaster",
    year: "2025",
    align: "left",
    image: "../../public/images/taskmaster.png",
    link: "https://tasksmster.netlify.app",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
