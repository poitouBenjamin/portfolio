import React from "react";
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
    <article className="flex flex-col  gap-4 h-120 w-full max-w-95 border rounded-lg">
      <div className="flex justify-center items-center h-1/2 border bg-blue-900">
        {id}
      </div>

      <div className="flex flex-col gap-5 px-5">
        <h4 className="pt-5">{title}</h4>
        <p className="w-full max-w-100">{description}</p>
        <ul className="flex gap-2 ">
          {skills.map((skill, id) => {
            return (
              <li key={id} className="border bg-gray-700 px-2 rounded-xl">
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
