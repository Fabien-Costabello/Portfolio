import Header from "../partials/Header";
import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../partials/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
