import ProjectCard from "./ProjectCard";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import amiMap from "./pictures/amiMap.png";
import amiCover from "./pictures/amiCover.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ProjectsSection() {
  const t = useTranslations("ProjectSection");
  const projectItems = [
    {
      heroPicture: amiMap,
      cover: amiCover,
      title: t("projects.0.title"),
      description: t("projects.0.description"),
      fullDesciption: t("projects.0.fullDesciption"),
      myRole: t("projects.0.myRole"),
      skills: [
        "Next.js",
        "Mapbox GL JS",
        "Tailwind CSS",
        "Shadcn/UI",
        "Clustering Algorithms",
      ],
    },
  ];
  return (
    <section
      id="projectSection"
      className="w-full flex flex-col justify-center items-center   px-5"
    >
      <h2 className="text-3xl md:text-4xl font-bold  text-foreground w-full text-center pb-4">
        {t("title")}
      </h2>
      <div className="h-1 w-20 bg-linear-to-r from-gradient-start to-gradient-end rounded-full" />
      <div className=" flex flex-col items-center justify-center text-muted-foreground text-lg gap-9 pt-10 ">
        <p className="text-center w-full max-w-150">{t("subtitle")}</p>

        <ul className="flex flex-col lg:flex-row gap-5 justify-center items-center w-full pt-5">
          {projectItems.map((projectItem, idx) => {
            return (
              <li key={idx} className="flex justify-center items-center w-full">
                <Dialog>
                  <DialogTrigger>
                    {projectItem.heroPicture && (
                      <ProjectCard
                        cover={projectItem?.cover}
                        title={projectItem.title}
                        description={projectItem.description}
                        skills={projectItem.skills}
                      />
                    )}
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] sm:max-w-2xl m-0 p-0 overflow-y-auto max-h-[90dvh] ">
                    <DialogHeader className="w-full p-2 m-0">
                      <div className="relative h-48 sm:h-60 w-full overflow-hidden rounded-t-lg">
                        {projectItem.heroPicture && (
                          <Image
                            src={projectItem.heroPicture}
                            alt="AMI Paris Project Map"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                        <div
                          className="absolute inset-0 bg-linear-to-b from-transparent"
                          style={{
                            backgroundImage:
                              "linear-gradient(to bottom, transparent, oklch(0.08 0.01 270))",
                          }}
                        />
                      </div>
                      <DialogTitle />
                    </DialogHeader>

                    <div className="flex flex-col gap-8 w-full px-5 pb-2">
                      <h2 className="font-bold text-2xl w-full">
                        {projectItem.title}
                      </h2>
                      <div className="flex flex-col gap-2 w-full">
                        <h3 className="text-muted-foreground font-bold">
                          {t("dialog.about")}
                        </h3>
                        <p className="text-card-foreground">
                          {projectItem.fullDesciption}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <h3 className="text-muted-foreground font-bold">
                          {t("dialog.role")}
                        </h3>
                        <p className="text-card-foreground">
                          {projectItem.myRole}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 pb-3 w-full">
                        <h3 className="text-muted-foreground font-bold">
                          {t("dialog.technologies")}
                        </h3>
                        <ul className="flex flex-wrap justify-start items-center gap-3 w-full">
                          {projectItem.skills.map((skill, idx) => (
                            <li
                              key={idx}
                              className="border rounded-xl bg-blue-950 w-auto px-2 whitespace-nowrap"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href="https://family.amiparis.com/fr/marais"
                        className="flex justify-center gap-5 items-center w-full border h-10 rounded-md cursor-pointer hover:scale-105 bg-primary"
                      >
                        <span>{t("dialog.cta")}</span>
                        <ExternalLink size={17} />
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
