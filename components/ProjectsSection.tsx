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

const projectItems = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A responsive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
    fullDesciption:
      "A comprehensive e-commerce administration platform built to streamline online store management. Features include real-time sales analytics, inventory tracking, order processing workflows, and customer behavior insights. The dashboard provides actionable metrics through interactive charts and supports bulk operations for efficient product management.",
    myRole:
      "Lead Frontend Developer - Designed and implemented the entire frontend architecture, created reusable component library, integrated REST APIs, and optimized performance for handling large datasets.",
    skills: ["React", "Tailwind", "Chart.js"],
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
    <section className="w-full flex flex-col justify-center items-center h-screen gap-5">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center">
        My Projects
      </h2>
      <div className=" flex flex-col items-center justify-center text-muted-foreground text-lg gap-9">
        <p className="text-center w-full max-w-150">
          Here are some of my recent projects that showcase my skills and
          passion for frontend development.
        </p>

        <ul className="grid grid-cols-3 gap-5">
          {projectItems.map((projectItem, idx) => {
            return (
              <li key={idx}>
                <Dialog>
                  <DialogTrigger>
                    <ProjectCard
                      id={projectItem.id}
                      title={projectItem.title}
                      description={projectItem.description}
                      skills={projectItem.skills}
                    />
                  </DialogTrigger>
                  <DialogContent className=" min-w-xl l m-0 p-0">
                    <DialogHeader className="w-full p-0 m-0">
                      <div className="flex justify-center items-center h-60 border bg-blue-900 rounded-t-lg">
                        {projectItem.id}
                      </div>
                      <DialogTitle />
                    </DialogHeader>

                    <div className="flex flex-col gap-8 max-w-[50dvw] w-full px-5 pb-2">
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
                      <div className="flex justify-center gap-5 items-center w-full border h-10 rounded-md cursor-pointer hover:scale-105 bg-primary">
                        <button>Visit Live Site</button>
                        <ExternalLink size={17} />
                      </div>
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
