import SkillsCarousel from "./SkillsCarousel";
import { useTranslations } from "next-intl";

export default function AboutMeSection() {
  const t = useTranslations("AboutMeSection");
  return (
    <section
      id="aboutSection"
      className="flex flex-col justify-center min-h-dvh items-center w-full"
    >
      <h2 className="text-3xl md:text-4xl font-bold  text-foreground w-full text-center pb-4 ">
        {t("title")}
      </h2>
      <div className="h-1 w-20 bg-linear-to-r from-gradient-start to-gradient-end rounded-full" />
      <div className="flex xl:flex-row flex-col justify-between items-start gap-6 md:gap-2 w-full px-5 sm:px-10 md:px-20 py-20">
        <article className="flex flex-col  xl:justify-start items-center h-full text-xl text-foreground w-full max-w-full xl:max-w-1/2 pb-10 xl:pb-0 xl:pr-10">
          <div className="flex flex-col justify-center items-center gap-5 w-full text-lg font-light text-muted-foreground">
            <p>{t("description_1st_part")}</p>

            <p>{t("description_2nd_part")}</p>
            <p>{t("description_3rd_part")}</p>
          </div>
        </article>
        <article className="flex flex-col w-full max-w-full xl:max-w-1/2 justify-start items-start">
          <h3 className="font-bold text-2xl pb-7">My skills</h3>
          <SkillsCarousel />
        </article>
      </div>
    </section>
  );
}
