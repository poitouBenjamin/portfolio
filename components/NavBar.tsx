"use client";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NavBar({ locale }: { locale: string }) {
  const [isMenuExpended, setIsMenuExpended] = useState<boolean>(false);
  const [currentLang, setCurrentLang] = useState<string>(locale);
  const t = useTranslations("NavBar");
  const router = useRouter();

  const navItems = [
    { title: t("home"), href: "#heroSection" },
    { title: t("about"), href: "#aboutSection" },
    { title: t("projects"), href: "#projectSection" },
    { title: t("contact"), href: "#getInTouchSection" },
  ];

  function handleLang(lang: string) {
    const nextLang = lang === "fr" ? "en" : "fr";
    setCurrentLang(nextLang);
    router.replace(`/${nextLang}`);
  }

  return (
    <header className="fixed top-0 right-0 z-50 w-full flex justify-between items-center px-10 h-[10dvh] bg-background">
      <div className="btn-gradient flex items-center rounded-md ">
        <button
          className={`w-8 text-center ${currentLang === "fr" ? "" : "bg-background"} cursor-pointer`}
          onClick={() => handleLang(locale)}
        >
          fr
        </button>
        <button
          className={`w-8 text-center ${currentLang === "fr" ? "bg-background" : ""} cursor-pointer`}
          onClick={() => handleLang(locale)}
        >
          en
        </button>
      </div>

      <ul className="hidden md:flex gap-10">
        {navItems.map((navItem, idx) => (
          <li
            key={idx}
            className="hover-text-gradient text-muted-foreground cursor-pointer"
          >
            <a href={navItem.href}>{navItem.title}</a>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button
          onClick={() => setIsMenuExpended(!isMenuExpended)}
          className="cursor-pointer"
        >
          {isMenuExpended ? <X size={32} /> : <Menu size={32} />}
        </button>

        {isMenuExpended && (
          <nav className="fixed inset-0 bg-background flex flex-col items-start justify-center h-[35dvh] z-40 border border-gray-800">
            <button
              onClick={() => setIsMenuExpended(false)}
              className="absolute top-5 right-10"
            >
              <X size={32} />
            </button>
            <ul className="flex flex-col gap-8 text-start pt-13 pl-4">
              {navItems.map((navItem, idx) => (
                <li
                  key={idx}
                  className="hover-text-gradient text-muted-foreground cursor-pointer"
                  onClick={() => setIsMenuExpended(false)}
                >
                  <a href={navItem.href}>{navItem.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
