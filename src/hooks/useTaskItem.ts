import { id_task_to_edit } from "@/atoms/id_task_to_edit";
import { open_edit_task_atom } from "@/atoms/open_edit_task_atom";
import { tasks_atom } from "@/atoms/tasks_atom";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

type CheckedState = boolean | string;

export default function useTaskItem(id: number) {
  const { data } = tasks_atom.useValue();

  const { t } = useTranslation();

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

  const handleCompleteTask = (checked: CheckedState, id: number) => {
    /***
     * update the task in the tasks list
     */
    const updated_data = [...data].map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: checked,
        };
      } else {
        return task;
      }
    });

    /***
     * update the tasks list
     */
    tasks_atom.change("data", updated_data);
  };

  return {
    handleDeleteTask,
    handleEditTask,
    handleCompleteTask,
    t,
  };
}
