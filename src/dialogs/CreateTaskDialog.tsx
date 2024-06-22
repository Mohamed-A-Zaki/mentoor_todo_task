import { Dialog, DialogContent } from "@/components/ui/dialog";
import { open_create_task_atom } from "@/atoms/open_create_task_atom";
import CreateTaskForm from "../components/home/CreateTaskForm";

export default function CreateTaskDialog() {
  const opened = open_create_task_atom.useOpened();

  console.log("Create Task Dialog Rendered");

  return (
    <Dialog open={opened} onOpenChange={open_create_task_atom.toggle}>
      <DialogContent>
        <CreateTaskForm />
      </DialogContent>
    </Dialog>
  );
}
