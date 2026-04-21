import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SkillCard from "./SkillCard";

const skillItems = [
  {
    blockTitle: "Languages",
    skills: [
      { logoUrl: "/logos/htmlLogo.png", name: "HTML5" },
      { logoUrl: "/logos/cssLogo.png", name: "CSS3" },
      { logoUrl: "/logos/jsLogo.png", name: "JavaScript ES6+" },
      { logoUrl: "/logos/tsLogo.png", name: "Typescript" },
      { logoUrl: "/logos/javaLogo.png", name: "Java" },
      { logoUrl: "/logos/cLogo.png", name: "C" },
      { logoUrl: "/logos/sqlLogo.png", name: "SQL" },
    ],
  },
  {
    blockTitle: "Frameworks & Libraries",
    skills: [
      { logoUrl: "/logos/nodeLogo.png", name: "Node.js" },
      { logoUrl: "/logos/reactLogo.svg", name: "React" },
      { logoUrl: "/logos/nextLogo.png", name: "Next.js" },
      { logoUrl: "/logos/springLogo.png", name: "Spring" },
      { logoUrl: "/logos/javaLogo.png", name: "Java" },
      { logoUrl: "/logos/tailwindLogo.png", name: "Tailwind" },
      { logoUrl: "/logos/shadcnLogo.svg", name: "Shadcn/ui" },
    ],
  },
  {
    blockTitle: "Database & ORM",
    skills: [
      { logoUrl: "/logos/sqlLogo.png", name: "SQL" },
      { logoUrl: "/logos/jdbcLogo.svg", name: "JDBC" },
      { logoUrl: "/logos/jpaLogo.png", name: "Hibernate" },
    ],
  },
  {
    blockTitle: "Tools & DevOps",
    skills: [
      { logoUrl: "/logos/vscodeLogo.png", name: "Vs Code" },
      { logoUrl: "/logos/ijLogo.png", name: "IntelliJ IDEA" },
      { logoUrl: "/logos/gitLogo.png", name: "Git" },
      { logoUrl: "/logos/vmLogo.png", name: "VM Deployment" },
      { logoUrl: "/logos/figmaLogo.png", name: "Figma" },
    ],
  },
  {
    blockTitle: "AI Assistants",
    skills: [
      { logoUrl: "/logos/copilotLogo.svg", name: "github Copilot" },
      { logoUrl: "/logos/cursorLogo.png", name: "Cursor" },
      { logoUrl: "/logos/claudeLogo.svg", name: "Claude Code" },
    ],
  },
  {
    blockTitle: "CMS & Design",
    skills: [
      { logoUrl: "/logos/umlLogo.png", name: "UML" },
      { logoUrl: "/logos/prismicLogo.svg", name: "Prismic" },
      { logoUrl: "/logos/sanityLogo.png", name: "Sanity" },
    ],
  },
];

export default function SkillsCarousel() {
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {skillItems.map((skillItem, id) => {
          return (
            <CarouselItem
              key={id}
              className="flex flex-col justify-start items-start w-full gap-4 overflow-hidden min-w-0"
            >
              <h4 className=" w-full text-center bg-linear-to-r from-gradient-start to-gradient-end bg-clip-text  text-transparent font-bold">
                {skillItem.blockTitle}
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-full p-2">
                {skillItem.skills.map((skill, idx) => {
                  return (
                    <li
                      key={idx}
                      className="transition-transform duration-500 ease-in-out hover:scale-105 hover:border hover:border-primary rounded-md w-full"
                    >
                      <SkillCard
                        logoUrl={skill.logoUrl}
                        skillName={skill.name}
                      />
                    </li>
                  );
                })}
              </ul>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="flex justify-center gap-4 mt-6">
        <CarouselPrevious className="static translate-y-0 cursor-pointer hover:scale-105 border border-gray-600" />
        <CarouselNext className="static translate-y-0 cursor-pointer hover:scale-105 border border-gray-600" />
      </div>
    </Carousel>
  );
}
