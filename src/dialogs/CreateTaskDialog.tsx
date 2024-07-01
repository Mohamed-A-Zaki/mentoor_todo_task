import { Dialog, DialogContent } from "@/components/ui/dialog";
import { open_create_task_atom } from "@/atoms/open_create_task_atom";
import CreateTaskForm from "../components/home/CreateTaskForm";
import { locale_atom } from "@/atoms/locale_atom";

export default function CreateTaskDialog() {
  const opened = open_create_task_atom.useOpened();
  const lang = locale_atom.useValue();

  return (
    <Dialog open={opened} onOpenChange={open_create_task_atom.toggle}>
      <DialogContent style={{ direction: lang === "en" ? "ltr" : "rtl" }}>
        <CreateTaskForm />
      </DialogContent>
    </Dialog>
  );
}
