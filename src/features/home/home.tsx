import { Fragment } from "react";

import Footer from "@/components/common/footer/footer";
import ScrollToTop from "@/components/common/scroll-to-top/ScrollToTop";

import Contacts from "./contacts/contacts";
import Projects from "./components/projects/projects";
import HeroSection from "./components/hero/hero-section";
import Activities from "./components/activities/activities";
import WorkExperience from "./components/work-experience/work-experience";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <WorkExperience />
      <Activities />
      <Projects />
      <Contacts />
      <Footer />

      <ScrollToTop />
    </Fragment>
  );
};

export default Home;
