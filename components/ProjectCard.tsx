import { ExternalLink } from "lucide-react";
type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  skills: string[];
};

export default function ProjectCard({
  id,
  title,
  description,
  skills,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-4 w-full max-w-120 border min-h-120 h-full rounded-lg cursor-pointer hover:scale-105">
      <div className="flex justify-center items-center h-60 border bg-blue-900 rounded-t-lg">
        {id}
      </div>

      <div className="flex flex-col  px-5 gap-10 justify-between items-start h-full">
        <h4 className="pt-5 font-bold text-accent-foreground">{title}</h4>
        <p className="w-full max-w-100 text-start text-sm">{description}</p>
      </div>
    </article>
  );
}
