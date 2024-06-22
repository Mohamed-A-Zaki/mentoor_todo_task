import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { id_task_to_edit } from "@/atoms/id_task_to_edit";
import { tasks_atom } from "@/atoms/tasks_atom";
import { open_edit_task_atom } from "@/atoms/open_edit_task_atom";

export default function useEditTaskForm() {
  const { data } = tasks_atom.useValue();

  const task_id = id_task_to_edit.useValue();

  const FormSchema = z.object({
    name: z.string().min(3, "name must be at least 3 characters."),
    description: z
      .string()
      .min(10, "description must be at least 10 characters.")
      .max(160, "description must not be longer than 160 characters."),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    /***
     * set the default values for the form
     */
    form.reset(data.find((task) => task.id === task_id));
  }, [data, form, task_id]);

  function onSubmit(values: z.infer<typeof FormSchema>) {
    /***
     * update the task in the tasks list
     */
    const data_with_edits = data.map((task) => {
      return task.id === task_id ? { ...task, ...values } : task;
    });

    /**
     * update the tasks list
     */
    tasks_atom.change("data", data_with_edits);

    /**
     * close the edit task form
     */
    open_edit_task_atom.close();

    /***
     * show success toast
     */
    toast.success("task updated successfully");
  }

  return {
    form,
    onSubmit,
  };
}
