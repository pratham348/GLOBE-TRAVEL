import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Flight from "../views/Flight/Flight";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/flight",
      element: <Flight/>,
    },
  ]);