import { ITask } from "@/types/tasks.types";
import { atom } from "@mongez/react-atom";

export const tasks_atom = atom<{ data: ITask[] }>({
  key: "tasks",
  default: {
    data: [],
  },
});
