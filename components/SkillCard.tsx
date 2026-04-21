import Image from "next/image";

type SkillCardProps = {
  logoUrl: string;
  skillName: string;
};

export default function SkillCard({ logoUrl, skillName }: SkillCardProps) {
  return (
    <div className="flex flex-col justify-center items-center h-25 rounded-md gap-3 border bg-black w-full p-2">
      <div className="relative h-8 w-15 overflow-hidden">
        <Image
          src={logoUrl}
          alt={`logo for ${skillName} skill`}
          fill
          className=" object-contain"
        />
      </div>
      <span className="text-xs sm:text-md xl:text-lg text-center">
        {skillName}
      </span>
    </div>
  );
}
