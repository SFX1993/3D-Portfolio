import LogoShowcase from "./components/LogoShowcase.jsx";

import NavBar from "./components/NavBar.jsx";
import Contact from "./sections/Contact.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Hero from "./sections/hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
    </>
  );
};
export default App;
