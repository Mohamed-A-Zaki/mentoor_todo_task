import { tasks_atom } from "@/atoms/tasks_atom";
import TasksList from "./TasksList";
import useCacheTasks from "@/hooks/useCacheTasks";

export default function Tasks() {
  const { data } = tasks_atom.useValue();

  /**
   * count the number of completed tasks
   */
  const completed_tasks = data.filter((task) => task.completed).length;

  /***
   * store the tasks list in the cache
   */
  useCacheTasks();

  return (
    <div>
      <div className="container">
        <div>
          <h2 className="font-bold text-3xl mt-10">
            Tasks ( {completed_tasks} completed / {data.length} )
          </h2>
          <TasksList />
        </div>
      </div>
    </div>
  );
}
