import {projects} from "../data/projects";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  const addToProjectRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useGSAP(
    () => {

      projectRefs.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.1 * index,
            ease: "power",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="container mx-auto min-h-screen p-5"
    >
      <h1 className="mb-4 text-3xl font-bold text-center">Projects</h1>
      <div className="container mx-auto rounded-xl p-4">
        <p className="mb-6 text-center text-lg font-medium">
          Here are some of my projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              addToProjectRefs={addToProjectRefs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
