import { useTranslations } from "next-intl";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("Footer");
  return (
    <footer className="flex justify-center items-center h-[10dvh] border text-muted-foreground  text-center px-4">
      {t("footer")}
    </footer>
  );
}
