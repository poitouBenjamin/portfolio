import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative pt-[10dvh]">
      <NavBar />
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <GetInTouchSection />
      <Footer />
    </main>
  );
}
