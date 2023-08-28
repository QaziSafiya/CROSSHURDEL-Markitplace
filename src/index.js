import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Side from "./Component/Side";
import Viewbuysell from "./Component/Viewbuysell";
import Payment from "./Component/Payment";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/markit",
    element: <Viewbuysell />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
