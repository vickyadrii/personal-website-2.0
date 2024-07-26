import Contacts from "./contacts/contacts";
import Projects from "./components/projects/projects";
import HeroSection from "./components/hero/hero-section";
import Activities from "./components/activities/activities";
import WorkExperience from "./components/work-experience/work-experience";
import Footer from "@/components/common/footer/footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WorkExperience />
      <Activities />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
