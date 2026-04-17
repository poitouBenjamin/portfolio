import SkillCard from "./SkillCard";

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
    <section className="flex flex-col justify-center items-start w-full">
      <h2 className="text-3xl md:text-4xl font-bold pb-4 text-foreground w-full text-center pb-10">
        About Me
      </h2>
      <div className="flex md:flex-row flex-col justify-between items-center gap-2 w-full px-20">
        <article className="flex flex-col text-xl text-foreground w-1/2">
          <h3 className="font-bold pb-7 text-2xl">
            A passionate developer building the web
          </h3>
          <p className=" w-150 text-muted-foreground">
            Hi! I'm Benjamin, a junior frontend developer with a passion for
            creating beautiful and functional web experiences. I recently
            graduated with a degree in Computer Science and have been focusing
            on modern web technologies. When I'm not coding, you can find me
            exploring new design trends, contributing to open-source projects,
            or learning about the latest advancements in web development. I
            believe in writing clean, maintainable code and creating interfaces
            that users love. I'm currently looking for opportunities to grow as
            a developer and contribute to meaningful projects. Let's build
            something amazing together!
          </p>
        </article>
        <article className="flex flex-col w-full max-w-1/2">
          <h3 className="font-bold text-2xl pb-7">My skills</h3>
          <ul className="grid grid-cols-3 gap-1 justify-items-start ">
            {skillItems.map((skillItem, idx) => {
              return (
                <li key={idx} className="">
                  <SkillCard
                    logoUrl={skillItem.logoUrl}
                    skillName={skillItem.name}
                  />
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
}
