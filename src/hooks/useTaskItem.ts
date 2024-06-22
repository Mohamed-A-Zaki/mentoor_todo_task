import { id_task_to_edit } from "@/atoms/id_task_to_edit";
import { open_edit_task_atom } from "@/atoms/open_edit_task_atom";
import { tasks_atom } from "@/atoms/tasks_atom";
import toast from "react-hot-toast";

export default function useTaskItem(id: number) {
  const { data } = tasks_atom.useValue();

  const handleDeleteTask = () => {
    /**
     * remove the task from the tasks list
     */
    const new_data = data.filter((ele) => {
      return ele.id !== id;
    });

    /***
     * update the tasks list
     */
    tasks_atom.change("data", new_data);

    /***
     * show a success toast
     */
    toast.success("deleted successfully");
  };

  const handleEditTask = () => {
    /**
     * update the id of the task to edit
     */
    id_task_to_edit.update(id);

    /***
     * open the edit task form
     */
    open_edit_task_atom.open();
  };

  return {
    handleDeleteTask,
    handleEditTask,
  };
}
