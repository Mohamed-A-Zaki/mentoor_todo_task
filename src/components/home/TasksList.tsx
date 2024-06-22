import EmptyMessage from "../common/EmptyMessage";
import { tasks_atom } from "@/atoms/tasks_atom";
import TaskItem from "./TaskItem";
import { useEffect } from "react";
import cache from "@mongez/cache";

export default function TasksList() {
  const { data } = tasks_atom.useValue();

  useEffect(() => {
    const data = cache.get("tasks_list");

    if (data) {
      /***
       * update the tasks list
       */
      tasks_atom.change("data", data);
    }
  }, []);

  useEffect(() => {
    /**
     * store the tasks list in the cache
     */
    cache.set("tasks_list", data);
  }, [data]);

  if (data.length === 0) {
    return <EmptyMessage />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      {data.map((task) => {
        return <TaskItem key={task.id} {...task} />;
      })}
    </div>
  );
}
