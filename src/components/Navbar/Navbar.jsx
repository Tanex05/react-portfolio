import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <a href="#Home" className={styles.navLink}>
            Home
          </a>
        </li>
        <li>
          <a href="#work-experience" className={styles.navLink}>
            Work Experience
          </a>
        </li>
        <li>
          <a href="#expertise" className={styles.navLink}>
            Expertise
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
