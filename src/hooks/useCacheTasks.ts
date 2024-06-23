import { tasks_atom } from "@/atoms/tasks_atom";
import cache from "@mongez/cache";
import { useEffect } from "react";

export default function useCacheTasks() {
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
}
