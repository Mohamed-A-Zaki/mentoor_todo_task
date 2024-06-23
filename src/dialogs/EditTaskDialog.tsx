import { open_edit_task_atom } from "@/atoms/open_edit_task_atom";
import EditTaskForm from "@/components/home/EditTaskForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function EditTaskDialog() {
  const opened = open_edit_task_atom.useOpened();

  return (
    <Dialog open={opened} onOpenChange={open_edit_task_atom.toggle}>
      <DialogContent>
        <EditTaskForm />
      </DialogContent>
    </Dialog>
  );
}
