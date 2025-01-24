import { createBrowserRouter } from "react-router-dom";

import { Headers } from "@/widgets";

import { App } from "../app";
import { AboutLazy, ShopLazy } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Headers />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/about",
        element: <AboutLazy />,
      },
      {
        path: "/shop",
        element: <ShopLazy />,
      },
    ],
  },
  {
    path: "*",
    element: <>Page is not found</>,
  },
]);
