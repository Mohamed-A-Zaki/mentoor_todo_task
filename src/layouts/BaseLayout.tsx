import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { locale_atom } from "@/atoms/locale_atom";
import useCacheLang from "@/hooks/useCacheLang";

export default function BaseLayout() {
  const lang = locale_atom.useValue();

  /***
   * store the lang in the cache
   */
  useCacheLang();

  return (
    <div style={{ direction: lang === "en" ? "ltr" : "rtl" }}>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}
