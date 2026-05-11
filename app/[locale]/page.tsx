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
    <main className="relative pt-[10dvh]">
      <NavBar locale={locale} />
      <HeroSection locale={locale} />
      <AboutMeSection locale={locale} />
      <ProjectsSection locale={locale} />
      <GetInTouchSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
