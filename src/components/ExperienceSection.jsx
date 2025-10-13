import { experiences } from "../data/experiences";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  return (
    <section className="mt-24">
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          date={exp.date}
          title={exp.title}
          description={exp.description}
          link={exp.link}
        />
      ))}
    </section>
  );
}
