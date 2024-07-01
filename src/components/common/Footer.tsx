import { useTranslation } from "react-i18next";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-5 bg-slate-100">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <div>{t("Copyright © 2024. All rights reserved.")}</div>
        </div>
      </div>
    </footer>
  );
}
