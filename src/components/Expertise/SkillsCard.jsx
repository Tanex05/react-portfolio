import styles from "./SkillsCard.module.css";

export default function SkillsCard(props) {
  const { skill } = props;
  return (
    <div className={styles.skill}>
      <h2>{skill}</h2>
    </div>
  );
}
