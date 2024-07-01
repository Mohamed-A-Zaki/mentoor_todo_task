import { locale_atom } from "@/atoms/locale_atom";
import { open_edit_task_atom } from "@/atoms/open_edit_task_atom";
import EditTaskForm from "@/components/home/EditTaskForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function EditTaskDialog() {
  const opened = open_edit_task_atom.useOpened();
  const lang = locale_atom.useValue();

  return (
    <Dialog open={opened} onOpenChange={open_edit_task_atom.toggle}>
      <DialogContent style={{ direction: lang === "en" ? "ltr" : "rtl" }}>
        <EditTaskForm />
      </DialogContent>
    </Dialog>
  );
}
