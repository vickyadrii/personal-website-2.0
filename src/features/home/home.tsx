import Activities from "./components/activities/activities";
import HeroSection from "./components/hero/hero-section";
import WorkExperience from "./components/work-experience/work-experience";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WorkExperience />
      <Activities />
    </div>
  );
};

export default Home;
