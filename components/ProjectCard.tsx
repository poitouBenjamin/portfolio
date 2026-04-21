import { StaticImageData } from "next/image";
import Image from "next/image";
type ProjectCardProps = {
  cover: StaticImageData;
  title: string;
  description: string;
  skills: string[];
};

export default function ProjectCard({
  cover,
  title,
  description,
}: ProjectCardProps) {
  return (
    <article className="transition-transform duration-500 ease-in-out flex flex-col gap-4 w-full max-w-120 border min-h-120 h-full rounded-lg cursor-pointer hover:scale-105 hover:border hover:border-primary">
      <div className="relative h-60 w-full overflow-hidden rounded-t-lg ">
        <Image
          src={cover}
          alt="AMI Paris Project Map"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black" />
      </div>

      <div className="flex flex-col  px-5 gap-10 justify-between items-start h-full">
        <h4 className="pt-5 font-bold text-accent-foreground">{title}</h4>
        <p className="w-full max-w-100 text-start text-sm">{description}</p>
      </div>
    </article>
  );
}
