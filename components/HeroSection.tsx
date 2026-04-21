import { MoveDown, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="heroSection"
      className="relative flex flex-col gap-3 min-h-[90dvh] justify-center items-center bg-background animate-fade-in"
    >
      <h1 className="text-5xl lg:text-8xl md:text-7xl font-bold text-forground">
        Benjamin{" "}
        <span className="bg-linear-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
          POITOU
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up animation-delay-300 pb-10">
        Junior Frontend Developer
      </p>
      <div className="flex flex-col gap-1 justify-center max-w-xl text-lg items-center text-muted-foreground mx-auto leading-relaxed animate-slide-up animation-delay-300 pb-15">
        <p>Crafting pixel-perfect, accessible web experiences with modern</p>
        <p>technologies. Passionate about clean code and thoughtful design.</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm animate-slide-up animation-delay-300">
        <div className="btn-gradient rounded-md border h-10 w-40  hover:scale-105">
          <a
            href="#projectSection"
            className="flex justify-center cursor-pointer items-center gap-2 font-medium text-sm w-full h-full"
          >
            See my projects
            <MoveDown size={16} />
          </a>
        </div>
        <div className="hover-btn-gradient rounded-md border h-10 w-40  hover:scale-105 animate-slide-up animation-delay-300">
          <a
            href="#getInTouchSection"
            className="flex justify-center items-center gap-2 cursor-pointer font-medium text-sm w-full h-full"
          >
            Contact me
            <Mail size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
