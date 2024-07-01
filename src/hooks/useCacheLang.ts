import { locale_atom } from "@/atoms/locale_atom";
import i18n from "@/locales/i18n";
import cache from "@mongez/cache";
import { useEffect } from "react";

export default function useCacheLang() {
  const lang = locale_atom.useValue();

  useEffect(() => {
    const lang = cache.get("lang");

    if (lang) {
      /**
       * update the locale atom
       */
      locale_atom.update(lang);

      /**
       * change the i18n lang
       */
      i18n.changeLanguage(lang);
    }
  }, []);

  useEffect(() => {
    /***
     * store the lang in the cache
     */
    cache.set("lang", lang);
  }, [lang]);
}
