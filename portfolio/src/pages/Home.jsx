import Header from "../partials/Header";
import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMeSection/>
   <ProjectsSection/>
    </>
  );
}
