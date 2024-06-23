// import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import router from "./routes/router.tsx";
import { RouterProvider } from "react-router-dom";

import "@/config/cache_config.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>
);
