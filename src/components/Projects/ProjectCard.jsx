import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubLink,
}) => {
  return (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardInfo}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techButton}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
