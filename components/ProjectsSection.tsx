import ProjectCard from "./ProjectCard";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import amiMap from "./pictures/amiMap.png";
import amiCover from "./pictures/amiCover.png";
import Image from "next/image";

const projectItems = [
  {
    heroPicture: amiMap,
    cover: amiCover,
    title: "AMI Paris - Interactive Neighborhood Experience",
    description:
      "A geospatial social platform for AMI Paris, allowing users to share 'life snapshots' and discover community moments across an interactive map of Le Marais.",
    fullDesciption:
      "A high-end brand activation project for AMI Paris (in collaboration with Velours & Doors3). The platform enables a digital-to-physical experience where customers pin moments (photos/videos) to specific locations. Key features include a sophisticated moderation workflow, dynamic content filtering, and a custom map interface designed to foster emotional connection and local brand positioning. I specifically focused on the complex geospatial logic, ensuring seamless navigation between high-level urban clusters and precise location pins.",
    myRole:
      "A high-end brand activation project for AMI Paris (in collaboration with Velours & Doors3). The platform enables a digital-to-physical experience where customers pin moments (photos/videos) to specific locations. Key features include a sophisticated moderation workflow, dynamic content filtering, and a custom map interface designed to foster emotional connection and local brand positioning. I specifically focused on the complex geospatial logic, ensuring seamless navigation between high-level urban clusters and precise location pins.",
    skills: [
      "Next.js",
      "Mapbox GL JS",
      "Tailwind CSS",
      "Shadcn/UI",
      "Clustering Algorithms",
    ],
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A beautiful weather application featuring location-based forecasts, animated backgrounds, and hourly predictions",
    skills: ["JavaScript", "API", "CSS"],
  },
  {
    id: 3,
    title: "Task Manager",
    description:
      "A feature-rich task management app with drag-and-drop functionality, categories, and progress tracking.",
    skills: ["React", "Redux", "Firebase"],
  },
];

export default function ProjectsSection() {
  return (
      id="projectSection"
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center">
        My Projects
      </h2>
      <div className=" flex flex-col items-center justify-center text-muted-foreground text-lg gap-9">
        <p className="text-center w-full max-w-150">
          Here are some of my recent projects that showcase my skills and
          passion for frontend development.
        </p>

        <ul className="grid grid-cols-3 gap-5 justify-items-center w-full">
          {projectItems.map((projectItem, idx) => {
            return (
              <li key={idx} className="min-w-full">
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
                  <DialogContent className=" min-w-2xl l m-0 p-0 overflow-y-auto max-h-[90dvh]">
                    <DialogHeader className="w-full p-2 m-0">
                      <div className="relative h-60 w-full overflow-hidden rounded-t-lg border bg-blue-900">
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
                      </div>
                      <DialogTitle />
                    </DialogHeader>

                    <div className="flex flex-col gap-8 max-w-[40dvw] w-full px-5 pb-2">
                      <h2 className="font-bold text-2xl">
                        {projectItem.title}
                      </h2>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-muted-foreground font-bold">
                          ABOUT THIS PROJECT
                        </h3>
                        <p className="text-card-foreground">
                          {projectItem.fullDesciption}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-muted-foreground font-bold">
                          MY ROLE
                        </h3>
                        <p className="text-card-foreground">
                          {projectItem.myRole}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 pb-3">
                        <h3 className="text-muted-foreground font-bold">
                          TECHNOLOGIES USED
                        </h3>
                        <ul className="flex justify-start imtes-center gap-3">
                          {projectItem.skills.map((skill, idx) => {
                            return (
                              <li
                                key={idx}
                                className="border rounded-xl bg-blue-950 w-auto px-2 "
                              >
                                {skill}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <a
                        href="https://family.amiparis.com/fr/marais"
                        className="flex justify-center gap-5 items-center w-full border h-10 rounded-md cursor-pointer hover:scale-105 bg-primary"
                      >
                        <span>Visit Live Site</span>
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
