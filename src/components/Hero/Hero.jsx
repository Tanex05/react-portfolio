import styles from "./Hero.module.css";
import PortfolioImage from "../../assets/Portfolio_profile.svg";
import Sun from "../../assets/sun.svg";
import Moon from "../../assets/moon.png";
import GithubIconLight from "../../assets/github_light.svg";
import GithubIconDark from "../../assets/github_dark.svg";
import LinkedinIconLight from "../../assets/linkedin_light.svg";
import LinkedinIconDark from "../../assets/linkedin_dark.svg";
import FacebookIconLight from "../../assets/facebook_light.svg";
import FacebookIconDark from "../../assets/facebook_dark.svg";
import Resume from "../../assets/Kiseo_Resume.pdf";
import { useTheme } from "../../common/ThemeContext.jsx";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? Sun : Moon;
  const GithubIcon = theme === "light" ? GithubIconLight : GithubIconDark;
  const LinkedinIcon = theme === "light" ? LinkedinIconLight : LinkedinIconDark;
  const FacebookIcon = theme === "light" ? FacebookIconLight : FacebookIconDark;

  return (
    <section id="Home" className={styles.container}>
      {/* Right Content for Mobile View */}
      <div className={styles.rightContent}>
        <img
          className={styles.profileImage}
          src={PortfolioImage}
          alt="Profile"
        />
      </div>

      {/* Left Content */}
      <div className={styles.leftContent}>
        <h2 className={styles.greeting}>👋 Hello, I’m</h2>
        <h1 className={styles.mainHeading}>
          Montano <span className={styles.highlight}>Kiseo</span>
        </h1>
        <h3 className={styles.subHeading}>Full Stack Developer</h3>
        <p className={styles.description}>
          I’m a recent IT graduate with hands-on experience in web development
          and a strong drive to learn and grow. Eager to bring fresh ideas and a
          passion for technology to a dynamic team.
        </p>
        <div className={styles.buttonsContainer}>
          <a href={Resume} download>
            <button className={styles.downloadBtn}>Download Resume</button>
          </a>
          <img
            className={styles.toggleTheme}
            src={themeIcon}
            alt="Theme Toggle Icon"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.socialIcons}>
          <a href="https://github.com/Tanex05" target="_blank" rel="noreferrer">
            <img src={GithubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/montanokiseo/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a
            href="https://www.facebook.com/montano.kiseo"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook Icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
