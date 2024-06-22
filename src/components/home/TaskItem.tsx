import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";
import useTaskItem from "@/hooks/useTaskItem";
import { ITask } from "@/types/tasks.types";

export default function TaskItem({ id, name, description }: ITask) {
  const { handleDeleteTask, handleEditTask } = useTaskItem(id);

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>{name}</CardTitle>
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
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
