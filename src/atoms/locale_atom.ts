import { atom } from "@mongez/react-atom";

export const locale_atom = atom<"ar" | "en">({
  key: "locale",
  default: "en",
});
