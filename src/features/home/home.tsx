import Activities from "./components/activities/activities";
import HeroSection from "./components/hero/hero-section";
import Projects from "./components/projects/projects";
import WorkExperience from "./components/work-experience/work-experience";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WorkExperience />
      <Activities />
      <Projects />
    </div>
  );
};

export default Home;
