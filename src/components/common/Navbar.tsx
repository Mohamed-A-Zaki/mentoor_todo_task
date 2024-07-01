import Logo from "./Logo";
import { Button } from "../ui/button";
import { open_create_task_atom } from "@/atoms/open_create_task_atom";
import SelectLocaleCode from "./SelectLocaleCode";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const handleOpenCreateTask = () => {
    /**
     * open create task dialog
     */
    open_create_task_atom.open();
  };

  const { t } = useTranslation();

  return (
    <nav className="shadow-md py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-5">
            <SelectLocaleCode />
            <Button onClick={handleOpenCreateTask}>{t("Create Task")}</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
