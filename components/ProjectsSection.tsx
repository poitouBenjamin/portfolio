import ProjectCard from "./ProjectCard";

const projectItems = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A responsive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
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
    <section className="w-full flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center pb-4">
        My Projects
      </h2>
      <div className=" flex flex-col items-center justify-center text-muted-foreground text-lg  pt-10 pb-20">
        <p className="text-center w-full max-w-150">
          Here are some of my recent projects that showcase my skills and
          passion for frontend development.
        </p>

        <ul className="grid grid-cols-3 gap-5 pt-15">
          {projectItems.map((projectItem, idx) => {
            return (
              <li key={idx}>
                <ProjectCard
                  id={projectItem.id}
                  title={projectItem.title}
                  description={projectItem.description}
                  skills={projectItem.skills}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
