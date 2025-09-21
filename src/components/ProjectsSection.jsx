import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="flex-1 flex-col">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            name={proj.name}
            description={proj.description}
            image={proj.image}
          />
        ))}
      </div>
    </section>
  );
}
