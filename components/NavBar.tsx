const navItems = [
  { title: "Home", href: "#heroSection" },
  { title: "About", href: "#aboutSection" },
  { title: "Projects", href: "#projectSection" },
  { title: "Contact", href: "#getInTouchSection" },
];

export default function NavBar() {
  return (
    <header className=" fixed top-0 right-0 z-1 w-full flex justify-end items-center px-10 h-[10dvh] bg-background">
      <ul className="flex gap-10">
        {navItems.map((navItem, idx) => {
          return (
            <li
              key={idx}
              className="hover-text-gradient text-muted-foreground cursor-pointer"
            >
              <a href={navItem.href}>{navItem.title}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
