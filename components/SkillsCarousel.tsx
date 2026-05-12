import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SkillCard from "./SkillCard";
import { useTranslations } from "next-intl";

export default function SkillsCarousel() {
  const t = useTranslations("AboutMeSection");
  const skillItems = [
    {
      blockTitle: t("blocCarouselTitle.0"),
      skills: [
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          name: "HTML5",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          name: "CSS3",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
          name: "JavaScript ES6+",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          name: "Typescript",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
          name: "Java",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-line.svg",
          name: "C",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg",
          name: "Matlab",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
          name: "SQL",
          invert: false,
        },
      ],
    },
    {
      blockTitle: t("blocCarouselTitle.1"),
      skills: [
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-line.svg",
          name: "Node.js",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          name: "React",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
          name: "Next.js",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
          name: "Spring",
          invert: false,
        },

        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          name: "Tailwind",
          invert: false,
        },
        { logoUrl: "/logos/shadcnui.svg", name: "Shadcn/ui", invert: true },
      ],
    },
    {
      blockTitle: t("blocCarouselTitle.2"),
      skills: [
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          name: "MySQL",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          name: "PostgreSQL",
          invert: false,
        },
        { logoUrl: "/logos/jdbcLogo.svg", name: "JDBC" },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg",
          name: "Hibernate",
          invert: false,
        },
      ],
    },
    {
      blockTitle: t("blocCarouselTitle.3"),
      skills: [
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
          name: "Vs Code",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
          name: "IntelliJ IDEA",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
          name: "Git",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
          name: "Vercel",
          invert: true,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
          name: "GCP",
          invert: false,
        },
      ],
    },
    {
      blockTitle: t("blocCarouselTitle.4"),
      skills: [
        {
          logoUrl: "/logos/githubcopilot.svg",
          name: "github Copilot",
          invert: true,
        },
        { logoUrl: "/logos/cursor.svg", name: "Cursor", invert: true },
        { logoUrl: "/logos/claudeLogo.svg", name: "Claude Code" },
      ],
    },
    {
      blockTitle: t("blocCarouselTitle.5"),
      skills: [
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg",
          name: "UML",
          invert: false,
        },
        { logoUrl: "/logos/prismicLogo.svg", name: "Prismic", invert: false },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sanity/sanity-original.svg",
          name: "Sanity",
          invert: false,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
          name: "WordPress",
          invert: true,
        },
        {
          logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
          name: "Figma",
          invert: false,
        },
      ],
    },
  ];
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
                        invert={skill?.invert || false}
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
