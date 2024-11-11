import styles from "./Expertise.module.css";
import { TechStack } from "../../data.js";
import SkillsCard from "./SkillsCard";
export default function Expertise() {
  return (
    <section id="expertise" className={styles.container}>
      <h1>My Expertise</h1>
      <div className={styles.skillsList}>
        {TechStack.map((skill, index) => (
          <SkillsCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
