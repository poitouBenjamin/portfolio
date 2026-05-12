import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="flex justify-center items-center py-3 px-2 border-t text-muted-foreground  text-sm text-center w-full">
      {t("footer")}
    </footer>
  );
}
