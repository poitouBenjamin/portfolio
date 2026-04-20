const navItems = ["Home", "About", "Projects", "Contact"];

export default function NavBar() {
  return (
    <header className="w-full flex justify-end items-center px-10 h-[10dvh]">
      <ul className="flex gap-10">
        {navItems.map((navItem, idx) => {
          return (
            <li key={idx} className="text-muted-foreground">
              {navItem}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
