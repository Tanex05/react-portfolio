import { workExperience } from "../../data.js";
import styles from "./WorkExperience.module.css";
import WorkExperienceCard from "./WorkExperienceCard";

export default function WorkExperience() {
  return (
    <section id="work-experience" className={styles.container}>
      <h1>Work Experience</h1>
      <div className={styles.workExperienceList}>
        {workExperience.map((work) => (
          <WorkExperienceCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}
