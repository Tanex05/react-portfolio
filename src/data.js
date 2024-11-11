import SymphImage from "./assets/Symph.jpg";
import AorbtsImage from "./assets/Aorbts.jpg";
import EcommerceImage from "./assets/E-commerce.jpg";
import PortfolioImage from "./assets/Portfolio.png";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    image: EcommerceImage,
    description:
      "Our Capstone Project for the final year, an E-commerce website designed to provide a seamless online shopping experience. It features a dynamic product catalog, secure checkout process, and integration with PayMongo API for payment processing. The platform allows users to browse, search, and purchase products easily, with an admin panel for managing inventory, orders, and user data.",
    githubLink: "https://github.com/Tanex05/E-commerce-Website-Capstone",
    technologies: [
      "Laravel",
      "JQuery",
      "PHP",
      "MySQL",
      "Bootstrap",
      "PayMongo API",
    ],
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: PortfolioImage,
    description:
      "A personal portfolio website showcasing my projects, skills, and experience. Built with React, it features a responsive design, smooth navigation, and dynamic content rendering. The website highlights my journey as a developer, providing an interactive way for visitors to learn about my work and get in touch.",
    githubLink: "https://github.com/Tanex05/react-portfolio",
    technologies: ["React", "CSS", "HTML", "JavaScript"],
  },
];

const workExperience = [
  {
    id: 1,
    image: AorbtsImage,
    company: "Aorbts Internet Marketing Services",
    position: "Web Development Intern",
    date: "August 2023 - November 2023",
    description:
      "As a Web Development Intern at Aorbts Internet Marketing Services, I contributed to projects by developing a Real Estate and Company Website using WordPress and Elementor. \n\n I also customized CSS, managed SEO, and handled content updates to improve user experience and search rankings.",
    technologies: [
      "WordPress",
      "Web Design",
      "SEO Optimization",
      "Content Management",
      "HTML",
      "CSS",
    ],
  },

  {
    id: 2,
    image: SymphImage,
    company: "Symph",
    position: "Project Management Intern",
    date: "July 25, 2024 - October 25, 2024",
    description:
      "As a Project Management Intern at Symph, I contributed by testing features, reporting bugs, and collaborating with developers, designers, and QA testers to ensure product quality. \n\n Additionally, I assisted in creating tickets and developing project timelines for effective project management.",
    technologies: [
      "Quality Assurance",
      "Project Management",
      "Jira",
      "Agile",
      "Manual Testing",
      "Regression Testing",
    ],
  },
];

const TechStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PHP",
  "Laravel",
  "MySQL",
  "Bootstrap",
  "Tailwind CSS",
];

export { projects, workExperience, TechStack };
