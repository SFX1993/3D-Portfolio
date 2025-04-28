import LogoSection from "./components/LogoSection.jsx";
import NavBar from "./components/NavBar.jsx";
import Hero from "./sections/hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
    </>
  );
};
export default App;
