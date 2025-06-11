import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import AboutMeSection from "../components/AboutMeSection";

export default function Home() {
  return (
    <>
      <main className="bg-bgSection">
        <HeroSection />
        <Skills />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
