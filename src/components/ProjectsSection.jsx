import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section>
      <div className="flex-1 flex-col mt-16">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            name={proj.name}s
            description={proj.description}
            image={proj.image}
             link={proj.link}
          />
        ))}
      </div>
    </section>
  );
}
