import EmptyMessage from "../common/EmptyMessage";
import { tasks_atom } from "@/atoms/tasks_atom";
import TaskItem from "./TaskItem";

export default function TasksList() {
  const { data } = tasks_atom.useValue();

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
