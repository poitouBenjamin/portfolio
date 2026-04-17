import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <GetInTouchSection />
    </>
  );
}
