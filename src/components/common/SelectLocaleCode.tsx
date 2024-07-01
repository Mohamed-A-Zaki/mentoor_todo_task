import { locale_atom } from "@/atoms/locale_atom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import i18n from "@/locales/i18n";

export default function SelectLocaleCode() {
  const lang = locale_atom.useValue();

  const handleChangeLang = (e: "ar" | "en") => {
    locale_atom.update(e);
    i18n.changeLanguage(e);
  };

  return (
    <Select value={lang} onValueChange={handleChangeLang}>
      <SelectTrigger>
        <SelectValue placeholder="lang" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ar">ar</SelectItem>
        <SelectItem value="en">en</SelectItem>
      </SelectContent>
    </Select>
  );
}
