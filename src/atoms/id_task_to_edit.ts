import { atom } from "@mongez/react-atom";

export const id_task_to_edit = atom<number>({
  key: "id_task_to_edit",
  default: 0,
});
