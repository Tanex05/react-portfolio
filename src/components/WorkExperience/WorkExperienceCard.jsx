import styles from "./WorkExperienceCard.module.css";

export default function WorkExperienceCard({ work }) {
  const { image, company, position, date, description, technologies } = work;

  return (
    <div className={styles.workExperienceCard}>
      <img src={image} alt={company} className={styles.companyImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.company}>{company}</h2>
        <h3 className={styles.position}>{position}</h3>
        <p className={styles.date}>{date}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techButton}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
