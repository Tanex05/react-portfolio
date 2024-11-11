import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../../data.js"; // Correct the import
export default function Project() {
  return (
    <section id="projects" className={styles.container}>
      <h1>Visit My GitHub Projects</h1>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            githubLink={project.githubLink}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}
