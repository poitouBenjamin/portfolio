"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { title: "Home", href: "#heroSection" },
  { title: "About", href: "#aboutSection" },
  { title: "Projects", href: "#projectSection" },
  { title: "Contact", href: "#getInTouchSection" },
];

export default function NavBar() {
  const [isMenuExpended, setIsMenuExpended] = useState<boolean>(false);

  return (
    // On enlève "hidden" ici pour que le conteneur existe sur mobile
    <header className="fixed top-0 right-0 z-50 w-full flex justify-end items-center px-10 h-[10dvh] bg-background">
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
