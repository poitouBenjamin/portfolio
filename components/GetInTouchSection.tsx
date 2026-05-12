import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function GetInTouchSection() {
  const t = useTranslations("GetInTouchSection");

  return (
    <section
      id="getInTouchSection"
      className="flex flex-col justify-center items-center  min-h-[90dvh] px-4"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center pb-4">
        {t("title")}
      </h2>

      <div className="h-1 w-20 bg-linear-to-r from-gradient-start to-gradient-end rounded-full" />
      <div className="flex flex-col justify-center items-center gap-10 pt-10">
        <p className="text-muted-foreground text-lg w-full max-w-150 text-center pt-4">
          {t("description")}
        </p>

        <button className="btn-gradient flex justify-around items-center w-full max-w-65 h-10 bg-blue-950 rounded-lg px-2 cursor-pointer hover:scale-105">
          <Mail size={20} />
          <span>poitoubenjamin@gmail.com</span>
        </button>
      </div>
    </section>
  );
}
