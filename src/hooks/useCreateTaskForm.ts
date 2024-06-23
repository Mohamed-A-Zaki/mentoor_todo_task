import { open_create_task_atom } from "./../atoms/open_create_task_atom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import toast from "react-hot-toast";
import { tasks_atom } from "@/atoms/tasks_atom";
import { ITask } from "@/types/tasks.types";

export default function useCreateTaskForm() {
  const { data } = tasks_atom.useValue();

  const FormSchema = z.object({
    name: z.string().min(3, "name must be at least 3 characters.").trim(),
    description: z
      .string()
      .min(10, "description must be at least 10 characters.")
      .max(160, "description must not be longer than 160 characters.").trim(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    /**
     * add the task to the tasks list
     */
    const object_to_add: ITask = {
      id: Date.now(),
      ...values,
      createdAt: new Date().toString(),
      completed: false,
    };

    /***
     * update the tasks list
     */
    tasks_atom.change("data", [...data, object_to_add]);

    /***
     * close the create task form
     */
    open_create_task_atom.close();

    /***
     * show success toast
     */
    toast.success("task created successfully");
  }

  return {
    form,
    onSubmit,
  };
}
