import SkillsCarousel from "./SkillsCarousel";

const skillItems = [
  { logoUrl: "/logos/htmlLogo.png", name: "HTML" },
  { logoUrl: "/logos/cssLogo.png", name: "CSS" },
  { logoUrl: "/logos/jsLogo.png", name: "JavaScript" },
  { logoUrl: "/logos/reactLogo.svg", name: "React" },
  { logoUrl: "/logos/tailwindLogo.png", name: "Tailwind" },
  { logoUrl: "/logos/gitLogo.png", name: "Git" },
];

export default function AboutMeSection() {
  return (
    <section
      id="aboutSection"
      className="flex flex-col justify-center min-h-dvh items-center w-full"
    >
      <h2 className="text-3xl md:text-4xl font-bold  text-foreground w-full text-center pb-4 ">
        About Me
      </h2>
      <div className="h-1 w-20 bg-linear-to-r from-gradient-start to-gradient-end rounded-full" />
      <div className="flex xl:flex-row flex-col justify-between items-start gap-6 md:gap-2 w-full px-5 sm:px-10 md:px-20 py-20">
        <article className="flex flex-col  xl:justify-start items-center h-full text-xl text-foreground w-full max-w-full xl:max-w-1/2 pb-10 xl:pb-0 xl:pr-10">
          <div className="flex flex-col justify-center items-center gap-5 w-full text-lg font-light text-muted-foreground">
            <p className="">
              Hi! I'm Benjamin, a junior frontend developer with a passion for
              creating beautiful and functional web experiences. I recently
              graduated with a degree in Computer Science and have been focusing
              on modern web technologies.
            </p>

            <p>
              When I'm not coding, you can find me exploring new design trends,
              contributing to open-source projects, or learning about the latest
              advancements in web development. I believe in writing clean,
              maintainable code and creating interfaces that users love.
            </p>
            <p>
              I'm currently looking for opportunities to grow as a developer and
              contribute to meaningful projects. Let's build something amazing
              together!
            </p>
          </div>
        </article>
        <article className="flex flex-col w-full max-w-full xl:max-w-1/2 justify-start items-start">
          <h3 className="font-bold text-2xl pb-7">My skills</h3>
          <SkillsCarousel />
        </article>
      </div>
    </section>
  );
}
