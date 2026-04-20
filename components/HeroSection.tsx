import React from "react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col gap-3 h-[90dvh] justify-center items-center bg-background animate-fade-in">
      <p className="text-primary text-sm font-medium tracking-wider animate-slide-up">
        HELLO I'M
      </p>
      <h1 className="text-5xl lg:text-8xl md:text-7xl font-bold text-forground">
        Benjamin POITOU
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up animation-delay-300 pb-10">
        Junior Frontend Developer
      </p>
      <div className="flex flex-col gap-1 justify-center max-w-xl text-lg items-center text-muted-foreground mx-auto leading-relaxed animate-slide-up animation-delay-300 pb-15">
        <p>Crafting pixel-perfect, accessible web experiences with modern</p>
        <p>technologies. Passionate about clean code and thoughtful design.</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm animate-slide-up animation-delay-300">
        <button className="h-10 w-40 rounded-md border bg-black font-medium">
          See my projects
        </button>
        <button className="h-10 w-40 rounded-md border bg-black font-medium">
          Contact me
        </button>
      </div>
    </section>
  );
}
