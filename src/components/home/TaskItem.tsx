import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";
import useTaskItem from "@/hooks/useTaskItem";
import { ITask } from "@/types/tasks.types";
import { Checkbox } from "../ui/checkbox";

export default function TaskItem({ id, name, description, completed }: ITask) {
  const { handleDeleteTask, handleEditTask, handleCompleteTask } =
    useTaskItem(id);

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {name}
        </CardTitle>
        <div className="flex gap-3">
          <Trash2
            size={20}
            className="cursor-pointer"
            onClick={handleDeleteTask}
          />
          <Edit size={20} className="cursor-pointer" onClick={handleEditTask} />
        </div>
      </CardHeader>
      <CardContent>
        <p style={{ textDecoration: completed ? "line-through" : "none" }}>
          {description}
        </p>

        <div className="flex items-center space-x-2 mt-5">
          <Checkbox
            id={id.toString()}
            checked={completed}
            onCheckedChange={(checked) => handleCompleteTask(checked, id)}
          />
          <label
            htmlFor={id.toString()}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Completed
          </label>
        </div>
      </CardContent>
    </Card>
  );
}
