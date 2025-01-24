import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/router";

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />,
);
