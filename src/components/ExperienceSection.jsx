import { experiences } from "../data/experiences";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          date={exp.date}
          title={exp.title}
          description={exp.description}
        />
      ))}
    </section>
  );
}
