import Image from "next/image";

type SkillCardProps = {
  logoUrl: string;
  skillName: string;
};

export default function SkillCard({ logoUrl, skillName }: SkillCardProps) {
  return (
    <div className="flex flex-col justify-center items-center w-50 h-30 rounded-md gap-3 border bg-black">
      <Image
        src={logoUrl}
        alt={`logo for ${skillName} skill`}
        width={50}
        height={50}
        className="w-10 h-10 object-contain"
      />

      <span>{skillName}</span>
    </div>
  );
}
