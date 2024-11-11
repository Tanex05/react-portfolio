import Hero from "./components/Hero/Hero.jsx";
import Project from "./components/Projects/Project.jsx";
import Expertise from "./components/Expertise/Expertise.jsx";
import WorkExperience from "./components/WorkExperience/WorkExperience.jsx";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkExperience />
      <Expertise />
      <Project />
    </>
  );
}

export default App;
