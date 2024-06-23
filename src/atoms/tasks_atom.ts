import { ITask } from "@/types/tasks.types";
import { atom } from "@mongez/react-atom";

type TaskAtomType = {
  data: ITask[];
};

export const tasks_atom = atom<TaskAtomType>({
  key: "tasks",
  default: {
    data: [],
  },
});
