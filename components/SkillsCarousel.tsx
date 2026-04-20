import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SkillCard from "./SkillCard";

const skillLanguages = [
  { logoUrl: "/logos/htmlLogo.png", name: "HTML5" },
  { logoUrl: "/logos/cssLogo.png", name: "CSS3" },
  { logoUrl: "/logos/jsLogo.png", name: "JavaScript ES6+" },
  { logoUrl: "/logos/tsLogo.png", name: "Typescript" },
  { logoUrl: "/logos/javaLogo.png", name: "Java" },
  { logoUrl: "/logos/cLogo.png", name: "C" },
  { logoUrl: "/logos/sqlLogo.png", name: "SQL" },
];

const skillFrameworks = [
  { logoUrl: "/logos/nodeLogo.png", name: "Node.js" },
  { logoUrl: "/logos/reactLogo.svg", name: "React" },
  { logoUrl: "/logos/nextLogo.png", name: "Next.js" },
  { logoUrl: "/logos/springLogo.png", name: "Spring" },
  { logoUrl: "/logos/javaLogo.png", name: "Java" },
  { logoUrl: "/logos/tailwindLogo.png", name: "Tailwind" },
  { logoUrl: "/logos/shadcnLogo.svg", name: "Shadcn/ui" },
];

const skillDatabases = [
  { logoUrl: "/logos/sqlLogo.png", name: "SQL" },
  { logoUrl: "/logos/jdbcLogo.svg", name: "JDBC" },
  { logoUrl: "/logos/jpaLogo.png", name: "JPA/Hibernate" },
];

const skillTools = [
  { logoUrl: "/logos/vscodeLogo.png", name: "Vs Code" },
  { logoUrl: "/logos/ijLogo.png", name: "IntelliJ IDEA" },
  { logoUrl: "/logos/gitLogo.png", name: "Git" },
  { logoUrl: "/logos/vmLogo.png", name: "VM Deployment" },
  { logoUrl: "/logos/figmaLogo.png", name: "Figma" },
];

const skillAis = [
  { logoUrl: "/logos/copilotLogo.svg", name: "github Copilot" },
  { logoUrl: "/logos/cursorLogo.png", name: "Cursor" },
  { logoUrl: "/logos/claudeLogo.svg", name: "Claude Code" },
];

const skillCMSs = [
  { logoUrl: "/logos/umlLogo.png", name: "UML" },
  { logoUrl: "/logos/prismicLogo.svg", name: "Prismic" },
  { logoUrl: "/logos/sanityLogo.png", name: "Sanity" },
];

export default function SkillsCarousel() {
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        <CarouselItem className="flex flex-col w-full gap-4">
          <h4 className="text-center w-full">Languages</h4>
          <ul className="grid grid-cols-3 gap-5">
            {skillLanguages.map((skillLanguage, idx) => {
              return (
                <li key={idx}>
                  <SkillCard
                    logoUrl={skillLanguage.logoUrl}
                    skillName={skillLanguage.name}
                  />
                </li>
              );
            })}
          </ul>
        </CarouselItem>
        <CarouselItem className="flex flex-col w-full gap-4 pl-5">
          <h4 className="text-center w-full">Frameworks & Libraries</h4>
          <ul className="grid grid-cols-3 gap-5">
            {skillFrameworks.map((skillFramework, idx) => {
              return (
                <li key={idx}>
                  <SkillCard
                    logoUrl={skillFramework.logoUrl}
                    skillName={skillFramework.name}
                  />
                </li>
              );
            })}
          </ul>
        </CarouselItem>
        <CarouselItem className="flex flex-col w-full gap-4 pl-5">
          <h4 className="text-center w-full">Database & ORM</h4>
          <ul className="grid grid-cols-3 gap-5">
            {skillDatabases.map((skillDatabases, idx) => {
              return (
                <li key={idx}>
                  <SkillCard
                    logoUrl={skillDatabases.logoUrl}
                    skillName={skillDatabases.name}
                  />
                </li>
              );
            })}
          </ul>
        </CarouselItem>

        <CarouselItem className="flex flex-col w-full gap-4 pl-5">
          <h4 className="text-center w-full">Database & ORM</h4>
          <ul className="grid grid-cols-3 gap-5">
            {skillTools.map((skillTool, idx) => {
              return (
                <li key={idx}>
                  <SkillCard
                    logoUrl={skillTool.logoUrl}
                    skillName={skillTool.name}
                  />
                </li>
              );
            })}
          </ul>
        </CarouselItem>
        <CarouselItem className="flex flex-col w-full gap-4 pl-5">
          <h4 className="text-center w-full">Database & ORM</h4>
          <ul className="grid grid-cols-3 gap-5">
            {skillAis.map((skillAi, idx) => {
              return (
                <li key={idx}>
                  <SkillCard
                    logoUrl={skillAi.logoUrl}
                    skillName={skillAi.name}
                  />
                </li>
              );
            })}
          </ul>
        </CarouselItem>
        <CarouselItem className="flex flex-col w-full gap-4 pl-5">
          <h4 className="text-center w-full">Database & ORM</h4>
          <ul className="grid grid-cols-3 gap-5">
            {skillCMSs.map((skillCMS, idx) => {
              return (
                <li key={idx}>
                  <SkillCard
                    logoUrl={skillCMS.logoUrl}
                    skillName={skillCMS.name}
                  />
                </li>
              );
            })}
          </ul>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
