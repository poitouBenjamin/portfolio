import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  return (
    <main className="flex flex-col max-w-650 w-full max-h-1125 ustify-start items-center gap-y-20 relative pt-[10dvh] px-4">
      <NavBar locale={locale} />
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <GetInTouchSection />
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
