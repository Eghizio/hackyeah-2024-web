import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../App";
import { PrivateRoute } from "./PrivateRoute";
import { Auth } from "../pages/Auth/Auth";
import { Home } from "../pages/Home/Home";
import { Profile } from "../pages/Profile/Profile";
import { Benefits } from "../pages/Benefits/Benefits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/benefits",
        element: (
          <PrivateRoute>
            <Benefits />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export const Routing = () => <RouterProvider router={router} />;
