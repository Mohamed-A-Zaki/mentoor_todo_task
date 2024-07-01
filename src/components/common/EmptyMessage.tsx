import { useTranslation } from "react-i18next";

export default function EmptyMessage() {
  const { t } = useTranslation();

  return (
    <h3 className="p-4 text-center font-medium text-xl bg-slate-200 rounded-md my-5">
      {t("there is no tasks")}
    </h3>
  );
}
