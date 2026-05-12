import Image from "next/image";

type SkillCardProps = {
  logoUrl: string;
  skillName: string;
  invert: boolean;
};

export default function SkillCard({
  logoUrl,
  skillName,
  invert,
}: SkillCardProps) {
  return (
    <div className="flex flex-col justify-center items-center h-25 rounded-md gap-3 border bg-black w-full p-2">
      <div className="flex items-center justify-center h-10 w-10">
        <Image
          src={logoUrl}
          alt={`logo for ${skillName} skill`}
          width={40}
          height={40}
          sizes="40px"
          className={`max-h-10 max-w-10 object-contain ${invert ? "invert" : ""}`}
        />
      </div>
      <span className="text-xs sm:text-md xl:text-md text-center">
        {skillName}
      </span>
    </div>
  );
}
